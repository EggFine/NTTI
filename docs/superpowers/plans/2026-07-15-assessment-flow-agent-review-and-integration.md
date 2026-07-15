# Assessment Flow Agent Review and Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Independently verify and harden the completed assessment-flow fixes, then prepare exactly one safe Git integration path without reimplementing or overwriting already-correct work.

**Architecture:** Keep commit `0c9ba97` as the implementation baseline on `codex/assessment-flow-fixes`. Execute Tasks 1–4 strictly in order; each task gets a fresh implementation agent limited to its listed files, followed by a fresh review agent that checks both spec compliance and code quality. Critical or Important findings return to a fix agent and the same task is re-reviewed before the next task begins.

**Tech Stack:** Windows 11, Node.js 24.16.0, TypeScript 5.9, Next.js 16.2.3, React 19.2.4, Node built-in `node:test`, Git worktrees.

## Global Constraints

- Work only in `F:\GitHub\NTTI\.worktrees\assessment-flow-fixes` on branch `codex/assessment-flow-fixes`.
- Preserve the completed implementation commit `0c9ba97`; do not reset, revert, squash, or rewrite it.
- Execute implementation agents sequentially. Never let two agents modify files at the same time.
- Every task must use a fresh implementation agent and a fresh review agent.
- An implementation agent may leave production code unchanged when the existing implementation satisfies the task, but it must add or verify the named regression evidence and report exact commands/results.
- Review agents are read-only. Fixes are performed by a separate fix agent, followed by re-review.
- Use only dependencies already declared in `package.json`.
- Preserve the share URL shape `/<locale>/r?d=<payload>&s=<checksum>`.
- Do not introduce server signing, databases, API routes, or unrelated refactors.
- Known baseline limitations: full ESLint has four pre-existing React effect errors; `npm run build` fails because the F-drive SWC native module is not a valid Win32 application.
- Passing gates are `npm test`, `npx tsc --noEmit`, task-scoped ESLint with zero errors, and `git diff --check`.

---

### Task 1: Scoring and Supplemental-Question Audit

**Files:**
- Modify if required: `lib/scoring.ts`
- Modify if required: `components/TestApp.tsx`
- Modify: `tests/scoring.test.ts`

**Interfaces:**
- Consumes: `normalizeRawScore(total: number, count: number): number`
- Consumes: `buildExtraQuestions(answers, questions, data, supplementedDimensions): Question[]`
- Produces: regression evidence that `computeResult` actually uses normalized scores and that a supplemented dimension cannot be selected twice.

- [ ] **Step 1: Record the task base commit**

Run:

```powershell
git rev-parse HEAD
```

Expected: a clean branch at or after `0c9ba97`. Save this SHA as `TASK_1_BASE` for the review package.

- [ ] **Step 2: Add a computeResult integration regression test**

Extend `tests/scoring.test.ts` with a test that constructs seven `S1` questions with answers totaling `9`, calls `computeResult`, and asserts the normalized display score is `4`, not the unnormalized/clamped value `9`:

```ts
test('computeResult uses normalized scores for supplemental answers', () => {
  const questions = Array.from({ length: 7 }, (_, index) =>
    question(`S1_q${index + 1}`, 'S1'),
  );
  const answers = Object.fromEntries(
    questions.map((item, index) => [item.id, index < 2 ? 2 : 1]),
  );
  const data = localeData({ S1: questions });
  data.personalityTypes = [{
    code: 'LOW', cn: '', intro: '', desc: '', pattern: 'LLL-LLL-LLL-LLL-LLL',
  }];

  const result = computeResult(answers, questions, data, scoringDictionary());

  assert.equal(result.rawScores.S1, 4);
  assert.equal(result.levels.S1, 'L');
});
```

Add this local fixture and import `Dictionary` plus `computeResult`:

```ts
function scoringDictionary(): Dictionary {
  return {
    scoring: {
      extraPromptFirst: '',
      extraPromptRest: [],
      modeKickerPrimary: 'primary',
      modeKickerHidden: 'hidden',
      modeKickerFallback: 'fallback',
      modeKickerCodex: 'codex',
      badgeNormal: '{sim}/{exact}',
      badgeDrunk: 'drunk',
      badgeFallback: '{sim}',
      badgeCodex: 'codex',
      subNormal: '',
      subDrunk: '',
      subFallback: '',
      subCodex: '',
    },
  } as Dictionary;
}
```

