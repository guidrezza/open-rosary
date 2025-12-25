<script lang="ts">
	import BottomSheet from './BottomSheet.svelte';
	import type { RosarySection } from '../types';

	interface Props {
		isOpen: boolean;
		currentSection: RosarySection;
		title: string;
		onSelect: (section: RosarySection) => void;
		onClose: () => void;
	}

	interface SectionItem {
		id: RosarySection;
		label: string;
	}

	interface Props {
		isOpen: boolean;
		currentSection: RosarySection;
		title: string;
		sections: SectionItem[];
		onSelect: (section: RosarySection) => void;
		onClose: () => void;
	}

	let { isOpen, currentSection, title, sections, onSelect, onClose }: Props = $props();
</script>

<BottomSheet {isOpen} {title} {onClose}>
	<div class="flex flex-col gap-2">
		{#each sections as section}
			<button
				class="w-full rounded-xl p-4 text-left transition-all duration-200
                {currentSection === section.id
					? 'border border-white/20 bg-white/20 font-bold text-white'
					: 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}"
				onclick={() => onSelect(section.id)}
			>
				{section.label}
			</button>
		{/each}
	</div>
</BottomSheet>
