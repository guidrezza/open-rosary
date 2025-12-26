<script lang="ts">
	import { page } from '$app/stores';
	import { getLocale } from '$lib/i18n';
	import { rosary } from '$lib/stores';
	import type { RosarySection, Mystery } from '$lib/types';
	import GlassPanel from '$lib/components/GlassPanel.svelte';
	import PrayerModal from '$lib/components/PrayerModal.svelte';
	import BottomSheet from '$lib/components/BottomSheet.svelte';
	import MysteryImage from '$lib/components/MysteryImage.svelte';
	import SectionMenu from '$lib/components/SectionMenu.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';

	let lang = $derived($page.params.lang);
	let t = $derived(getLocale(lang));
	let mode = $derived($rosary.mode);

	// Initialize state
	let currentSection = $state<RosarySection>('intro');
	let currentBeadIndex = $state(0); // For Digital Mode

	// Get mystery from query param
	let mysteryId = $derived(browser ? $page.url.searchParams.get('mystery') || 'joyful' : 'joyful');
	let mystery = $derived(t.mysteries[mysteryId] || t.mysteries['joyful']);

	// Computed Steps
	function getStepsForSection(sec: RosarySection, mys: Mystery) {
		if (sec === 'intro') {
			return [
				{ prayerId: 'sign_of_cross', label: 'S' },
				{ prayerId: 'creed', label: 'C' },
				{ prayerId: 'our_father', label: 'P' },
				{ prayerId: 'hail_mary', label: 'A' },
				{ prayerId: 'hail_mary', label: 'A' },
				{ prayerId: 'hail_mary', label: 'A' },
				{ prayerId: 'glory_be', label: 'G' },
				{ prayerId: 'fatima', label: 'J' }
			];
		} else if (sec === 'conclusion') {
			return [
				{ prayerId: 'hail_holy_queen', label: 'R' },
				{ prayerId: 'closing_prayer', label: 'O' },
				{ prayerId: 'sign_of_cross', label: 'S' }
			];
		} else {
			// Decade 1-5
			const decadeNum = parseInt(sec.split('-')[1]);
			const passage = mys.passages[decadeNum - 1];

			return [
				{ prayerId: 'announce', label: 'M', passage },
				{ prayerId: 'our_father', label: 'P' },
				...Array(10).fill({ prayerId: 'hail_mary', label: 'A' }),
				{ prayerId: 'glory_be', label: 'G' },
				{ prayerId: 'fatima', label: 'J' }
			];
		}
	}

	let steps = $derived(getStepsForSection(currentSection, mystery));

	// Header Logic
	let exitState = $state(false);
	let sectionMenuOpen = $state(false);

	function handleMysteryClick() {
		if (!exitState) {
			exitState = true;
			setTimeout(() => (exitState = false), 3000); // Reset after 3s
		} else {
			goto(`${base}/${lang}`);
		}
	}

	// Modal Logic
	let modalOpen = $state(false);
	let modalContent = $state({ title: '', content: '' });

	function openPrayer(step: any) {
		if (step.prayerId === 'announce') {
			const parsed = parseMysteryPassage(step.passage || '');
			modalContent = {
				title: parsed.title || t.ui.announce, // Fallback if parsing fails
				content: `${parsed.verse}\n\n${parsed.fruit}`
			};
		} else {
			const prayer = t.prayers[step.prayerId];
			modalContent = {
				title: prayer.title,
				content: prayer.content
			};
		}
		modalOpen = true;
	}

	// Navigation Logic
	const SECTIONS: RosarySection[] = [
		'intro',
		'decade-1',
		'decade-2',
		'decade-3',
		'decade-4',
		'decade-5',
		'conclusion'
	];

	function goToNext() {
		if (mode === 'digital') {
			// Move bead by bead
			if (currentBeadIndex < steps.length - 1) {
				currentBeadIndex++;
			} else {
				// Next Section
				const idx = SECTIONS.indexOf(currentSection);
				if (idx < SECTIONS.length - 1) {
					currentSection = SECTIONS[idx + 1];
					currentBeadIndex = 0;
				} else {
					goto(`${base}/${lang}`);
				}
			}
		} else {
			// Physical: Page by Page
			const idx = SECTIONS.indexOf(currentSection);
			if (idx < SECTIONS.length - 1) {
				currentSection = SECTIONS[idx + 1];
			} else {
				goto(`${base}/${lang}`);
			}
		}
	}

	function goToPrev() {
		if (mode === 'digital') {
			if (currentBeadIndex > 0) {
				currentBeadIndex--;
			} else {
				// Prev Section
				const idx = SECTIONS.indexOf(currentSection);
				if (idx > 0) {
					const prevSec = SECTIONS[idx - 1];
					// Should we go to LAST bead of prev section?
					// Usually yes for true navigation, but let's simplify to start of prev section or maintain intuitive flow.
					// User said: "Hitting next should move... only then switch". Reverse implies similar.
					// Let's go to start of prev section for simplicity or last bead? Last bead is better UX.
					const prevSteps = getStepsForSection(prevSec, mystery);
					currentSection = prevSec;
					currentBeadIndex = prevSteps.length - 1;
				}
			}
		} else {
			const idx = SECTIONS.indexOf(currentSection);
			if (idx > 0) {
				currentSection = SECTIONS[idx - 1];
			}
		}
	}

	// UI Text
	let sectionTitle = $derived.by(() => {
		if (currentSection === 'intro') return t.ui.sections.intro;
		if (currentSection === 'conclusion') return t.ui.sections.conclusion;
		const num = currentSection.split('-')[1];
		const ordinals = t.ui.ordinals;
		return `${ordinals[parseInt(num) - 1]} ${t.ui.sections.decade}`;
	});

	let mysteryMessage = $derived.by(() => {
		if (currentSection.startsWith('decade')) {
			const decadeNum = parseInt(currentSection.split('-')[1]);
			return mystery.passages[decadeNum - 1];
		}
		return '';
	});

	function parseMysteryPassage(text: string) {
		if (!text) return { title: '', verse: '', fruit: '' };
		const parts = text.split('\n\n');
		const firstLine = parts[0] || '';
		const titleEndIndex = firstLine.indexOf(':');

		let title = '';
		let verse = firstLine;

		if (titleEndIndex !== -1) {
			title = firstLine.substring(0, titleEndIndex).trim();
			verse = firstLine.substring(titleEndIndex + 1).trim();
			// Remove quotes from verse if present (usually formatted as Title: "Verse")
			if (verse.startsWith('"') && verse.lastIndexOf('"') > 0) {
				// keep as is, it's already formatted nicely
			}
		}

		const fruit = parts[1] || '';
		return { title, verse, fruit };
	}

	let parsedMystery = $derived(parseMysteryPassage(mysteryMessage));

	// Header Title Logic
	let headerTitle = $derived.by(() => {
		if (currentSection.startsWith('decade')) {
			return parsedMystery.title || sectionTitle; // Use Parsed Title if available
		}
		return sectionTitle;
	});

	let menuSections = $derived.by(() => {
		const items: { id: RosarySection; label: string }[] = [
			{ id: 'intro', label: t.ui.sections.intro }
		];

		// Decades
		for (let i = 1; i <= 5; i++) {
			items.push({
				id: `decade-${i}` as RosarySection,
				label: `${t.ui.ordinals[i - 1]} ${t.ui.sections.decade}`
			});
		}

		items.push({ id: 'conclusion', label: t.ui.sections.conclusion });
		return items;
	});

	// Bead Layout Config
	const BEAD_SPACING = 23;
	const BEAD_OFFSET_Y = 22;
	const BEAD_SIZE = 25;
	const CENTER_OFFSET = BEAD_SIZE / 2;
	const VERTICAL_OFFSET = 12; // Centering offset

	function getConnectorPath(i: number, active: boolean) {
		const x1 = i * BEAD_SPACING + CENTER_OFFSET;
		const y1 = (i % 2 === 0 ? CENTER_OFFSET : CENTER_OFFSET + BEAD_OFFSET_Y) + VERTICAL_OFFSET;

		const x2 = (i + 1) * BEAD_SPACING + CENTER_OFFSET;
		const y2 =
			((i + 1) % 2 === 0 ? CENTER_OFFSET : CENTER_OFFSET + BEAD_OFFSET_Y) + VERTICAL_OFFSET;

		// Squiggly S-curve
		// Control points
		const cp1x = x1 + BEAD_SPACING * 0.5;
		const cp1y = y1;
		const cp2x = x1 + BEAD_SPACING * 0.5;
		const cp2y = y2;

		return `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;
	}
</script>

<div class="relative flex h-screen flex-col pb-20">
	<!-- Header -->
	<header class="z-30 flex-none p-6">
		<GlassPanel class="flex items-center justify-between px-4 py-3">
			<button
				class="xs:max-w-none max-w-[150px] truncate text-sm font-medium transition-colors duration-200 {exitState
					? 'font-bold text-red-400'
					: 'text-white/60'}"
				onclick={handleMysteryClick}
			>
				{exitState ? t.ui.actions.exit : mystery.name}
			</button>

			<button
				class="font-bold text-white transition-colors hover:text-white/80"
				onclick={() => (sectionMenuOpen = true)}
			>
				{headerTitle} ▾
			</button>
		</GlassPanel>
	</header>

	<!-- Main Content -->
	<main
		class="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-start gap-2 overflow-hidden px-0"
	>
		<!-- Top Visuals -->
		<div class="flex w-full flex-none flex-col items-center gap-2">
			<!-- Mystery Image - FULL WIDTH WITH BEZEL -->
			<div class="w-full px-6">
				<div
					class="relative z-0 aspect-[21/9] w-full sm:aspect-video sm:w-auto sm:max-w-lg sm:overflow-hidden sm:rounded-[32px]"
				>
					<MysteryImage />
				</div>
			</div>

			<!-- Beads Container (Snake Layout) - NOW ABOVE TEXT -->
			<div
				class="no-scrollbar flex w-full flex-none items-center justify-center overflow-x-auto overflow-y-hidden py-1"
			>
				<!-- Zigzag Container -->
				<div
					class="relative mx-auto flex-none"
					style="width: {steps.length * BEAD_SPACING + 10}px; height: {BEAD_OFFSET_Y + 50}px;"
				>
					<!-- SVG Connectors Layer -->
					<svg class="pointer-events-none absolute inset-0 z-0 h-full w-full">
						{#each steps as _, i}
							{#if i < steps.length - 1}
								<!-- Background Line -->
								<path
									d={getConnectorPath(i, false)}
									fill="none"
									stroke="rgba(255,255,255,0.2)"
									stroke-width="2"
									stroke-linecap="round"
								/>
								<!-- Active Progress Line -->
								{#if mode === 'digital' && i < currentBeadIndex}
									<path
										d={getConnectorPath(i, true)}
										fill="none"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										class="transition-all duration-500"
									/>
								{/if}
							{/if}
						{/each}
					</svg>

					<!-- Beads Layer -->
					{#each steps as step, i}
						<button
							class="
                                absolute z-10 flex h-[25px] w-[25px] items-center justify-center rounded-full transition-all duration-300
                                {mode === 'physical'
								? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
								: i <= currentBeadIndex
									? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
									: 'border border-white/5 bg-black/40 text-white/40'}
                            "
							style="
                                left: {i * BEAD_SPACING}px; 
                                top: {(i % 2 === 0 ? 0 : BEAD_OFFSET_Y) + VERTICAL_OFFSET}px;
                                transform: scale({mode === 'digital' && i === currentBeadIndex
								? 1.4
								: 1});
                            "
							onclick={() => {
								if (mode === 'digital') currentBeadIndex = i;
							}}
						>
							<span class="text-[10px] leading-none font-medium">{step.label}</span>

							{#if mode === 'digital' && i === currentBeadIndex}
								<div class="absolute inset-0 animate-ping rounded-full bg-white opacity-40"></div>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- Context Text & Prayer Area -->
		<div class="flex w-full flex-none flex-col items-center px-6 text-center">
			<!-- Context Text / Title -->
			{#if mysteryMessage && mode === 'physical'}
				<!-- Physical: Show Mystery Name/Context -->
				<!-- REMOVED: Top Mystery Context per request -->
				<!-- Just show section title if needed, or subtext -->
				<h3 class="mb-0 text-lg font-bold">{sectionTitle}</h3>

				<p class="mt-1 text-[10px] tracking-widest text-white/50 uppercase">
					Click any prayer to expand
				</p>
			{:else if mode === 'digital'}
				<!-- Digital: Show Current Prayer Title -->
				<div class="flex min-h-8 items-center justify-center text-center">
					<h2 class="text-xl leading-tight font-bold text-white">
						{#if steps[currentBeadIndex].prayerId === 'announce'}
							{parsedMystery.title || t.ui.announce}
						{:else}
							{t.prayers[steps[currentBeadIndex].prayerId].title}
						{/if}
					</h2>
				</div>
			{/if}
		</div>

		<!-- Prayer Text / List Area -->
		<div class="min-h-0 w-full flex-1 overflow-y-auto px-6 pb-6">
			{#if mode === 'digital'}
				<!-- Digital: Show FULL TEXT of current prayer -->
				<div class="rounded-2xl p-2 pt-0">
					{#if steps[currentBeadIndex].prayerId === 'announce'}
						<!-- Mystery Content: Verse + Fruit (Title is in header above) -->
						<div class="flex flex-col gap-4 text-center">
							<p class="text-base leading-relaxed text-white/90 italic">
								{parsedMystery.verse}
							</p>
							{#if parsedMystery.fruit}
								<p class="text-sm font-medium tracking-wide text-white/80">
									{parsedMystery.fruit}
								</p>
							{/if}
						</div>
					{:else}
						<p class="text-lg leading-relaxed whitespace-pre-wrap text-white/90">
							{t.prayers[steps[currentBeadIndex].prayerId].content}
						</p>
					{/if}
				</div>
			{:else}
				<!-- Physical: List View (Deduplicated) -->
				<div class="mx-auto flex w-full max-w-lg flex-col gap-1">
					{#each Array.from(new Set(steps.map((s) => s.prayerId + (s.passage || '')))).map((key) => steps.find((s) => s.prayerId + (s.passage || '') === key)!) as step}
						<button
							class="group flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-white/5"
							onclick={() => openPrayer(step)}
						>
							<div
								class="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white text-[10px] font-medium text-black shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-colors"
							>
								{step.label}
							</div>
							<div class="flex-1 leading-none">
								{#if step.prayerId === 'announce'}
									<!-- Mystery in list view -->
									{@const parsed = parseMysteryPassage(step.passage || '')}
									<div class="flex flex-col gap-1 py-1">
										<span class="block text-base leading-tight font-bold text-white">
											{parsed.title || t.ui.announce}
										</span>
										<span class="text-sm leading-snug text-white/80 italic">
											{parsed.verse}
										</span>
										{#if parsedMystery.fruit}
											<span class="mt-0.5 text-xs font-medium tracking-wider text-white/60">
												{parsedMystery.fruit}
											</span>
										{/if}
									</div>
								{:else}
									<span
										class="text-base font-medium text-white/80 transition-colors group-hover:text-white"
									>
										{t.prayers[step.prayerId].title}
									</span>
								{/if}
							</div>
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</main>

	<!-- Navigation Controls -->
	<div
		class="pointer-events-none fixed right-0 bottom-0 left-0 z-40 mx-auto flex w-full max-w-md justify-between px-6 pb-6"
	>
		<button
			class="pointer-events-auto flex h-14 min-w-[140px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 font-medium text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
			onclick={goToPrev}
			disabled={currentSection === 'intro' && (mode === 'physical' || currentBeadIndex === 0)}
			title={t.ui.actions.back}
		>
			<span>←</span>
			<span class="text-sm tracking-wider uppercase">{t.ui.actions.back}</span>
		</button>

		<button
			class="pointer-events-auto flex h-14 min-w-[140px] items-center justify-center gap-2 rounded-full bg-white px-6 font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95"
			onclick={goToNext}
			title={t.ui.actions.next}
		>
			<span class="text-sm tracking-wider uppercase">{t.ui.actions.next}</span>
			<span>→</span>
		</button>
	</div>

	<!-- Modals -->
	{#if mode === 'digital'}
		<PrayerModal
			isOpen={modalOpen}
			title={modalContent.title}
			content={modalContent.content}
			onClose={() => (modalOpen = false)}
		/>
	{:else}
		<!-- Unguided: Use BottomSheet -->
		<BottomSheet isOpen={modalOpen} title={modalContent.title} onClose={() => (modalOpen = false)}>
			<div class="px-1 pb-4 text-lg leading-relaxed whitespace-pre-wrap text-white/90">
				{modalContent.content}
			</div>
		</BottomSheet>
	{/if}

	<SectionMenu
		isOpen={sectionMenuOpen}
		title={t.ui.menus.jump_to_section}
		sections={menuSections}
		{currentSection}
		onSelect={(sec) => {
			currentSection = sec;
			currentBeadIndex = 0;
			sectionMenuOpen = false;
		}}
		onClose={() => (sectionMenuOpen = false)}
	/>
</div>

<style>
	/* Hide scrollbar for bead row */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
