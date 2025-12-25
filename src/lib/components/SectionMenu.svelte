<script lang="ts">
    import BottomSheet from './BottomSheet.svelte';
    import type { RosarySection } from '../types';

    interface Props {
        isOpen: boolean;
        currentSection: RosarySection;
        onSelect: (section: RosarySection) => void;
        onClose: () => void;
    }

    let { isOpen, currentSection, onSelect, onClose }: Props = $props();

    const sections: { id: RosarySection; label: string }[] = [
        { id: 'intro', label: 'Introduction' },
        { id: 'decade-1', label: 'First Decade' },
        { id: 'decade-2', label: 'Second Decade' },
        { id: 'decade-3', label: 'Third Decade' },
        { id: 'decade-4', label: 'Fourth Decade' },
        { id: 'decade-5', label: 'Fifth Decade' },
        { id: 'conclusion', label: 'Conclusion' }
    ];
</script>

<BottomSheet {isOpen} title="Jump to Section" {onClose}>
    <div class="flex flex-col gap-2">
        {#each sections as section}
            <button
                class="w-full text-left p-4 rounded-xl transition-all duration-200 
                {currentSection === section.id 
                    ? 'bg-white/20 text-white font-bold border border-white/20' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}"
                onclick={() => onSelect(section.id)}
            >
                {section.label}
            </button>
        {/each}
    </div>
</BottomSheet>