- [ ] **Step 3: Run the task tests**

Run:

```powershell
cmd /c "npm test"
cmd /c "npx tsc --noEmit"
cmd /c "npx eslint lib/scoring.ts components/TestApp.tsx tests/scoring.test.ts"
```

Expected: all tests pass, TypeScript exits 0, task-scoped ESLint has zero errors. The existing `newUnlock` warning may remain, but the implementation agent must not modify it because it is unrelated.

- [ ] **Step 4: Commit only Task 1 files**

```powershell
git add -- lib/scoring.ts components/TestApp.tsx tests/scoring.test.ts
git commit -m "test: cover normalized assessment scoring"
```

If no file changes are necessary because equivalent integration evidence already exists, do not create an empty commit; report `DONE_WITH_CONCERNS` with the exact existing evidence.

- [ ] **Step 5: Review Task 1**

Generate a review package from `TASK_1_BASE` to current HEAD. A fresh reviewer must approve both: (a) every dimension receives at most one supplemental question, and (b) supplemental answer counts cannot bias scores upward merely by increasing the number of questions.

### Task 2: Dynamic Drink-Follow-Up Audit

**Files:**
- Modify if required: `lib/test-flow.ts`
- Modify if required: `components/TestScreen.tsx`
- Modify: `tests/test-flow.test.ts`

**Interfaces:**
- Consumes: `applySessionAnswer(...): SessionAnswerTransition`
- Produces: regression evidence for final-position insertion, normal completion, follow-up removal, and ordinary final-question completion.

- [ ] **Step 1: Record `TASK_2_BASE` and add ordinary completion coverage**

Append this test to `tests/test-flow.test.ts`:

```ts
test('completes an ordinary final question with the updated answer snapshot', () => {
  const transition = applySessionAnswer(
    regularQuestion,
    0,
    [regularQuestion],
    {},
    [gate, trigger],
    1,
  );

  assert.equal(transition.nextIndex, null);
  assert.equal(transition.answers.S1_q1, 1);
  assert.deepEqual(transition.questions, [regularQuestion]);
});
```

- [ ] **Step 2: Verify the component consumes one transition snapshot**

Confirm `components/TestScreen.tsx` passes `transition.answers` and `transition.questions` to `onComplete`, and uses only `transition.nextIndex` for navigation. If it reads the pre-transition `questions` or `answers` inside the timeout, replace those reads with the transition fields.

- [ ] **Step 3: Run and commit Task 2**

```powershell
cmd /c "npm test"
cmd /c "npx tsc --noEmit"
cmd /c "npx eslint lib/test-flow.ts components/TestScreen.tsx tests/test-flow.test.ts"
git add -- lib/test-flow.ts components/TestScreen.tsx tests/test-flow.test.ts
git commit -m "test: cover session answer snapshots"
```

- [ ] **Step 4: Review Task 2**

A fresh reviewer must verify insertion/removal ordering, answer cleanup, and absence of old-state reads in delayed completion. Critical or Important findings go to a fix agent and return to the same reviewer gate.

### Task 3: Locale-Switch URL Audit

**Files:**
- Modify if required: `lib/locale-url.ts`
- Modify if required: `components/LanguageSwitcher.tsx`
- Modify: `tests/locale-url.test.ts`

**Interfaces:**
- Consumes: `buildLocaleUrl(pathname: string, locale: Locale, search: string): string`
- Produces: deterministic preservation of encoded, repeated, empty-value, and debug query parameters.

- [ ] **Step 1: Record `TASK_3_BASE` and add encoded-query coverage**

Append:

```ts
test('preserves encoded and empty query values byte-for-byte', () => {
  assert.equal(
    buildLocaleUrl('/zh/r', 'en', '?d=a%2Bb%2Fc&s=&debug'),
    '/en/r?d=a%2Bb%2Fc&s=&debug',
  );
});
```

- [ ] **Step 2: Verify click-time URL construction**

Confirm `LanguageSwitcher` reads `window.location.search` inside `switchTo()` and calls `buildLocaleUrl(pathname, other, window.location.search)`. Do not add `useSearchParams`, because Next.js 16.2.3 requires a Suspense boundary for statically rendered routes using that hook.

- [ ] **Step 3: Run and commit Task 3**

