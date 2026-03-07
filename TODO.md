# Improvement Backlog (Analysis-Based)

This backlog is based on a quick repo analysis and local checks (`npm test` and `npm run check`).

## P0 — Reliability & Quality Gates

- [ ] **Fix TypeScript error in language integrity test**
  - **Problem:** `npm run check` fails because `catch (e)` is `unknown` and code accesses `e.message` directly.
  - **Task:** Narrow the error type safely in `tests/language_integrity.test.ts` (e.g., `e instanceof Error ? e.message : String(e)`).
  - **Acceptance criteria:** `npm run check` completes without TypeScript errors.

- [ ] **Resolve accessibility warnings in `BottomSheet` dialog**
  - **Problem:** Current dialog container has click handler but lacks keyboard support/focusability warnings from Svelte A11y.
  - **Task:** Make the interactive area keyboard-accessible (tabindex/keyboard handler or semantic button where appropriate) and keep click propagation behavior.
  - **Acceptance criteria:** No related a11y warnings from `svelte-check` for `BottomSheet.svelte`.

- [ ] **Add CI workflow for build + test + check**
  - **Problem:** Quality checks are manual only.
  - **Task:** Add GitHub Actions workflow running `npm ci`, `npm run check`, `npm test`, and `npm run build`.
  - **Acceptance criteria:** Workflow runs on PR/push and fails on regressions.

## P1 — Localization Correctness

- [ ] **Audit inconsistent language strings in non-English locales**
  - **Problem:** Some French UI action labels are still English (`next`, `back`, `exit`).
  - **Task:** Add locale QA pass to detect untranslated carryovers and fix identified strings.
  - **Acceptance criteria:** Locale checks flag mixed-language UI labels; French labels are translated.

- [ ] **Standardize locale markdown naming conventions**
  - **Problem:** French locale guide file uses `ft-fr.md` while locale is `fr-fr`.
  - **Task:** Rename inconsistent locale docs to `<locale>.md` and update any references.
  - **Acceptance criteria:** All locale folders follow one naming convention.

- [ ] **Add automated translation completeness validation**
  - **Problem:** Current integrity tests focus on key presence; semantic translation quality/completeness checks are limited.
  - **Task:** Expand tests to detect placeholder English text leakage and missing long-form sections.
  - **Acceptance criteria:** New test suite catches untranslated fallback phrases and missing critical sections.

## P2 — UX & Performance

- [ ] **Improve modal/dialog focus management**
  - **Problem:** Modal behavior may not fully trap/restore focus for keyboard users.
  - **Task:** Add focus trap + return focus to trigger element on close.
  - **Acceptance criteria:** Keyboard-only flow can open, navigate, and close modals without focus loss.

- [ ] **Review image loading strategy for mystery artwork**
  - **Problem:** Mystery backgrounds may increase initial payload depending on route behavior.
  - **Task:** Ensure lazy-loading/prefetch strategy is intentional and measure LCP impact.
  - **Acceptance criteria:** Documented loading strategy and improved or stable Lighthouse performance.

- [ ] **Add lightweight E2E smoke tests for critical prayer flow**
  - **Problem:** Current tests are mostly unit/integration; key route-level flow lacks browser coverage.
  - **Task:** Add E2E smoke test for language landing → mode selection → prayer progression.
  - **Acceptance criteria:** E2E smoke test runs in CI and guards against routing/regression issues.

## P3 — Developer Experience & Documentation

- [ ] **Document release checklist in `README`**
  - **Task:** Add a concise section covering `check`, `test`, `build`, and PWA validation before release.
  - **Acceptance criteria:** Contributors can follow one checklist for pre-release validation.

- [ ] **Create contribution guide for adding/updating locales**
  - **Task:** Add `CONTRIBUTING.md` with translation QA standards, source requirements, and verification commands.
  - **Acceptance criteria:** New locale PRs have a clear, enforceable process.
