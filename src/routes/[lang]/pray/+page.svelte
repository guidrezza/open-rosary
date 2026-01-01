<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { getLocale } from '$lib/i18n';
	import { rosary } from '$lib/stores';
	import type { RosarySection, Mystery } from '$lib/types';

	import PrayerModal from '$lib/components/PrayerModal.svelte';
	import BottomSheet from '$lib/components/BottomSheet.svelte';
	import MysteryImage from '$lib/components/MysteryImage.svelte';
	import SectionMenu from '$lib/components/SectionMenu.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';

	let lang = $derived($page.params.lang ?? 'en');
	let t = $derived(getLocale(lang));
	let mode = $derived($rosary.mode);

	// Initialize state
	let currentSection = $state<RosarySection>('intro');
	let currentBeadIndex = $state(0); // For Digital Mode

	// Navigation Constants
	const SECTIONS: RosarySection[] = [
		'intro',
		'decade-1',
		'decade-2',
		'decade-3',
		'decade-4',
		'decade-5',
		'conclusion'
	];

	// Sync URL Params <-> State
	$effect(() => {
		// 1. Read from URL on mount (or external change) - ONLY ONCE/INIT ideally or if we want deep linking navigation support
		const p = $page.url.searchParams;
		const secParam = p.get('section');
		const prayParam = p.get('prayer');

		if (secParam !== null) {
			const sIdx = parseInt(secParam);
			if (!isNaN(sIdx) && sIdx >= 0 && sIdx < SECTIONS.length) {
				const targetSec = SECTIONS[sIdx];
				// Only update if different to avoid loops, though $effect dependency tracking should handle it naturally
				// But we need to be careful about the WRITE effect below.
				// Actually, best pattern: Init from URL in onMount or separate effect, then Write in another.
				// However, Svelte 5 $effect runs on changes.
				// Let's use untracked or a simple init flag for the first load.
			}
		}
	});

	// Better strategy: Init logic separate from Sync logic
	let initialized = false;
	$effect(() => {
		if (!initialized && browser) {
			const p = $page.url.searchParams;
			const secParam = p.get('section');
			const prayParam = p.get('prayer');

			if (secParam) {
				const sIdx = parseInt(secParam);
				if (!isNaN(sIdx) && sIdx >= 0 && sIdx < SECTIONS.length) {
					currentSection = SECTIONS[sIdx];
				}
			}
			if (prayParam) {
				const pIdx = parseInt(prayParam);
				if (!isNaN(pIdx) && pIdx >= 0) {
					currentBeadIndex = pIdx;
				}
			}
			initialized = true;
		}
	});

	// Sync State -> URL
	$effect(() => {
		if (initialized && browser) {
			const sIdx = SECTIONS.indexOf(currentSection);
			const pIdx = currentBeadIndex;

			const url = new URL($page.url);
			const currentSecParam = url.searchParams.get('section');
			const currentPrayParam = url.searchParams.get('prayer');

			if (currentSecParam !== String(sIdx) || currentPrayParam !== String(pIdx)) {
				url.searchParams.set('section', String(sIdx));
				url.searchParams.set('prayer', String(pIdx));
				goto(url.toString(), { replaceState: true, noScroll: true, keepFocus: true });
			}
		}
	});

	// Get mystery from query param
	let mysteryId = $derived(browser ? $page.url.searchParams.get('mystery') || 'joyful' : 'joyful');
	let mystery = $derived(t.mysteries[mysteryId] || t.mysteries['joyful']);

	// Get submode
	let submode = $derived(browser ? $page.url.searchParams.get('submode') : null);

	// Image Rotation Logic
	let rotateImage = $derived.by(() => {
		if (submode === 'mysteries') return true;
		if (currentSection === 'intro' || currentSection === 'conclusion') return true;
		return false;
	});

	let imagePool = $derived.by(() => {
		if (submode === 'mysteries' || currentSection === 'intro' || currentSection === 'conclusion')
			return 'mystery';
		return 'random'; // Or explicit decade logic takes precedence in comp
	});

	// Computed Steps
	function getStepsForSection(sec: RosarySection, mys: Mystery) {
		if (submode === 'mysteries') {
			// Special Mode: Just the 5 mysteries
			// We return 5 steps, each corresponding to a mystery passage
			return mys.passages.map((passage, i) => ({
				prayerId: 'announce',
				label: 'M',
				passage,
				decade: i + 1 // Add decade info for tracking
			}));
		}

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

	function gotoHome() {
		const url = new URL($page.url);
		url.pathname = `${base}/${lang}`;
		url.searchParams.delete('mystery');
		url.searchParams.delete('section');
		url.searchParams.delete('prayer');
		url.searchParams.delete('submode'); // Clear submode
		// preserve theme, mode
		goto(url.toString());
	}

	function handleMysteryClick() {
		if (!exitState) {
			exitState = true;
			setTimeout(() => (exitState = false), 3000); // Reset after 3s
		} else {
			gotoHome();
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
					gotoHome();
				}
			}
		} else {
			// Physical: Page by Page
			const idx = SECTIONS.indexOf(currentSection);
			if (idx < SECTIONS.length - 1) {
				currentSection = SECTIONS[idx + 1];
			} else {
				gotoHome();
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
		if (submode === 'mysteries') return 'Mysteries'; // Or localized
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
		// ALWAYS show section title (e.g. "1st Decade") per request
		// Truncate logic handles in template class
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

	let currentImageDecade = $derived.by(() => {
		if (currentSection === 'intro') return 1;
		if (currentSection === 'conclusion') return 5;
		const parts = currentSection.split('-');
		if (parts[0] === 'decade') return parseInt(parts[1]);
		return 1;
	});

	// Image State
	let imageMode = $state<'normal' | 'fullscreen' | 'minimized'>('normal');
	let showControls = $state(false);

	function toggleImageControls() {
		if (imageMode === 'normal') {
			showControls = !showControls;
		} else if (imageMode === 'minimized') {
			imageMode = 'normal';
		}
	}

	function handleDownload() {
		// Create a link to download the image
		// We need the current image path. MysteryImage handles logic, but we passed props.
		// We use the known path structure based on mysteryId and currentImageDecade.
		const m = mysteryId;
		const d = currentImageDecade;
		const list = (t.mysteries as any)[m] || {};
	}

	// Import helper
	import { MYSTERY_IMAGES } from '$lib/mysteryImages';

	function downloadCurrent() {
		const list = MYSTERY_IMAGES[mysteryId];
		if (!list) return;
		const img = list[currentImageDecade - 1]; // 1-based to 0-based
		if (img) {
			const a = document.createElement('a');
			a.href = img.path;
			a.download = img.path.split('/').pop() || 'image.webp';
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		}
	}
	// Collapsible Mystery
	let userMysteryExpanded = $state(false);
	// For "Just the Mysteries" mode (or multi-mystery lists), track individual expansion
	// We use a simple string key: "prayerId-passage"
	let expandedKeys = $state(new Set<string>());

	function toggleExpansion(key: string) {
		const newSet = new Set(expandedKeys);
		if (newSet.has(key)) {
			newSet.delete(key);
		} else {
			newSet.add(key);
		}
		expandedKeys = newSet;
	}

	let isAnnounce = $derived(
		steps[currentBeadIndex] && steps[currentBeadIndex].prayerId === 'announce'
	);
	// In digital mode: force expand on 'announce', otherwise respect user preference.
	// In physical mode: always respect user preference (since isAnnounce relies on bead index).
	let mysteryExpanded = $derived(mode === 'digital' && isAnnounce ? true : userMysteryExpanded);

	// Guided Mode UI Overrides (Creed Visibility)
	// Guided Mode UI Overrides (Creed Visibility)
	let previousPrayerId = $state('');

	$effect(() => {
		const currentPrayerId = steps[currentBeadIndex]?.prayerId;

		if (mode === 'digital' && currentPrayerId !== previousPrayerId) {
			if (currentPrayerId === 'creed') {
				// Enter Creed -> Minimize
				imageMode = 'minimized';
			} else if (previousPrayerId === 'creed') {
				// Leave Creed -> Restore Normal (Expanded)
				imageMode = 'normal';
			}
			previousPrayerId = currentPrayerId;
		}
	});
</script>

<!-- Main Layout Wrapper -->
<div class="relative mx-auto flex h-screen w-full max-w-md flex-col overflow-hidden bg-transparent">
	<!-- Header -->
	<!-- Header -->
	<header class="z-30 w-full flex-none">
		<div
			class="flex w-full items-center justify-between bg-white/5 px-6 py-4 backdrop-blur-md"
			style="border-radius: 0 0 32px 32px; border-bottom: 1px solid var(--glass-border);"
		>
			<button
				class="xs:max-w-none max-w-[150px] truncate text-sm font-medium transition-colors duration-200 {exitState
					? 'font-bold text-red-400'
					: 'text-white/60'}"
				onclick={handleMysteryClick}
			>
				{exitState ? t.ui.actions.exit : mystery.name}
			</button>

			{#if submode === 'mysteries'}
				<div class="font-bold text-white">
					{headerTitle}
				</div>
			{:else}
				<button
					class="font-bold text-white transition-colors hover:text-white/80"
					onclick={() => (sectionMenuOpen = true)}
				>
					{headerTitle} ▾
				</button>
			{/if}
		</div>
	</header>

	<!-- Main Content -->
	<main
		class="flex min-h-0 w-full flex-1 flex-col items-center justify-start gap-0 overflow-hidden px-0 pt-3"
	>
		<!-- Top Visuals -->
		<!-- Tightened gap from 2 to 0 to fix "Image <-> Beads too large" -->
		<div class="flex w-full flex-none flex-col items-center gap-0">
			<!-- Mystery Image - FULL WIDTH WITH BEZEL -->
			<div
				class="w-full px-6 transition-all duration-500 {imageMode === 'minimized'
					? 'h-4 opacity-50'
					: ''}"
			>
				<!-- Wrapper handles the sizing/positioning states -->
				<div
					class="relative z-0 flex w-[90%] items-center justify-center overflow-hidden rounded-[32px] transition-all duration-500 ease-in-out
						{imageMode === 'minimized' ? 'h-2 w-full cursor-pointer bg-white/20' : 'aspect-video'}
						{imageMode === 'normal' ? 'max-w-lg' : ''}
					"
					role="button"
					tabindex="0"
					onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleImageControls()}
					onclick={toggleImageControls}
				>
					{#if imageMode !== 'minimized'}
						<MysteryImage
							mystery={mysteryId}
							decade={currentImageDecade}
							rotate={rotateImage}
							pool="mystery"
						/>

						<!-- Overlay Controls (Normal Mode Only) -->
						{#if showControls}
							<div
								class="absolute inset-x-0 top-0 z-20 flex justify-between p-4 transition-opacity duration-300"
								role="none"
								onclick={(e) => e.stopPropagation()}
							>
								<!-- Top Left: Minimize -->
								<button
									class="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all active:scale-95"
									onclick={() => {
										imageMode = 'minimized';
										showControls = false;
									}}
								>
									<!-- Minimize Icon: Single Line -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<line x1="5" y1="12" x2="19" y2="12"></line>
									</svg>
								</button>

								<!-- Top Right: Expand -->
								<button
									class="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all active:scale-95"
									onclick={() => {
										imageMode = 'fullscreen';
										showControls = false;
									}}
								>
									<!-- Expand Icon -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"
										></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line
											x1="3"
											y1="21"
											x2="10"
											y2="14"
										></line></svg
									>
								</button>
							</div>
						{/if}
					{/if}
				</div>
			</div>

			<!-- Beads Container (Snake Layout) - NOW ABOVE TEXT -->
			<!-- Highlight Clipping Fix: py-8 -my-6 to provide vertical breathing room without moving layout -->
			<div
				class="no-scrollbar -my-8 flex w-full flex-none items-center justify-center overflow-x-auto py-8"
			>
				<!-- Zigzag Container -->
				<div
					class="relative mx-auto flex-none"
					style="width: {steps.length * BEAD_SPACING + 10}px; height: {BEAD_OFFSET_Y + 80}px;"
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
                                absolute z-10 flex h-[25px] w-[25px] items-center justify-center rounded-full transition-all duration-500 ease-out focus:ring-0 focus:outline-none
                                {mode === 'physical'
								? 'border border-transparent bg-white text-black shadow-[0_0_10px_2px_rgba(255,255,255,0.3)]'
								: i <= currentBeadIndex
									? 'border border-transparent bg-white text-black shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] ' +
										(mode === 'digital' && i === currentBeadIndex ? 'animate-pulse-scale' : '')
									: 'border border-white/5 bg-black/40 text-white/40'}
                            "
							style="
                                left: {i * BEAD_SPACING}px; 
                                top: {(i % 2 === 0 ? 0 : BEAD_OFFSET_Y) + VERTICAL_OFFSET}px;
                                transform: scale({mode === 'digital' && i === currentBeadIndex
								? 1.5
								: 1});
                            "
							onclick={() => {
								if (mode === 'digital') currentBeadIndex = i;
							}}
						>
							<span class="text-[10px] leading-none font-medium">{step.label}</span>

							{#if mode === 'digital' && i === currentBeadIndex}
								<!-- Corona Glow -->
								<div
									class="absolute inset-0 -z-10 rounded-full bg-white blur-md"
									style="opacity: 0.6; transform: scale(1.2);"
								></div>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- Context Text & Prayer Area -->
		<div class="flex w-full flex-none flex-col items-center px-6 text-center -mt-8">
			{#if mode === 'digital'}
				<div class="flex min-h-8 flex-col items-center justify-center gap-2 text-center">
					<!-- Persistent Mystery Context for Decades -->
					{#if currentSection.startsWith('decade')}
						<!-- Collapsible Container -->
						<div class="relative mb-2 flex w-full flex-col gap-1">
							<button
								class="flex w-full items-center justify-center gap-2 text-base leading-tight font-bold tracking-wide text-white uppercase transition-opacity {mode ===
									'digital' && isAnnounce
									? 'cursor-default opacity-100'
									: 'cursor-pointer hover:opacity-80'}"
								onclick={() => {
									if (!(mode === 'digital' && isAnnounce)) {
										userMysteryExpanded = !userMysteryExpanded;
									}
								}}
							>
								<span>{parsedMystery.title || t.ui.announce}</span>
								<span class="flex w-6 items-center justify-center font-normal text-white/60">
									{mysteryExpanded ? '−' : '+'}
								</span>
							</button>

							{#if mysteryExpanded}
								<div transition:slide={{ duration: 200 }}>
									<span class="block text-sm leading-snug text-white/80 italic">
										{parsedMystery.verse}
									</span>
									{#if parsedMystery.fruit}
										<span class="mt-0.5 block text-xs font-medium tracking-wider text-white/60">
											{parsedMystery.fruit}
										</span>
									{/if}
								</div>
							{/if}
						</div>
					{/if}

					<!-- Current Prayer Title (Only if NOT 'announce', since announce shows mystery above) -->
					{#if steps[currentBeadIndex].prayerId !== 'announce'}
						<h2 class="text-xl leading-tight font-bold text-white">
							{t.prayers[steps[currentBeadIndex].prayerId].title}
						</h2>
					{/if}
				</div>
			{/if}
		</div>

		<!-- Prayer Text / List Area -->
		<div class="min-h-0 w-full flex-1 overflow-y-auto px-6 pb-6">
			{#if mode === 'digital'}
				<!-- Digital: Show FULL TEXT of current prayer -->
				<div class="rounded-2xl p-2 pt-0">
					{#if steps[currentBeadIndex].prayerId === 'announce'}{/if}
					{#if steps[currentBeadIndex].prayerId !== 'announce'}
						<p class="text-lg leading-relaxed whitespace-pre-wrap text-white/90">
							{t.prayers[steps[currentBeadIndex].prayerId].content}
						</p>
					{/if}
				</div>
			{:else}
				<!-- Physical: List View (Deduplicated) -->
				<div class="mx-auto flex w-full max-w-lg flex-col gap-1">
					{#each Array.from(new Set(steps.map((s) => s.prayerId + (s.passage || '')))).map((key) => steps.find((s) => s.prayerId + (s.passage || '') === key)!) as step}
						{@const stepKey = step.prayerId + (step.passage || '')}
						<button
							class="group flex w-full items-start gap-3 rounded-lg p-2 text-left transition-colors hover:bg-white/5"
							onclick={() => {
								if (step.prayerId === 'announce') {
									toggleExpansion(stepKey);
								} else {
									openPrayer(step);
								}
							}}
						>
							<div
								class="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-medium text-black shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-colors"
							>
								{step.label}
							</div>
							<div class="flex-1 leading-none">
								{#if step.prayerId === 'announce'}
									<!-- Mystery in list view -->
									{@const parsed = parseMysteryPassage(step.passage || '')}
									<div class="flex w-full flex-col gap-1">
										<div class="flex w-full items-center justify-between">
											<span class="block text-base leading-tight font-bold text-white">
												{parsed.title || t.ui.announce}
											</span>
											<span class="flex w-8 justify-center text-lg font-bold text-white/60">
												{expandedKeys.has(stepKey) ? '−' : '+'}
											</span>
										</div>

										{#if expandedKeys.has(stepKey)}
											<div transition:slide={{ duration: 200 }}>
												<span class="mt-1 block text-sm leading-snug text-white/80 italic">
													{parsed.verse}
												</span>
												{#if parsed.fruit}
													<span
														class="mt-0.5 block text-xs font-medium tracking-wider text-white/60"
													>
														{parsed.fruit}
													</span>
												{/if}
											</div>
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

		<!-- Navigation Controls (Now Flex Footer) -->
		{#if submode !== 'mysteries'}
			<div
				class="z-40 mx-auto flex w-full flex-none items-stretch justify-between overflow-hidden rounded-t-[32px] px-0 pt-0 pb-0"
				style="border-top: 1px solid var(--glass-border);"
			>
				<button
					class="pointer-events-auto flex aspect-square h-[110px] w-[110px] items-center justify-center bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10 active:bg-white/20"
					style="border-right: 1px solid var(--glass-border);"
					onclick={goToPrev}
					disabled={currentSection === 'intro' && (mode === 'physical' || currentBeadIndex === 0)}
					title={t.ui.actions.back}
				>
					<span class="text-2xl">←</span>
				</button>

				<button
					class="pointer-events-auto flex h-[110px] flex-1 items-center justify-center gap-2 bg-white/5 px-6 text-lg font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10 active:bg-white/20"
					onclick={goToNext}
					title={t.ui.actions.next}
				>
					<span class="tracking-widest uppercase">{t.ui.actions.next}</span>
					<span class="text-xl">→</span>
				</button>
			</div>
		{/if}
	</main>
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

<!-- Fullscreen Overlay -->
{#if imageMode === 'fullscreen'}
	<div
		class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
		role="button"
		tabindex="0"
		onclick={() => (imageMode = 'normal')}
		onkeydown={(e) => e.key === 'Escape' && (imageMode = 'normal')}
	>
		<!-- Image Container (Stop propagation) -->
		<div
			class="relative flex h-full w-full items-center justify-center p-4"
			role="none"
			onclick={(e) => e.stopPropagation()}
		>
			<div class="relative aspect-video w-full max-w-5xl overflow-hidden rounded-md shadow-2xl">
				<MysteryImage mystery={mysteryId} decade={currentImageDecade} />
			</div>

			<!-- Fullscreen Controls -->
			<div class="absolute top-6 right-6 flex gap-4">
				<!-- Download -->
				<button
					class="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
					onclick={downloadCurrent}
					title="Download"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline
							points="7 10 12 15 17 10"
						></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg
					>
				</button>

				<!-- Close -->
				<button
					class="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
					onclick={() => (imageMode = 'normal')}
					title="Close"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"
						></line></svg
					>
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Hide scrollbar for bead row */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	@keyframes pulse-scale {
		0%,
		100% {
			transform: scale(1.5);
		}
		50% {
			transform: scale(1.6);
		}
	}
	.animate-pulse-scale {
		animation: pulse-scale 3s ease-in-out infinite;
	}
</style>