```powershell
cmd /c "npm test"
cmd /c "npx tsc --noEmit"
cmd /c "npx eslint lib/locale-url.ts components/LanguageSwitcher.tsx tests/locale-url.test.ts"
git add -- lib/locale-url.ts components/LanguageSwitcher.tsx tests/locale-url.test.ts
git commit -m "test: cover locale query preservation"
```

- [ ] **Step 4: Review Task 3**

A fresh reviewer must verify only the leading locale segment changes and the query substring is preserved without decoding/re-encoding.

### Task 4: Share-Payload Semantic Validation

**Files:**
- Modify: `lib/share.ts`
- Modify: `tests/share.test.ts`

**Interfaces:**
- Consumes: `decodeShareUrl(d: string, s: string): DecodedShare | null`
- Produces: semantic consistency between the special flag and the only special result codes, `DRUNK` and `HHHH`.

- [ ] **Step 1: Record `TASK_4_BASE` and add failing semantic tests**

Extend the test payload helper to generate checksummed raw payloads, then add:

```ts
test('rejects special flags that conflict with the result type', () => {
  const [normalData, normalChecksum] = encodePayload({
    t: 'BOSS', s: 72, l: 'M'.repeat(15), e: 8, x: 1,
  });
  const [specialData, specialChecksum] = encodePayload({
    t: 'DRUNK', s: 72, l: 'M'.repeat(15), e: 8, x: 0,
  });

  assert.equal(decodeShareUrl(normalData, normalChecksum), null);
  assert.equal(decodeShareUrl(specialData, specialChecksum), null);
});
```

Run `cmd /c "npm test"`. Expected: this new test fails because current validation only restricts `x` to 0 or 1.

- [ ] **Step 2: Implement minimal semantic validation**

Immediately after the existing payload field checks in `decodeShareUrl`, add:

```ts
const isSpecialType = payload.t === 'DRUNK' || payload.t === 'HHHH';
if ((payload.x === 1) !== isSpecialType) return null;
```

Do not add a personality-data dependency to `lib/share.ts`; unknown normal codes remain the responsibility of `reconstructFromShare`.

- [ ] **Step 3: Run and commit Task 4**

```powershell
cmd /c "npm test"
cmd /c "npx tsc --noEmit"
cmd /c "npx eslint lib/share.ts tests/share.test.ts"
git add -- lib/share.ts tests/share.test.ts
git commit -m "fix: validate shared result semantics"
```

- [ ] **Step 4: Review Task 4**

A fresh reviewer must verify numeric bounds, dimension-level validation, checksum compatibility, and special/type consistency. Findings are fixed by a separate fix agent and re-reviewed.

### Task 5: Whole-Branch Review and Single Integration Choice

**Files:**
- No production edits unless the final reviewer reports a concrete defect.

**Interfaces:**
- Consumes: all reviewed Task 1–4 commits.
- Produces: a clean, reviewed feature branch ready for one integration action.

- [ ] **Step 1: Run final verification**

```powershell
cmd /c "npm test"
cmd /c "npx tsc --noEmit"
cmd /c "npx eslint components/LanguageSwitcher.tsx components/TestApp.tsx components/TestScreen.tsx lib/scoring.ts lib/share.ts lib/locale-url.ts lib/test-flow.ts tests/*.test.ts"
git diff --check main...HEAD
git status --short --branch
```

Expected: tests and TypeScript pass; scoped ESLint has zero errors; Git status is clean.

- [ ] **Step 2: Attempt the known-limited production build**

```powershell
cmd /c "npm run build"
```

If it fails with the recorded F-drive SWC native-module error, record it as an environment limitation. Any different failure is blocking and must be investigated.

- [ ] **Step 3: Dispatch the final whole-branch reviewer**

Generate one review package from `git merge-base main HEAD` to `HEAD`. The reviewer must assess the complete branch against the design spec and all Global Constraints. Send all final findings to one fix agent, rerun covering tests, then re-review.

- [ ] **Step 4: Present one integration menu**

After final approval, present exactly one mutually exclusive choice:

1. Merge locally into `main`.
2. Push `codex/assessment-flow-fixes` and create a pull request.
3. Keep the branch and worktree unchanged.
4. Discard only after exact typed confirmation.

Never execute these options sequentially. The recommended choice is option 2 because it preserves review history and avoids modifying local `main` before remote review.
