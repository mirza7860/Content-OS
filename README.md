# Content-OS

A content opportunity engine: turn what is happening in AI into original content, experiments, and ideas worth pursuing.

## Vision

`Research → Stories → Deep Analysis → Angle Expansion → Content → Performance → Feedback → Better Angle Selection`

The goal is not to become another AI-news aggregator. The system should help a creator understand important developments, find multiple genuinely different angles in a single story, take action where useful, and learn from what performs.

## Interface

The repository is designed for GitHub Pages. `index.html` is the root page and acts as the daily-brief archive. Individual daily briefs live under `days/` as permanent HTML pages.

The feedback loop is deliberately separated under `feedback/`. Its root `feedback/index.html` is the feedback archive, and individual learning records live under `feedback/days/`.

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

## Scheduled Action Setup

The scheduled research action is intentionally **not created by repository setup**. This is the reproducible specification for configuring it.

**Schedule:** Every day at **10:00 AM IST (UTC+5:30)**.

**Purpose:** Research the latest meaningful AI developments and turn the strongest stories into ranked content opportunities for the creator.

**Prompt:**

```text
Prepare today's Content-OS intelligence and content opportunity brief.

Research the latest meaningful developments in AI from the relevant recent window. Prioritize primary sources and high-quality reporting. Cover important model releases, research papers, product launches, major company announcements, open-source releases, agent developments, developer tooling, funding/acquisitions when materially relevant, and other developments that meaningfully change what builders, companies, or the AI ecosystem can do.

Do not optimize for volume. Optimize for freshness, accuracy, breadth, signal-to-noise ratio, and substantive importance. Avoid repeating old news merely because it is trending. Verify important claims against primary sources where possible and distinguish confirmed facts from speculation.

After the research section, identify the strongest content opportunities. Treat each important story as a source event that can generate multiple genuinely different angles rather than several rewrites of the same summary.

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
```

## Project status

Early foundation. UI can be refined independently. The feedback archive and template are now part of the repository structure.

## License

See [LICENSE](LICENSE).
