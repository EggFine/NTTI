# Assessment Flow Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the five reviewed assessment-flow defects without changing the UI, share URL format, or deployment architecture.

**Architecture:** Keep scoring and data validation in existing `lib` modules. Extract dynamic-question state transitions and locale URL construction into small pure helpers so Node's built-in test runner can verify behavior without a browser renderer. Compile tests with the existing TypeScript dependency and run emitted CommonJS with `node:test`.

**Tech Stack:** Node.js 24, TypeScript 5.9, Next.js 16.2.3, React 19.2.4, Node built-in `node:test`.

## Global Constraints

- Target Windows 11 and the existing Cloudflare/OpenNext deployment.
- Use only dependencies already declared in `package.json`.
- Do not add server signing, databases, API routes, or unrelated refactors.
- Preserve the existing share URL shape `/<locale>/r?d=<payload>&s=<checksum>`.
- Baseline exceptions: four pre-existing ESLint errors and an F-drive SWC native-module build failure are recorded separately.

---

### Task 1: Test harness and supplemental scoring

**Files:**
- Create: `tsconfig.tests.json`
- Create: `tests/scoring.test.ts`
- Modify: `package.json`
- Modify: `lib/scoring.ts`
- Modify: `components/TestApp.tsx`

**Interfaces:**
- `normalizeRawScore(total: number, count: number): number`
- `buildExtraQuestions(answers, questions, data, supplementedDimensions): Question[]`

- [ ] Write failing tests proving a supplemented dimension is skipped, unsupplemented inconsistent dimensions receive one question, and extra low answers normalize to a low score.
- [ ] Run `npm test` and confirm failures are caused by the missing fourth argument/normalizer.
- [ ] Add `test` script: `tsc -p tsconfig.tests.json && node --test .test-dist/tests/*.test.js`.
- [ ] Implement `normalizeRawScore` as `round((total / count) * 3)` clamped to 3–9, with count zero returning 3.
- [ ] Track per-dimension answer counts and expose normalized values through `rawScores` and the existing probability calculation.
- [ ] Pass a `ReadonlySet<DimensionId>` into `buildExtraQuestions`, skip dimensions already present, and track supplemented dimensions in `TestApp` with a ref reset on restart.
- [ ] Run `npm test` and `npx tsc --noEmit` and confirm both pass.

### Task 2: Dynamic drink follow-up snapshot

**Files:**
- Create: `lib/test-flow.ts`
- Create: `tests/test-flow.test.ts`
- Modify: `components/TestScreen.tsx`

**Interfaces:**
- `applySessionAnswer(currentQuestion, currentIndex, questions, answers, specialQuestions, value): SessionAnswerTransition`
- `SessionAnswerTransition` contains `answers`, `questions`, and `nextIndex: number | null`.

- [ ] Write failing tests for a trigger gate in the final position, a non-trigger gate in the final position, and removal of a previously inserted follow-up.
- [ ] Run `npm test` and confirm the helper is missing.
- [ ] Implement the pure transition helper so insertion/removal and navigation use one snapshot.
- [ ] Replace `TestScreen`'s duplicated state mutation with the transition result; use `nextIndex === null` to complete.
- [ ] Run `npm test` and `npx tsc --noEmit` and confirm both pass.

### Task 3: Locale URL preservation

**Files:**
- Create: `lib/locale-url.ts`
- Create: `tests/locale-url.test.ts`
- Modify: `components/LanguageSwitcher.tsx`

**Interfaces:**
- `buildLocaleUrl(pathname: string, locale: Locale, search: string): string`

- [ ] Write failing tests for an empty query, the share query, and repeated/arbitrary query parameters.
- [ ] Run `npm test` and confirm the helper is missing.
- [ ] Implement the helper by replacing only the leading locale segment and normalizing the supplied query prefix.
- [ ] Use `window.location.search` at click time and navigate to the helper result.
- [ ] Run `npm test` and `npx tsc --noEmit` and confirm both pass.

### Task 4: Share payload validation

**Files:**
- Create: `tests/share.test.ts`
- Modify: `lib/share.ts`

**Interfaces:**
- Existing `encodeShareUrl` and `decodeShareUrl` signatures remain unchanged.

- [ ] Write failing public-API tests showing signed payloads with similarity outside 0–100, non-integer similarity, exact outside 0–15, and empty/oversized type codes are rejected; retain one valid round trip.
- [ ] Run `npm test` and confirm malformed signed payloads are currently accepted.
- [ ] Add finite-integer range validation, bounded type-code validation, exact-field validation, and strict `x` flag validation.
- [ ] Rename security-oriented comments/constants to describe a client-visible corruption checksum rather than tamper-proof signing.
- [ ] Run `npm test` and `npx tsc --noEmit` and confirm both pass.

### Task 5: Final verification and review

**Files:**
- Modify: `docs/superpowers/specs/2026-07-14-assessment-flow-fixes-design.md` only if needed to record the click-time query implementation.

- [ ] Run `npm test` and record the test count.
- [ ] Run `npx tsc --noEmit`.
- [ ] Run ESLint only on modified source/test files and confirm no new errors.
- [ ] Run `git diff --check` and inspect `git diff --stat` plus the full diff.
- [ ] Attempt `npm run build`; if the recorded SWC environment failure remains, report it without claiming a successful build.
- [ ] Commit the verified implementation on `codex/assessment-flow-fixes`.
