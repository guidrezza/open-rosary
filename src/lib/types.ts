export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday

export interface Prayer {
    id: string;
    title: string;
    content: string;
}

export interface Mystery {
    id: string; // 'joyful', 'sorrowful', 'glorious', 'luminous'
    name: string;
    days: Weekday[];
    passages: string[]; // 5 passages (one per decade)
}

export type RosarySection =
    | 'intro'
    | 'decade-1'
    | 'decade-2'
    | 'decade-3'
    | 'decade-4'
    | 'decade-5'
    | 'conclusion';

import type { LiturgicalTheme } from './liturgical';

export interface RosaryState {
    mode: 'digital' | 'physical';
    currentSection: RosarySection;
    stepIndex: number;
    activeMysteryId?: string; // Track which mystery is being prayed
    theme?: LiturgicalTheme;
}

export interface LocalizationData {
    lang: string;
    seo: {
        title: string;
        description: string;
    };
    prayers: Record<string, Prayer>;
    mysteries: Record<string, Mystery>;
    ui: {
        start_button: string;
        pick_mystery: string;
        made_by: string;
        recommended_mystery: string;
        pray_button_prefix: string;
        change_theme: string;
        modes: {
            digital: { title: string; desc: string };
            physical: { title: string; desc: string };
        };
        actions: {
            next: string;
            back: string;
            exit: string;
        };
        announce: string;
        sections: {
            intro: string;
            decade: string;
            conclusion: string;
        };
        ordinals: string[];
        menus: {
            language: string;
            mystery: string;
            mode: string;
            theme: string;
            jump_to_section: string;
        };
        themes: {
            ordinary: string;
            christmas_easter: string;
            advent_lent: string;
            pentecost: string;
            gaudete: string;
            requiem: string;
        };
    };
}
