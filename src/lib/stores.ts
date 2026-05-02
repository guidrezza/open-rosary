import { writable } from 'svelte/store';
import type { RosaryState } from './types';
import { getLiturgicalTheme, PALETTES, type LiturgicalColor } from './liturgical';

// Initial calculation
const initialDate = new Date();
const liturgical = getLiturgicalTheme(initialDate);

// Default State
const defaultState: RosaryState = {
	mode: 'digital',
	currentSection: 'intro',
	stepIndex: 0,
	theme: liturgical
};

function createRosaryStore() {
	const { subscribe, set, update } = writable<RosaryState>(defaultState);

	return {
		subscribe,
		set,
		update,

		// Change Mode
		setMode: (mode: 'digital' | 'physical') => {
			update((s) => ({ ...s, mode }));
		},

		// Change Theme (Color Override)
		setTheme: (color: LiturgicalColor) => {
			update((s) => {
				const palette = PALETTES[color];
				// Ensure we have a base theme to spread, fallback to current assumption if missing
				const baseTheme = s.theme || getLiturgicalTheme(new Date());

				return {
					...s,
					theme: {
						...baseTheme,
						color: color,
						cssVars: palette
					}
				};
			});
		},

		// Initialize / Reset (Clean Slate or Recalc)
		init: () => {
			// Recalculate true liturgical date on mount
			const now = new Date();
			const freshLiturgical = getLiturgicalTheme(now);
			update((s) => ({
				...s,
				theme: freshLiturgical // Always reset to correct liturgical day. URL params (layout) will override if needed.
			}));
		},

		reset: () => set(defaultState)
	};
}

export const rosary = createRosaryStore();
