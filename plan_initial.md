# Project Specification: "Open Rosary" Web App (V2)

## 1. Core Architecture & Tech Stack
**Goal:** Lightweight, static, mobile-first PWA for praying the Rosary.
**Framework:** SvelteKit (using TypeScript).
**Build Adapter:** `@sveltejs/adapter-static` (Purely static site).
**Styling:** Tailwind CSS + Custom CSS for "Glassmorphism."
**State Management:** Svelte Stores.

## 2. The Internationalization (i18n) & SEO Strategy
* **Routing Structure:** `src/routes/[lang]/+page.svelte`.
* **Language Detection:** * On root (`/`) access, use `navigator.language` to determine region.
    * Auto-redirect to `/[lang]/` based on region (e.g., `pt-BR` -> `/pt-br/`).
    * **Default:** If region is undetermined, default to `/en/`.
* **Data Storage:** TypeScript locale files (`en.ts`, `pt-br.ts`, etc.) exporting SEO metadata and prayer text.
* **SEO:** Dynamic `<head>` generation with `hreflang` tags for all supported languages.

## 3. Data Models (TypeScript Interfaces)
* **`Prayer`:** `{ id: string, title: string, content: string }`
* **`Mystery`:** `{ id: string, name: string, days: Weekday[], passages: string[] }`
* **`RosaryState`:**
    * `mode`: 'digital' | 'physical'
    * `currentSection`: 'intro' | 'decade-1' ... | 'conclusion'
    * `stepIndex`: number (The specific prayer number within a section)

## 4. UI/UX Specifications (Dark iOS Glass Theme)
**Global Theme:**
* **Background:** `#000000` (Pure Black).
* **Glass Class:** `.glass-panel` { `backdrop-filter: blur(20px)`, `bg-white/10`, `border-white/10` }.

**Page Flows:**

**A. Landing Page (`/[lang]/+page.svelte`)**
* **Header:** "Open Rosary" (Centered, thin weight).
* **Hero:** Current Date + Dynamic "Pray the [Recommended Mystery]" button.
* **Sub-action:** "Pick a different mystery" (Text link).
* **Language Selector:** * Displays the **Flag Emoji** of the current language/region.
    * **Interaction:** Clicking the flag triggers a **Glass Pop-up Menu** displaying a list of available languages with their respective flag emojis.
* **Footer:** Made by [guidrezza](https://guidrezza.com).

**B. Mode Selection (Bottom Sheet)**
* **Option 1 (Digital Beads):** "Digital Beads" - "Track your progress on screen using the app."
* **Option 2 (Physical Beads):** "Physical Beads" - "I have my own Rosary. Just show me the prayers."

**C. The Rosary Interface (`/[lang]/pray/+page.svelte`)**
* **1. Header:** Sticky Glass bar with Mystery Name and Section Title.
* **2. Mystery Image:**
    * A central area displaying an image provided by the user for that specific mystery/section.
    * Use a **Placeholder Image** for initial implementation.
* **3. Step Counter (Under the Image):**
    * A horizontal series of small numbers (e.g., 1 2 3 ... 10) representing the prayers in the current section.
    * **Digital Mode:** The active step number is highlighted (high opacity/glow); other numbers are dimmed.
    * **Physical Mode:** Numbers are visible but static; no individual step highlighting.
* **4. Prayer List & Intention:**
    * Numbered list of prayers for the current section.
    * Glass card showing the Scripture passage/intention for the current decade.
* **5. Navigation & Logic:**
    * Large transparent tap areas at bottom-left (Back) and bottom-right (Next).
    * **Digital Mode:** "Next" moves the highlight to the next step number. After the last number, it transitions to the next page/section.
    * **Physical Mode:** "Next" ignores the numbers and skips directly to the next page/section.
* **6. Prayer Modal:** Full-screen glass overlay with large-scale prayer text.

## 5. Logic Requirements
1. **Date Logic:** Auto-schedule Mystery based on the day of the week.
2. **Navigation Logic:** Handle state transitions between 'intro', 'decades', and 'conclusion'.
3. **Persistence:** Save `lang` and `mode` in `localStorage`.

OBTAIN OFFICIAL TEXT FOR PRAYERS AND VERSES FROM THE prayers-and-verses FOLDER ONLY!