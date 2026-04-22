# GutGuard Landing Page Plan

## Scope

Implement the GutGuard landing page shown in the provided screenshots as a single Next.js App Router page using TypeScript and Tailwind CSS.

Constraints:

- follow the screenshots exactly
- no redesign
- responsive desktop and mobile
- reusable components where repetition is visible
- no backend
- small, reviewable patches
- no guessing beyond what is visible in the screenshots

Current repo status:

- Next.js project scaffold exists and builds
- generic landing-page sections already exist but do not match the GutGuard design
- shared primitives exist: `Container`, `Button`, `Card`, `SectionHeading`
- `public/images` folder tree exists, but real exported assets are still missing

## Exact Section Order

1. `Navbar`
2. `Hero`
3. `TrustStats`
4. `CategoryChipRail`
5. `ProtocolJourney`
6. `BioScanReads`
7. `ScoreMeaning`
8. `DoctorCredibility`
9. `ScienceStages`
10. `ComparisonTable`
11. `ProtocolPlans`
12. `PatientReviews`
13. `LeadCapture`
14. `KnowledgeHub`
15. `FAQ`
16. `Footer`

## Exact Section Breakdown

### 1. Navbar

- logo text: `GutGuard`
- nav links: `How It Works`, `The Science`, `Pricing`
- top-right CTA: `Verify Score`

### 2. Hero

- top pill / badge
- headline: `Most supplements are a guess. Your blood is not.`
- supporting paragraph
- primary CTA button
- two supporting trust/check bullets
- right-side inflammation score card mockup

### 3. TrustStats

- horizontal light-gray band
- 3 centered stats:
  - `68%`
  - `94%`
  - `<24h`

### 4. CategoryChipRail

- horizontal pill row under the trust strip
- visible tags/chips only

### 5. ProtocolJourney

- heading: `From blood result to doctor-assigned protocol in 24 hours`
- short supporting copy
- 3 step cards
- lower biomarker / lab chip row

### 6. BioScanReads

- dark section
- heading: `What your BioScan reads`
- short supporting copy
- 8 biomarker cards

### 7. ScoreMeaning

- heading: `What your score means`
- 4 score band cards in this order:
  - `0–25`
  - `26–50`
  - `51–75`
  - `76–100`

### 8. DoctorCredibility

- dark section
- heading: `Every patient gets a doctor. Not a chatbot.`
- intro copy
- doctor profile card
- 5 process chips beneath the card

### 9. ScienceStages

- heading: `Three stages. One cascade.`
- supporting copy
- 3 colored stage cards
- 3 smaller supporting blurbs below

### 10. ComparisonTable

- dark section
- heading: `Not all gut supplements are equal`
- comparison table
- GutGuard column visually highlighted

### 11. ProtocolPlans

- heading: `Doctor-assigned based on your score`
- supporting copy
- 4 protocol cards
- one featured card
- small disclaimer strip
- bottom reassurance / guarantee card

### 12. PatientReviews

- heading: `Real scores. Real patients.`
- 3 review cards

### 13. LeadCapture

- dark band
- heading: `Not sure if your labs qualify? Find out first`
- supporting copy
- email input
- submit button

### 14. KnowledgeHub

- heading: `Everything you need to know`
- subtitle
- tab row
- 4 dark knowledge cards

### 15. FAQ

- heading: `Common questions`
- accordion list

### 16. Footer

- GutGuard footer brand block
- nav columns
- legal row
- small lower badges / labels row

## Target File Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx

components/
  layout/
    Footer.tsx
    Navbar.tsx
  sections/
    BioScanReads.tsx
    CategoryChipRail.tsx
    ComparisonTable.tsx
    DoctorCredibility.tsx
    FAQ.tsx
    Hero.tsx
    KnowledgeHub.tsx
    LeadCapture.tsx
    PatientReviews.tsx
    ProtocolJourney.tsx
    ProtocolPlans.tsx
    ScienceStages.tsx
    ScoreMeaning.tsx
    TrustStats.tsx
  ui/
    AccordionItem.tsx
    Button.tsx
    Card.tsx
    Chip.tsx
    Container.tsx
    DoctorMetric.tsx
    MarkerCard.tsx
    ProtocolCard.tsx
    ReviewCard.tsx
    ScoreRangeCard.tsx
    SectionHeading.tsx
    StageCard.tsx
    StatItem.tsx
    StepCard.tsx
    TabPill.tsx

lib/
  data.ts
  types.ts

