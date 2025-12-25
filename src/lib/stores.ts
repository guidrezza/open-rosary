import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { RosaryState } from './types';

const STORAGE_KEY = 'open-rosary-state';

const defaultState: RosaryState = {
    mode: 'digital',
    currentSection: 'intro',
    stepIndex: 0
};

function createRosaryStore() {
    // Initialize with default or saved state depending on requirements.
    // Plan says "Persistence: Save lang and mode in localStorage". 
    // State itself (progress) might not need persistence across reload if not specified, 
    // but mode definitely does.

    const { subscribe, set, update } = writable<RosaryState>(defaultState);

    return {
        subscribe,
        set,
        update,
        setMode: (mode: 'digital' | 'physical') => {
            update(s => {
                const newState = { ...s, mode };
                if (browser) {
                    localStorage.setItem('open-rosary-mode', mode);
                }
                return newState;
            });
        },
        reset: () => set(defaultState),
        init: () => {
            if (browser) {
                const savedMode = localStorage.getItem('open-rosary-mode') as 'digital' | 'physical' | null;
                if (savedMode) {
                    update(s => ({ ...s, mode: savedMode }));
                }
            }
        }
    };
}

export const rosary = createRosaryStore();
