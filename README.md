# Content-OS

A content opportunity engine: turn what is happening in AI into original content, experiments, and ideas worth pursuing.

## Vision

`Research → Stories → Deep Analysis → Angle Expansion → Content → Performance → Feedback → Better Angle Selection`

The goal is not to become another AI-news aggregator. Content-OS should help a creator understand important developments, find multiple genuinely different angles in a single story, take action where useful, publish from an original point of view, and learn from what performs.

## Repository Structure

This repository is designed to work directly as a GitHub Pages site. The root `index.html` is the main daily-brief archive. Every daily brief is a permanent HTML page under `days/`.

```text
Content-OS/
├── index.html                 # Main daily intelligence archive
├── archive.js                 # Daily archive data/rendering
├── styles.css                 # Main site styling
├── days/
│   └── YYYY-MM-DD.html        # Permanent daily brief pages
└── feedback/
    ├── index.html             # Feedback archive
    ├── archive.js             # Feedback archive data/rendering
    ├── styles.css             # Feedback styling
    ├── TEMPLATE.html          # Required template for new feedback entries
    └── days/
        └── YYYY-MM-DD-*.html  # Permanent feedback records
```

The `feedback/` area is intentionally separate from the research archive. It is the learning layer of the system.

## Operating Protocol

Content-OS has two different kinds of records:

**Daily intelligence** answers: *What happened, why does it matter, and what could I do with it?*

**Feedback records** answer: *What did I publish, what happened, why do I think it happened, and what should the system learn?*

The scheduled research action should use this repository structure as its source of truth. It should not treat each run as an isolated report.

### Every daily run

Research the latest meaningful AI developments and identify the highest-signal stories. Then turn those stories into content opportunities using the creator's positioning and the accumulated feedback from `feedback/`.

The output should be written as that day's permanent brief:

`days/YYYY-MM-DD.html`

The daily page should remain useful as a historical research record. Do not silently replace an older day's page with a newer report.

The main archive should expose the daily page through `archive.js` so the new brief is discoverable from the root `index.html`.

### Before choosing angles

Read the existing feedback records when they contain relevant evidence. Use them as learning signals, not as rigid rules.

Look for repeated patterns such as:

- angles that consistently attract attention
- hooks that repeatedly underperform
- formats that work better for particular topics
- topics that generate meaningful comments, saves, shares, or profile visits
- experiments that create stronger first-hand content
- differences between raw performance and the creator's qualitative judgment

Do not overfit to a single post. A strong result is evidence, not a permanent rule.

### Content opportunity standard

A story is valuable only when there is a reason for this creator to say something interesting about it.

Prefer opportunities that create one or more of these advantages:

`Original opinion · First-hand experiment · Technical insight · Builder lesson · Business implication · Useful explanation · Strong prediction · Meaningful debate`

Do not manufacture an angle just because a story is popular. If a development has no strong content opportunity, explicitly mark it as such.

One source story can produce several pieces of content, but the angles must be meaningfully different. Do not create five versions of the same news summary.

## Daily Brief Output Contract

Each daily brief should contain, at minimum:

1. **Research / intelligence** — important developments with source links and enough context to understand what changed.
2. **Why it matters** — the significance for AI builders, developers, companies, or the ecosystem.
3. **Content opportunities** — the strongest stories selected for content creation.
4. **Angle expansion** — genuinely different possible perspectives for each selected story.
5. **Action / experiment ideas** — small things the creator could test or build to generate first-hand evidence.
6. **Format and hook directions** — suitable formats and distinct hooks where useful.
7. **Priority ranking** — which opportunities deserve attention now and why.
8. **Learning influence** — where previous feedback materially affected the ranking or angle selection.

Accuracy matters more than volume. Important claims should be verified against primary sources where possible, and confirmed facts must be distinguished from speculation.

## Feedback Loop

Feedback is part of the product's learning system, not just a notes folder. After publishing content, create a dated HTML feedback entry using `feedback/TEMPLATE.html` and add it to the feedback archive.

Each entry should record what was published, the source story, the angle, platform and format, quantitative results, what you believe caused the result, what worked, what did not work, what should be kept or changed, and what Content-OS should learn from the result.

Use this filename convention:

`feedback/days/YYYY-MM-DD-short-description.html`

Do not overwrite historical entries. Each publishing result or learning event gets its own page. After creating the page, add its metadata to `feedback/archive.js` so it appears in the feedback index.

### Feedback rules

Be honest about weak results. Do not rewrite history to make a post look successful.

Separate **what happened** from **why you think it happened**. Metrics are evidence; interpretation is a hypothesis.

Keep one entry focused on one publishing result or one clear learning event.

Prefer repeated patterns over conclusions from a single post. Content-OS should learn from accumulated evidence rather than overfitting to one unusually good or bad result.

Record qualitative feedback even when metrics are unavailable. The creator's judgment about the hook, angle, originality, timing, and audience response is valuable training signal.

Keep old entries immutable whenever possible. If a correction is necessary, make the correction explicit rather than silently changing the historical record.

## How Feedback Changes Future Runs

Feedback should influence future content selection at the **angle-selection and prioritization layer**, not distort the underlying news research.

The research layer should continue to discover what is objectively important. The learning layer should then help decide what is most promising for this creator.