public/
  images/
    bioscan/
    doctor/
    hero/
    journey/
    knowledge/
    layout/
    pricing/
    reviews/
    science/

PLAN.md
```

## Exact Component Map

### Page Composition

- `app/page.tsx`
  - `Navbar`
  - `Hero`
  - `TrustStats`
  - `CategoryChipRail`
  - `ProtocolJourney`
  - `BioScanReads`
  - `ScoreMeaning`
  - `DoctorCredibility`
  - `ScienceStages`
  - `ComparisonTable`
  - `ProtocolPlans`
  - `PatientReviews`
  - `LeadCapture`
  - `KnowledgeHub`
  - `FAQ`
  - `Footer`

### Shared UI

- `Container`
  - page max width and horizontal padding
- `Button`
  - primary, secondary, dark/light usage
- `Card`
  - shared card shell
- `SectionHeading`
  - eyebrow, title, description
- `Chip`
  - rounded pills for chip rows
- `StatItem`
  - trust stat item
- `StepCard`
  - 3-step protocol journey cards
- `MarkerCard`
  - biomarker grid items
- `ScoreRangeCard`
  - score band cards
- `DoctorMetric`
  - doctor card stats
- `StageCard`
  - science stage cards
- `ProtocolCard`
  - pricing/protocol cards
- `ReviewCard`
  - patient review cards
- `AccordionItem`
  - FAQ disclosure item
- `TabPill`
  - knowledge hub tabs

## Exact Data Model Needs

Add only data that maps to visible UI:

- navbar links
- hero trust bullets
- trust stats
- category chips
- protocol journey steps
- biomarker chips and cards
- score range cards
- doctor metrics
- doctor process chips
- science stage cards
- science blurbs
- comparison rows
- protocol cards
- review cards
- knowledge tabs
- knowledge cards
- FAQ items
- footer columns
- footer badge row

## Exact Patch Order

| Patch | Files | Goal | Status |
|---|---|---|---|
| 1 | `lib/types.ts` | Add exact types for all visible screenshot-based data | Pending |
| 2 | `lib/data.ts` | Add exact section data exports matching screenshots | Pending |
| 3 | `components/layout/Navbar.tsx` | Rebuild navbar to match GutGuard design | Pending |
| 4 | `components/sections/Hero.tsx` | Rebuild hero to screenshot | Pending |
| 5 | `components/sections/TrustStats.tsx` | Add the 3-stat trust band | Pending |
| 6 | `components/sections/CategoryChipRail.tsx` | Add the chip rail under trust stats | Pending |
| 7 | `components/sections/ProtocolJourney.tsx` | Build blood-result to protocol section | Pending |
| 8 | `components/ui/Chip.tsx` | Add reusable chip primitive | Pending |
| 9 | `components/ui/StatItem.tsx` | Add reusable stat item primitive | Pending |
| 10 | `components/ui/StepCard.tsx` | Add reusable step card primitive | Pending |
| 11 | `components/sections/BioScanReads.tsx` | Build dark biomarker section | Pending |
| 12 | `components/ui/MarkerCard.tsx` | Add biomarker card primitive | Pending |
| 13 | `components/sections/ScoreMeaning.tsx` | Build score meaning section | Pending |
| 14 | `components/ui/ScoreRangeCard.tsx` | Add score range card primitive | Pending |
| 15 | `components/sections/DoctorCredibility.tsx` | Build doctor credibility section | Pending |
| 16 | `components/ui/DoctorMetric.tsx` | Add doctor metric primitive | Pending |
| 17 | `components/sections/ScienceStages.tsx` | Build science stages section | Pending |
| 18 | `components/ui/StageCard.tsx` | Add stage card primitive | Pending |
| 19 | `components/sections/ComparisonTable.tsx` | Build dark comparison table | Pending |
| 20 | `components/sections/ProtocolPlans.tsx` | Build pricing / protocol section | Pending |
| 21 | `components/ui/ProtocolCard.tsx` | Add protocol pricing card primitive | Pending |
| 22 | `components/sections/PatientReviews.tsx` | Build patient reviews section | Pending |
| 23 | `components/ui/ReviewCard.tsx` | Add review card primitive | Pending |
| 24 | `components/sections/LeadCapture.tsx` | Build dark lead capture band | Pending |
| 25 | `components/sections/KnowledgeHub.tsx` | Build knowledge hub section | Pending |
| 26 | `components/ui/TabPill.tsx` | Add tab pill primitive | Pending |
| 27 | `components/sections/FAQ.tsx` | Build FAQ accordion section | Pending |
| 28 | `components/ui/AccordionItem.tsx` | Add accordion item primitive | Pending |
| 29 | `components/layout/Footer.tsx` | Rebuild footer to match screenshots | Pending |
| 30 | `app/page.tsx` | Recompose page in exact screenshot order | Pending |
| 31 | `app/globals.css` | Final visual tokens and page-wide polish | Pending |
| 32 | `public/images/**` | Add exported local assets | Blocked until assets exist |

## Done Criteria By Patch

### Patch 1

- `lib/types.ts` contains only screenshot-backed types
- no speculative or unused types
- no component refactors yet

### Patch 2

- `lib/data.ts` contains only data visible in the screenshots
- grouped by section
- no invented sections

### Patch 3

- navbar shows `GutGuard`
- links match screenshot
- CTA reads `Verify Score`
- mobile behavior remains usable

### Patch 4

- hero contains the pill, exact headline structure, support copy, CTA, trust bullets, and right card
- layout matches screenshot proportions as closely as possible without exported assets

### Patch 5

- trust strip contains exactly 3 stats
- sits visually under the hero as its own section

### Patch 6

- chip rail exists as a dedicated section
- pills match the screenshot order and density

### Patch 7

- protocol journey section contains heading, copy, 3 steps, and lower chip row
- no unrelated section logic is changed

### Patch 8

- `Chip` supports text and `className`
- no unnecessary variants

### Patch 9

- `StatItem` supports value and label
- can be reused in trust strip

### Patch 10

- `StepCard` supports step number, title, description
- optional icon slot only if needed by visible UI

### Patch 11

- biomarker section includes heading, copy, and 8 cards
- dark styling matches screenshot direction

### Patch 12

- `MarkerCard` supports label, body, small action/link text
- card works in dark section

### Patch 13

- score meaning section contains 4 range cards
- order is exactly `0–25`, `26–50`, `51–75`, `76–100`

### Patch 14

- `ScoreRangeCard` supports range, label, description, and small CTA text
- no extra logic

### Patch 15

- doctor section includes heading, intro, doctor profile card, and chip row
- dark layout matches screenshot structure

### Patch 16

- `DoctorMetric` supports value and label
- no extra variants

### Patch 17

- science section includes heading, 3 stage cards, and lower blurbs
- white section layout matches screenshot hierarchy

### Patch 18

- `StageCard` supports step label, title, description, and small note/tag

### Patch 19

- comparison section contains dark table layout
- GutGuard column is visually emphasized

### Patch 20

- protocol plans section contains 4 pricing cards
- featured card state exists
- disclaimer strip and reassurance box are included

### Patch 21

- `ProtocolCard` supports title, price, metadata, feature list, CTA, featured state

### Patch 22

- reviews section contains 3 cards
- no carousel or slider behavior is added

### Patch 23

- `ReviewCard` supports before/after scores, quote, patient label, footer meta

### Patch 24

- lead capture band contains heading, copy, email input, submit button
- compact horizontal layout is preserved

### Patch 25

- knowledge section contains title, subtitle, tabs, and 4 cards
- tabs can stay static unless interaction is clearly required

### Patch 26

- `TabPill` supports active and inactive state
- no extra behavior

### Patch 27

- FAQ section contains the visible question list
- centered narrow layout matches screenshot

### Patch 28

- `AccordionItem` supports title, body, and open/closed state
- simple disclosure only

### Patch 29

- footer matches screenshot structure
- includes visible columns, legal row, and bottom label row

### Patch 30

- `app/page.tsx` composes only the screenshot-based section order
- old generic sections are removed from composition

### Patch 31

- globals match GutGuard colors, spacing, dark/light section behavior, and shared polish
- no section order changes

### Patch 32

- local assets are added into the planned image folders
- sections consuming images use final local asset paths

## Codex-Ready Patch Prompts

### Patch 1

```text
Implement Patch 1 only.

Files allowed:
- lib/types.ts

Objective:
- add exact types for the GutGuard landing page data model used by the screenshots

Requirements:
- include only types that map to visible sections/components
- keep types practical
- do not refactor components yet
- stop after this patch
```

### Patch 2

```text
Implement Patch 2 only.

Files allowed:
- lib/data.ts

Objective:
- add exact mock data exports for the screenshot-based sections

Requirements:
- only include content structures already visible in the screenshots
- organize by section
- do not edit components yet
- stop after this patch
```

### Patch 3

```text
Implement Patch 3 only.

Files allowed:
- components/layout/Navbar.tsx

Objective:
- rebuild the navbar to match the GutGuard screenshot

Requirements:
- include GutGuard logo text
- include nav links: How It Works, The Science, Pricing
- include CTA: Verify Score
- preserve mobile behavior
- do not touch other files
- stop after this patch
```

### Patch 4

```text
Implement Patch 4 only.

Files allowed:
- components/sections/Hero.tsx

Objective:
- rebuild the hero section to match the screenshot exactly

Requirements:
- include the top pill
- include the exact headline structure
- include supporting copy
- include one main CTA
- include the two small trust bullets
- include the right-side inflammation score card layout
- preserve section spacing
- do not touch other sections
- stop after this patch
```

### Patch 5

```text
Implement Patch 5 only.

Files allowed:
- components/sections/TrustStats.tsx

Objective:
- create the gray horizontal trust-stats strip under the hero

Requirements:
- include exactly 3 stats
- match the centered desktop layout from the screenshot
- keep the component self-contained
- stop after this patch
```

### Patch 6

```text
Implement Patch 6 only.

Files allowed:
- components/sections/CategoryChipRail.tsx

Objective:
- create the pill row directly below the trust stats section

Requirements:
- render the visible category pills from the screenshot
- keep styling simple and reusable
- do not connect it in page.tsx yet
- stop after this patch
```

### Patch 7

```text
Implement Patch 7 only.

Files allowed:
- components/sections/ProtocolJourney.tsx

Objective:
- build the 'From blood result to doctor-assigned protocol in 24 hours' section

Requirements:
- include section heading and copy
- include 3 step cards
- include the biomarker/lab pill row under the cards
- use existing shared ui where appropriate
- stop after this patch
```

### Patch 8

```text
Implement Patch 8 only.

Files allowed:
- components/ui/Chip.tsx

Objective:
- add a reusable chip component for the pill rows used across the page

Requirements:
- keep API minimal
- support className pass-through
- no extra variants beyond what this page needs
- stop after this patch
```

### Patch 9

```text
Implement Patch 9 only.

Files allowed:
- components/ui/StatItem.tsx

Objective:
- add a reusable stat item for the trust strip

Requirements:
- support label and value
- keep styling generic
- stop after this patch
```

### Patch 10

```text
Implement Patch 10 only.

Files allowed:
- components/ui/StepCard.tsx

Objective:
- add a reusable step card for the protocol journey section

Requirements:
- support step number, title, description, icon slot if needed
- keep implementation simple
- stop after this patch
```

### Patch 11

```text
Implement Patch 11 only.

Files allowed:
- components/sections/BioScanReads.tsx

Objective:
- build the dark 'What your BioScan reads' section

Requirements:
- include the heading and supporting copy
- render 8 biomarker cards in the exact grid structure from the screenshot
- do not edit page.tsx yet
- stop after this patch
```

### Patch 12

```text
Implement Patch 12 only.

Files allowed:
- components/ui/MarkerCard.tsx

Objective:
- add a reusable biomarker card primitive

Requirements:
- support marker label, short description, and link text
- keep dark-section styling reusable
- stop after this patch
```

### Patch 13

```text
Implement Patch 13 only.

Files allowed:
- components/sections/ScoreMeaning.tsx

Objective:
- build the 'What your score means' section

Requirements:
- include 4 colored score-range cards
- keep the card order exactly: 0–25, 26–50, 51–75, 76–100
- preserve the clean white background layout
- stop after this patch
```

### Patch 14

```text
Implement Patch 14 only.

Files allowed:
- components/ui/ScoreRangeCard.tsx

Objective:
- add a reusable score range card component

Requirements:
- support range, label, description, and small link/action text
- keep styling simple
- stop after this patch
```

### Patch 15

```text
Implement Patch 15 only.

Files allowed:
- components/sections/DoctorCredibility.tsx

Objective:
- build the dark doctor credibility section

Requirements:
- include the exact heading
- include doctor profile card
- include bottom process chips
- preserve the centered dark layout
- stop after this patch
```

### Patch 16

```text
Implement Patch 16 only.

Files allowed:
- components/ui/DoctorMetric.tsx

Objective:
- add the reusable doctor metric item used inside the doctor card

Requirements:
- support value and label
- no extra behavior
- stop after this patch
```

### Patch 17

```text
Implement Patch 17 only.

Files allowed:
- components/sections/ScienceStages.tsx

Objective:
- build the 'Three stages. One cascade.' section

Requirements:
- include heading and copy
- include 3 colored stage cards
- include the 3 supporting blurbs under the cards
- stop after this patch
```

### Patch 18

```text
Implement Patch 18 only.

Files allowed:
- components/ui/StageCard.tsx

Objective:
- add a reusable stage card component

Requirements:
- support step label, title, description, and small tag/link text
- keep implementation simple
- stop after this patch
```

### Patch 19

```text
Implement Patch 19 only.

Files allowed:
- components/sections/ComparisonTable.tsx

Objective:
- build the dark comparison table section

Requirements:
- include the exact title
- render the comparison rows as a table-like layout
- preserve the highlighted GutGuard column
- stop after this patch
```

### Patch 20

```text
Implement Patch 20 only.

Files allowed:
- components/sections/ProtocolPlans.tsx

Objective:
- build the doctor-assigned pricing/protocol section

Requirements:
- include 4 protocol cards
- include the featured center card state
- include the disclaimer strip
- include the bottom guarantee/reassurance box
- stop after this patch
```

### Patch 21

```text
Implement Patch 21 only.

Files allowed:
- components/ui/ProtocolCard.tsx

Objective:
- add a reusable protocol pricing card

Requirements:
- support title, price, small meta items, feature list, and CTA
- support a featured state
- stop after this patch
```

### Patch 22

```text
Implement Patch 22 only.

Files allowed:
- components/sections/PatientReviews.tsx

Objective:
- build the 'Real scores. Real patients.' review section

Requirements:
- include 3 review cards
- preserve the centered layout and light background
- do not add carousel behavior
- stop after this patch
```

### Patch 23

```text
Implement Patch 23 only.

Files allowed:
- components/ui/ReviewCard.tsx

Objective:
- add a reusable review card component

Requirements:
- support before/after score, quote, patient label, and small footer meta
- stop after this patch
```

### Patch 24

```text
Implement Patch 24 only.

Files allowed:
- components/sections/LeadCapture.tsx

Objective:
- build the dark lead capture band

Requirements:
- include heading, body copy, email input, and submit button
- match the compact horizontal layout from the screenshot
- stop after this patch
```

### Patch 25

```text
Implement Patch 25 only.

Files allowed:
- components/sections/KnowledgeHub.tsx

Objective:
- build the 'Everything you need to know' section

Requirements:
- include section title and subtitle
- include the tab row
- include 4 dark content cards
- keep tabs static for now unless the screenshot clearly requires interaction
- stop after this patch
```

### Patch 26

```text
Implement Patch 26 only.

Files allowed:
- components/ui/TabPill.tsx

Objective:
- add a reusable tab pill component for the knowledge section

Requirements:
- support active and inactive state
- keep implementation simple
- stop after this patch
```

### Patch 27

```text
Implement Patch 27 only.

Files allowed:
- components/sections/FAQ.tsx

Objective:
- build the Common questions accordion section

Requirements:
- render the visible question list from the screenshot
- preserve the centered narrow layout
- keep behavior simple
- stop after this patch
```

### Patch 28

```text
Implement Patch 28 only.

Files allowed:
- components/ui/AccordionItem.tsx

Objective:
- add a reusable accordion item component

Requirements:
- support title, body, open state
- simple disclosure behavior only
- stop after this patch
```

### Patch 29

```text
Implement Patch 29 only.

Files allowed:
- components/layout/Footer.tsx

Objective:
- rebuild the footer to match the screenshot

Requirements:
- use the GutGuard footer structure
- include the visible columns and legal row
- include the small bottom badges/links row
- stop after this patch
```

### Patch 30

```text
Implement Patch 30 only.

Files allowed:
- app/page.tsx

Objective:
- compose the page in the exact section order from the screenshots

Requirements:
- use this order only:
  Navbar
  Hero
  TrustStats
  CategoryChipRail
  ProtocolJourney
  BioScanReads
  ScoreMeaning
  DoctorCredibility
  ScienceStages
  ComparisonTable
  ProtocolPlans
  PatientReviews
  LeadCapture
  KnowledgeHub
  FAQ
  Footer
- do not add placeholder sections
- stop after this patch
```

## Remaining Work

1. Replace the generic current sections with the screenshot-based section set
2. Build the missing reusable UI primitives
3. Add final screenshot-backed content into `lib/data.ts`
4. Recompose `app/page.tsx` to the exact GutGuard section order
5. Add final exported assets once available

## Risks

- exact text blocks below screenshot readability may still need copy confirmation
- final local image assets are not in the repo yet
- pixel accuracy will depend on exported dimensions, fonts, and spacing values from Figma
