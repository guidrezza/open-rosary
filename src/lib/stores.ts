import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { RosaryState, LiturgicalColor } from './types';
import { getLiturgicalData } from './dateUtils';
import { PALETTES } from './liturgical';

const STORAGE_KEY_MODE = 'open-rosary-mode';
const STORAGE_KEY_THEME_COLOR = 'open-rosary-theme-color';
const STORAGE_KEY_THEME_SEASON = 'open-rosary-theme-season-override'; // If user wants to override text? No, user only overrides color. Text should stay accurate.

// Initial calculation (safe for server, but client will re-calc on mount)
const initialDate = new Date();
const liturgical = getLiturgicalData(initialDate);

// Default State
const defaultState: RosaryState = {
    mode: 'digital',
    currentSection: 'intro',
    stepIndex: 0,
    theme: {
        color: liturgical.color,
        season: liturgical.season, // This is the TEXT that shows on home
        cssVars: PALETTES[liturgical.color]
    }
};

function createRosaryStore() {
    const { subscribe, set, update } = writable<RosaryState>(defaultState);

    return {
        subscribe,
        set,
        update,

        // Change Mode
        setMode: (mode: 'digital' | 'physical') => {
            update(s => {
                const newState = { ...s, mode };
                if (browser) {
                    localStorage.setItem(STORAGE_KEY_MODE, mode);
                }
                return newState;
            });
        },

        // Change Theme (Color Override)
        setTheme: (color: LiturgicalColor, seasonName?: string) => {
            update(s => {
                // If the user manually sets a theme, we update the color.
                // WE DO NOT CHANGE THE SEASON NAME if it's a manual color override, 
                // UNLESS the user explicitly wants to "Change Season" (which isn't really a feature, they just pick a color).
                // The requirement: "Updating it via the change theme button should change the color layout without changing the lithurgical time text"

                // However, the `changeTheme` action in UI might pass a season name currently. We should ignore it for the TEXT, 
                // but we need to ensure the palette updates.

                const palette = PALETTES[color];
                const newState = {
                    ...s,
                    theme: {
                        ...s.theme,
                        color: color,
                        cssVars: palette
                        // season: s.theme.season // KEEP existing season text (e.g. "Advent") even if changed to "Green"
                    }
                };

                // DATA PERSISTENCE REMOVED: Theme resets on reload.
                return newState;
            });
        },

        // Initialize on Client Mount
        init: () => {
            if (browser) {
                // 1. Recalculate true liturgical date (since server time != user time)
                const now = new Date();
                const freshLiturgical = getLiturgicalData(now);

                // 2. Check Persistence
                const savedMode = localStorage.getItem(STORAGE_KEY_MODE) as 'digital' | 'physical' | null;
                // Theme persistence removed

                update(s => {
                    // Start with fresh liturgical Data
                    let newTheme = {
                        season: freshLiturgical.season, // Always use TRUE season text
                        color: freshLiturgical.color,   // Default to TRUE season color
                        cssVars: PALETTES[freshLiturgical.color]
                    };

                    // Apply Override if exists
                    // (Theme override logic removed)

                    return {
                        ...s,
                        mode: savedMode || s.mode,
                        theme: newTheme
                    };
                });
            }
        },

        reset: () => set(defaultState)
    };
}

export const rosary = createRosaryStore();
