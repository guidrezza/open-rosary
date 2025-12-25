# Open Rosary

A beautiful, modern, and open-source web application for praying the Rosary. Designed with a focus on aesthetics, simplicity, and accessibility.

## ✨ Features

-   **Modes**:
    -   **Digital**: Track your progress bead-by-bead on screen.
    -   **Physical**: A simple list view for those who have their own physical Rosary.
-   **Liturgical Support**: Automatically selects the correct Mystery for the day and adjusts the color theme based on the Liturgical Season.
-   **Multi-Language**: Support for English (US), Spanish (MX), Portuguese (BR), and Latin (VA).
-   **PWA**: Installable on mobile devices and works offline.
-   **Responsive**: Optimized for both mobile and desktop experiences.

## 🛠️ Tech Stack

-   **Framework**: [SvelteKit](https://kit.svelte.dev/) (Svelte 5)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Language**: TypeScript
-   **Build Tool**: Vite

## 📂 Project Structure

-   `src/routes`: Application pages and routing logic.
-   `src/lib`: Shared components (`components/`), stores (`stores.ts`), and utilities (`liturgical.ts`, `i18n/`).
-   `prayers-and-verses`: Centralized repository for all prayer text and scripture translations.
    -   Each language has its own folder (e.g., `en-us/`, `es-mx/`) containing a `constants.ts` file which feeds the UI.

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/guidrezza/open-rosary.git
    cd open-rosary
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 🤝 Contributing

We welcome contributions! Whether it's a new language, a bug fix, or a feature enhancement.

### Adding a New Language

1.  **Create a Folder**: Inside `prayers-and-verses/`, create a new folder for your locale (e.g., `fr-fr`).
2.  **Create Constants**: Create a `constants.ts` file inside that folder. You can copy the structure from `prayers-and-verses/en-us/constants.ts`.
    -   Ensure you implement the `LocalizationData` interface.
    -   Translate all prayers, mysteries, and UI strings.
3.  **Register Locale**: Open `src/lib/i18n/index.ts`:
    -   Import your new constants file.
    -   Add it to the `locales` object exported at the top.
4.  **Test**: Run the app and manually switch the URL to your new locale (e.g., `/fr-fr`) to verify.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
