import { describe, it, expect } from 'vitest';
import {
    createDeck,
    getNextRandomFromDeck,
    getNextSequentialImage,
    MYSTERY_IMAGES,
    type MysteryImageDef
} from '$lib/mysteryImages';

describe('Mystery Image Logic', () => {

    describe('Random Pool (Deck Logic)', () => {
        it('should cycle through all 20 images before repeating', () => {
            // Start with an empty deck (will auto-fill) or create fresh
            let deck: MysteryImageDef[] = [];
            const seenPaths = new Set<string>();

            // Draw 20 times
            for (let i = 0; i < 20; i++) {
                const result = getNextRandomFromDeck(deck);
                deck = result.deck;
                const img = result.image;

                expect(img).toBeDefined();
                expect(seenPaths.has(img.path)).toBe(false); // Should be unique in first pass
                seenPaths.add(img.path);
            }

            expect(seenPaths.size).toBe(20);
            expect(deck.length).toBe(0); // Deck should be empty after 20 draws

            // Draw 21st time -> Should trigger refill and be valid
            const result21 = getNextRandomFromDeck(deck);
            expect(result21.image).toBeDefined();
            // It will be one of the 20, so seenPaths has it, but it's a new cycle.
        });
    });

    describe('Sequential Logic', () => {
        it('should cycle through mystery images in order 1->5 then repeat', () => {
            const mysteryKey = 'joyful';
            const list = MYSTERY_IMAGES[mysteryKey];

            // Start at 1
            let current = list[0];
            expect(current.path).toContain('joyful_1');

            // 1 -> 2
            current = getNextSequentialImage(current, mysteryKey)!;
            expect(current.path).toContain('joyful_2');

            // 2 -> 3
            current = getNextSequentialImage(current, mysteryKey)!;
            expect(current.path).toContain('joyful_3');

            // 3 -> 4
            current = getNextSequentialImage(current, mysteryKey)!;
            expect(current.path).toContain('joyful_4');

            // 4 -> 5
            current = getNextSequentialImage(current, mysteryKey)!;
            expect(current.path).toContain('joyful_5');

            // 5 -> 1 (Cycle)
            current = getNextSequentialImage(current, mysteryKey)!;
            expect(current.path).toContain('joyful_1');
        });

        it('should handle starting from an arbitrary index (e.g. Conclusion starting at 5)', () => {
            const mysteryKey = 'glorious';
            const list = MYSTERY_IMAGES[mysteryKey];

            // Start directly at 5
            let current = list[4];
            expect(current.path).toContain('glorious_5');

            // 5 -> 1
            current = getNextSequentialImage(current, mysteryKey)!;
            expect(current.path).toContain('glorious_1');
        });
    });

});
