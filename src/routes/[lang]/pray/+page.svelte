<script lang="ts">
	import { page } from '$app/stores';
	import { getLocale } from '$lib/i18n';
	import { rosary } from '$lib/stores';
	import type { RosarySection, Mystery } from '$lib/types';
	import GlassPanel from '$lib/components/GlassPanel.svelte';
	import PrayerModal from '$lib/components/PrayerModal.svelte';
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
				{ prayerId: 'glory_be', label: 'G' }
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
			goto(`${base}/`);
		}
	}

	// Modal Logic
	let modalOpen = $state(false);
	let modalContent = $state({ title: '', content: '' });

	function openPrayer(step: any) {
		if (step.prayerId === 'announce') {
			const decadeNum = parseInt(currentSection.split('-')[1]);
			modalContent = {
				title: `${mystery.name} - ${decadeNum}`,
				content: step.passage || ''
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
</script>

<div class="relative flex h-screen flex-col pb-32">
	<!-- Header -->
	<header class="z-30 flex-none p-4">
		<GlassPanel class="flex items-center justify-between px-4 py-3">
			<button
				class="text-sm font-medium transition-colors duration-200 {exitState
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
				{sectionTitle} ▾
			</button>
		</GlassPanel>
	</header>

	<!-- Main Content -->
	<main
		class="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-start gap-6 overflow-hidden px-4"
	>
		<!-- Top Visuals -->
		<div class="flex w-full flex-none flex-col items-center gap-4">
			<!-- Mystery Image -->
			<div class="aspect-square w-[120px]">
				<MysteryImage />
			</div>

			<!-- Context Text -->
			{#if mysteryMessage && mode === 'physical'}
				<div class="px-2 text-center">
					<p class="text-sm leading-relaxed text-white/90 italic">{mysteryMessage}</p>
				</div>
			{/if}

			<!-- Digital Mode Context (Current Prayer) -->
			{#if mode === 'digital'}
				<div class="flex h-16 items-center justify-center text-center">
					<h2 class="text-2xl leading-tight font-bold text-white">
						{#if steps[currentBeadIndex].prayerId === 'announce'}
							{t.ui.announce}
						{:else}
							{t.prayers[steps[currentBeadIndex].prayerId].title}
						{/if}
					</h2>
				</div>
			{/if}
		</div>

		<!-- Beads Container (Snake Layout) -->
		<div class="flex w-full flex-none items-center justify-center overflow-visible py-2">
			<div class="flex flex-col items-center">
				{#each [0, 1] as rowIndex}
					{#if steps.length > rowIndex * 7}
						{@const rowStart = rowIndex * 7}
						{@const rowEnd = Math.min((rowIndex + 1) * 7, steps.length)}
						{@const isReverse = rowIndex % 2 !== 0}
						{@const rowSteps = steps.slice(rowStart, rowEnd)}

						<!-- The Row -->
						<div class="flex items-center {isReverse ? 'flex-row-reverse' : 'flex-row'}">
							{#each rowSteps as step, i}
								{@const absIndex = rowStart + i}

								<!-- Connector within row -->
								{#if i > 0}
									<div
										class="h-0.5 w-3 bg-white/20 transition-colors duration-300 {mode ===
											'digital' && absIndex <= currentBeadIndex
											? 'bg-white/60'
											: ''}"
									></div>
								{/if}

								<!-- Bead -->
								<button
									class="
                                        relative z-10 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300
                                        {mode === 'physical'
										? 'bg-white/10 text-white/50'
										: absIndex <= currentBeadIndex
											? 'bg-white text-black'
											: 'bg-white/10 text-white/50'}
                                    "
									style="transform: scale({mode === 'digital' && absIndex === currentBeadIndex
										? 1.25
										: 1});"
									onclick={() => {
										if (mode === 'digital') currentBeadIndex = absIndex;
										openPrayer(step);
									}}
								>
									<span class="text-xs font-bold">{step.label}</span>

									{#if mode === 'digital' && absIndex === currentBeadIndex}
										<div
											class="absolute inset-0 animate-ping rounded-full bg-white opacity-20"
										></div>
									{/if}
								</button>
							{/each}
						</div>

						<!-- Elbow Connector (between rows) -->
						{#if rowIndex === 0 && steps.length > 7}
							{@const lastOfRow1 = 6}
							{@const isActive = mode === 'digital' && currentBeadIndex >= 7}
							<div class="relative flex h-5 w-full justify-end pr-[15px]">
								<!-- Vertical line dropping down from last bead -->
								<div class="h-full w-0.5 bg-white/20 {isActive ? 'bg-white/60' : ''}"></div>
							</div>
						{/if}
					{/if}
				{/each}
			</div>
		</div>

		<!-- Prayer Text / List Area -->
		<div class="min-h-0 w-full flex-1 overflow-y-auto pr-2 pl-1">
			{#if mode === 'digital'}
				<!-- Digital: Show FULL TEXT of current prayer -->
				<div
					class="h-full overflow-y-auto rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm"
				>
					{#if steps[currentBeadIndex].prayerId === 'announce'}
						<p class="text-lg leading-relaxed text-white/90 italic">
							{steps[currentBeadIndex].passage}
						</p>
					{:else}
						<p class="text-xl leading-relaxed whitespace-pre-wrap text-white/90">
							{t.prayers[steps[currentBeadIndex].prayerId].content}
						</p>
					{/if}
				</div>
			{:else}
				<!-- Physical: List View (Deduplicated) -->
				<div class="flex flex-col gap-1">
					{#each Array.from(new Set(steps.map((s) => s.prayerId + (s.passage || '')))).map((key) => steps.find((s) => s.prayerId + (s.passage || '') === key)!) as step}
						<button
							class="group flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors hover:bg-white/5"
							onclick={() => openPrayer(step)}
						>
							<div
								class="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm font-bold text-white/40 transition-colors group-hover:bg-white/10 group-hover:text-white"
							>
								{step.label}
							</div>
							<div class="flex-1 leading-none">
								{#if step.prayerId === 'announce'}
									<span class="block text-base font-normal text-white">{t.ui.announce}</span>
									<!-- Unbolded as requested -->
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
		class="pointer-events-none fixed right-0 bottom-0 left-0 z-40 mx-auto flex w-full max-w-lg justify-between p-6"
	>
		<button
			class="pointer-events-auto flex h-14 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 font-medium text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
			onclick={goToPrev}
			disabled={currentSection === 'intro' && (mode === 'physical' || currentBeadIndex === 0)}
			title={t.ui.actions.back}
		>
			<span>←</span>
			<span class="text-sm tracking-wider uppercase">{t.ui.actions.back}</span>
		</button>

		<button
			class="pointer-events-auto flex h-14 items-center gap-2 rounded-full bg-white px-8 font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95"
			onclick={goToNext}
			title={t.ui.actions.next}
		>
			<span class="text-sm tracking-wider uppercase">{t.ui.actions.next}</span>
			<span>→</span>
		</button>
	</div>

	<!-- Modals -->
	<PrayerModal
		isOpen={modalOpen}
		title={modalContent.title}
		content={modalContent.content}
		onClose={() => (modalOpen = false)}
	/>

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
