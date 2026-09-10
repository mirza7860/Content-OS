# Content-OS Architecture

Content-OS is a content opportunity engine built on top of an AI intelligence/research feed.

## Core loop

`Research → Stories → Deep Analysis → Angle Expansion → Content → Performance → Feedback → Better Angle Selection`

A single important story should be treated as a source event that can produce multiple genuinely different content opportunities rather than repeated rewrites of the same news summary.

## Content opportunity dimensions

For each high-signal story, the engine should consider:

- What happened
- Why it matters
- Contrarian interpretation
- Technical implications
- Builder / experiment opportunity
- Business opportunity
- Practical use case
- Comparison
- Prediction / what happens next
- Personal-brand angle
- Debate / question worth discussing
- Storytelling angle

The system should not force content from weak stories. It should be able to return `No strong content opportunity` when the evidence or relevance is insufficient.

## Creator context

Content recommendations should be evaluated against the creator's positioning and actual experience. The goal is to help the creator develop authority through original thinking, experimentation, building, and lessons learned—not become another AI-news aggregation account.

## Action-first layer

Where useful, the engine should propose a small experiment or build that can create first-hand evidence. The resulting experience can then feed the content workflow.

## Feedback loop

Every published piece should eventually feed performance and qualitative feedback back into the system. Relevant signals include topic, source story, angle, hook, format, platform, reach/impressions, engagement, comments, shares, saves, profile visits, follower growth, and the creator's own assessment of why the content worked or failed.

The feedback layer should identify recurring patterns and influence future angle selection. Examples include whether contrarian, technical, builder, news, or experiment-led angles perform better; which topics repeatedly resonate; and which hooks or formats produce stronger outcomes.

Raw metrics should describe what happened. Qualitative creator feedback should help explain why.

## Scheduled Research Action Specification

This section documents the intended scheduled action for anyone setting up Content-OS. **It is a specification only; creating the scheduled action is intentionally separate from repository setup.**

### Timing

Run once every day at **10:00 AM India Standard Time (IST, UTC+5:30)**.

### Purpose

Produce the daily AI intelligence input for Content-OS and convert the most important developments into high-quality content opportunities for the creator.

### Prompt

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

### Future feedback integration

As Content-OS accumulates publishing results, the scheduled workflow should incorporate the learned patterns when ranking and expanding new opportunities. The research prompt should evolve only when supported by accumulated evidence rather than short-term noise.
