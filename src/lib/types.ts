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

export interface RosaryState {
    mode: 'digital' | 'physical';
    currentSection: RosarySection;
    stepIndex: number;
    activeMysteryId?: string; // Track which mystery is being prayed
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
        modes: {
            digital: { title: string; desc: string };
            physical: { title: string; desc: string };
        };
        actions: {
            next: string;
            back: string;
        }
    };
}