For example, if several feedback records show that technical builder experiments outperform generic commentary, future briefs should give more weight to stories where a concrete experiment is possible. If a certain hook repeatedly gets attention but produces little meaningful engagement, the system should recognize that distinction rather than simply labeling the hook successful.

The goal is a compounding loop:

`New AI developments → Content opportunities → Published content → Measured result → Creator judgment → Feedback record → Pattern detection → Better future selection`

## Scheduled Action Setup

The scheduled research action is intentionally **not created by repository setup**. This section is the reproducible specification for configuring it.

**Schedule:** Every day at **10:00 AM IST (UTC+5:30)**.

**Purpose:** Run the Content-OS intelligence pipeline, use the repository's existing daily and feedback structure, and produce a ranked set of content opportunities for the creator.

### Scheduled action instructions

The scheduled action should treat this README and the repository itself as the operating specification.

On every run:

1. Research the latest meaningful AI developments from the relevant recent window.
2. Prioritize primary sources and high-quality reporting.
3. Cover important model releases, research papers, product launches, major company announcements, open-source releases, agent developments, developer tooling, funding/acquisitions when materially relevant, and other developments that meaningfully change what builders, companies, or the AI ecosystem can do.
4. Avoid repeating old news merely because it is trending.
5. Verify important claims against primary sources where possible and distinguish confirmed facts from speculation.
6. Read relevant existing feedback records before ranking content opportunities.
7. Treat each important story as a source event that can generate multiple genuinely different angles rather than several rewrites of the same summary.
8. Prefer opportunities that give the creator a reason to have an original opinion, perform an experiment, build something, or share first-hand learning.
9. If a story does not provide a strong content opportunity, explicitly say so rather than manufacturing one.
10. Produce the day's brief using the repository's daily-page structure and archive convention.
11. Keep the intelligence/research layer independent from feedback bias: feedback changes prioritization and angle selection, not the factual assessment of what happened.
12. Rank the best opportunities by expected value and explain briefly why the top opportunities are worth pursuing now.

### Required angle expansion

For each high-value story, think through:

1. What happened.
2. Why it matters.
3. What most people may be missing.
4. A contrarian or non-obvious angle.
5. A technical angle.
6. A builder/experiment angle: something small the creator could actually test or build.
7. A business/opportunity angle.
8. A practical angle for developers or AI builders.
9. A prediction or "what happens next" angle.
10. A personal-brand angle relevant to someone building AI agents and harnesses, software products, and startups.
11. A debate/question angle.
12. Potential formats such as LinkedIn post, X thread, carousel, short video, or deeper technical post.
13. Several distinct hook directions where useful.

### Creator positioning

Use the creator's current positioning when judging whether an opportunity is worth pursuing: building AI agents and harnesses, building software products and startups, and sharing technical and business observations as a hands-on builder.

The system should continually ask:

> **Why is this creator specifically worth listening to on this story?**

If there is no convincing answer, lower the opportunity's priority or reject it.

### Scheduled prompt

```text
Prepare today's Content-OS intelligence and content opportunity brief.

Follow the repository README as the operating specification. Treat the existing daily archive and feedback archive as persistent system state, not as unrelated historical documents.

Research the latest meaningful developments in AI from the relevant recent window. Prioritize primary sources and high-quality reporting. Cover important model releases, research papers, product launches, major company announcements, open-source releases, agent developments, developer tooling, funding/acquisitions when materially relevant, and other developments that meaningfully change what builders, companies, or the AI ecosystem can do.

Do not optimize for volume. Optimize for freshness, accuracy, breadth, signal-to-noise ratio, and substantive importance. Avoid repeating old news merely because it is trending. Verify important claims against primary sources where possible and distinguish confirmed facts from speculation.

Before ranking content opportunities, inspect relevant feedback records under feedback/ and use repeated evidence to improve angle selection and prioritization. Do not let feedback distort factual research or cause overfitting to a single post.

Treat each important story as a source event that can generate multiple genuinely different angles rather than several rewrites of the same summary.

For each high-value story, think through:
1. What happened.
2. Why it matters.
3. What most people may be missing.
4. A contrarian or non-obvious angle.
5. A technical angle.
6. A builder/experiment angle: something small the creator could actually test or build.
7. A business/opportunity angle.
8. A practical angle for developers or AI builders.
9. A prediction or "what happens next" angle.
10. A personal-brand angle relevant to someone building AI agents and harnesses, software products, and startups.
11. A debate/question angle.
12. Potential formats such as LinkedIn post, X thread, carousel, short video, or deeper technical post.
13. Several distinct hook directions where useful.

Use the creator's positioning and prior feedback to rank opportunities. Prefer ideas that give the creator a reason to have an original opinion, perform an experiment, build something, or share first-hand learning. Do not turn the output into generic AI-news reposts.

If a story does not provide a strong content opportunity, explicitly say so rather than manufacturing one.

Finally, rank the best opportunities by expected value and explain briefly why the top opportunities are worth pursuing now.

Preserve the repository's historical structure: each daily brief belongs to days/YYYY-MM-DD.html, and feedback belongs to feedback/days/. Do not overwrite historical records.
```

## Project Status

Early but functional foundation. The repository now contains the main daily intelligence archive, permanent daily-page convention, a dedicated feedback archive, a reusable feedback template, and the documented operating protocol for the future scheduled action.

The UI can evolve independently from the underlying content and learning system.

## License

See [LICENSE](LICENSE).
