[中文](./README.md) | English

# NTTI - Not-That-Typical Identity Test

**Try it online: [ntti.eggfine.com](https://ntti.eggfine.com/)**

A 15-dimension personality test built on the improved SBTI framework. 5 models, 45 randomized questions, matching 40+ quirky personality types.

> SBTI is so last season. Say hello to NTTI.

## NTTI vs SBTI

| Feature | SBTI (Original) | NTTI |
|---------|-----------------|------|
| Tech Stack | Single HTML + inline JS/CSS | Next.js 16 + Tailwind v4 + TypeScript |
| Questions | 30 fixed | 600+ pool, 45 randomly selected per test |
| Questions per Dimension | 2 | 3 (more stable measurement) |
| Personality Types | 26 | 40+ |
| Scoring | Hard threshold + equal-weight distance | Probabilistic grading + weighted matching |
| Option Bias Control | None (fixed ABC order) | Frontend random shuffle per question |
| Consistency Check | None | Auto-detects contradictory answers, adds follow-up questions |
| Answer Flow | All questions on one page | Card-by-card with keyboard shortcuts |
| Sharing | None | Signed QR code + result poster generation |
| Theme | Light only | Light / Dark toggle |
| i18n | None | Chinese / English |
| Responsive | Basic | Fully responsive (mobile / tablet / desktop) |
| Animation | None | Spring physics animation (Motion library) |
| Deployment | Static HTML | Cloudflare Pages + SSR |

## What's New

### Psychometric Improvements
- **Probabilistic grading**: Instead of hard L/M/H thresholds, scores are mapped to probability distributions across grades, eliminating cliff effects
- **Weighted dimension matching**: Each personality type can define core dimension weights (1-3); mismatches on core dimensions have greater impact
- **Option shuffling**: ABC options are randomly reordered per question at render time, eliminating systematic bias toward middle/last options
- **Consistency detection + follow-up**: When the max score spread within a dimension's 3 questions is >= 2, additional questions are automatically added until consistency is reached or the pool is exhausted

### Product Features
- **Result sharing**: Signed tamper-proof URL encoding; scan to view others' results and start your own test
- **Poster generation**: Light/dark themed posters with QR code, one-tap save to gallery
- **Homepage QR code**: Desktop shows QR for quick mobile access
- **Multilingual support**: Auto-detects language from browser, URL-based routing, cookie-persisted preference

## Features

- **15 Dimensions / 5 Models** — Self, Emotion, Attitude, Drive, Social
- **600+ Question Pool** — 40 questions per dimension, 3 randomly selected each time
- **40+ Personality Types** — Including hidden type (DRUNK) and fallback type (HHHH)
- **Probabilistic Scoring** — 7-level probability distribution + weighted dimension matching
- **Consistency Detection** — Contradictory answers trigger follow-up questions for better accuracy
- **Option Randomization** — ABC order shuffled per question to prevent default bias
- **i18n** — Chinese / English, auto-detection + manual toggle
- **Personality Codex** — Collect unlocked personalities, grid view with progress, unlock effects
- **Share QR Code** — Signed tamper-proof result links
- **Result Poster** — Light/dark themes with QR code, save to gallery
- **Dark Mode** — Default light, toggleable
- **Fully Responsive** — Mobile, tablet, and desktop
- **Spring Animations** — Physics-based spring animations via Motion

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (Framer Motion)
- TypeScript / Bun

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
bun run build
bun run start
```

## Project Structure

```
app/
  layout.tsx              # Root layout (minimal shell)
  [lang]/
    layout.tsx            # Locale layout (fonts, theme, I18nProvider)
    page.tsx              # Home page
    codex/page.tsx        # Personality codex page
    r/page.tsx            # Shared result page (/r?d=...&s=...)
  globals.css             # Tailwind v4 theme + animations

lib/
  i18n/
    index.ts              # i18n config, Dictionary types, loader
    context.tsx           # I18nProvider + useI18n/useLocale/useDict
    locales/
      zh.ts               # Chinese UI dictionary
      en.ts               # English UI dictionary
  data/
    locale.ts             # Locale-aware content data loader
    questions.ts          # Chinese question bank (600+)
    questions.en.ts       # English question bank
    personalities.ts      # Chinese personality types (40+)
    personalities.en.ts   # English personality types
    dimensions.ts         # Dimension metadata + DIMENSION_IDS
    dimensions.en.ts      # English dimension data
  types.ts                # TypeScript types
  scoring.ts              # Probabilistic scoring + weighted matching + consistency
  share.ts                # Share link encoding/decoding/signing
  codex.ts                # Personality codex localStorage storage
  utils.ts                # Utility functions

components/
  TestApp.tsx             # Main state machine + follow-up rounds + unlock detection
  IntroScreen.tsx         # Home screen (QR + codex entry)
  ParticleField.tsx       # Particle background animation
  CodexView.tsx           # Personality codex (grid + unlock progress)
  TestScreen.tsx          # Test flow + follow-up prompts
  ResultScreen.tsx        # Result page (poster + sharing)
  SimilarityRing.tsx      # Match percentage ring chart
  SharedResultView.tsx    # Shared result viewer
  ResultPoster.tsx        # Poster renderer (light/dark themes)
  QuestionCard.tsx        # Question card (auto-shuffled options)
  DimensionChart.tsx      # Dimension grid
  ProgressBar.tsx         # Progress bar
  QRCode.tsx              # QR code component
  ThemeToggle.tsx         # Light/dark toggle
  LanguageSwitcher.tsx    # Language switcher

middleware.ts             # Locale detection + URL redirect
```

## Credits

SBTI original author: Bilibili [@Q肉儿串儿](https://space.bilibili.com/417038183)

NTTI is built upon and improved from the SBTI framework, question bank, and personality system.

## Deployment

The official site is hosted on [Cloudflare Pages](https://pages.cloudflare.com/).

### Deploy from Release Artifacts

1. Go to [Releases](https://github.com/EggFine/NTTI/releases) and download the latest `ntti-source-*.zip`
2. Extract, install dependencies, and build:
   ```bash
   bun install
   bun run build
   bun run start
   ```

### Deploy to Cloudflare Pages from Source

1. Fork this repository
2. Create a project on Cloudflare Pages and connect your GitHub repo
3. Build settings: Framework preset `Next.js`, build command `bun run build`
4. Auto-deploys on every push

### Deploy to Vercel from Source

1. Fork this repository
2. Import the project on [Vercel](https://vercel.com)
3. Next.js is auto-detected, no extra configuration needed

## CI/CD

Every push to `main` triggers GitHub Actions:

- Bun dependency install + build
- Package build output and source code as zip
- Auto-create [GitHub Release](https://github.com/EggFine/NTTI/releases) (tag format: `vDATE-commit`)

You can also trigger manually from the Actions tab with a custom version tag.

## License

MIT
