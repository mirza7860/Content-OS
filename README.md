# Content-OS

A content opportunity engine: turn what is happening in AI into original content, experiments, and ideas worth pursuing.

## Vision

Content-OS is designed around a compounding loop:

`Research → Stories → Deep Analysis → Angle Expansion → Content → Performance → Feedback → Better Angle Selection`

The goal is not to become another AI-news aggregator. The system should help a creator understand important developments, find multiple genuinely different angles in a single story, take action where useful, and learn from what performs.

## Core capabilities

### Intelligence

Find and synthesize the latest meaningful AI developments with strong emphasis on freshness, accuracy, primary sources, and signal-to-noise ratio.

### Angle engine

One important story should expand into multiple possible interpretations: why it matters, what people are missing, contrarian takes, technical implications, builder experiments, business opportunities, practical applications, comparisons, predictions, personal-brand angles, debates, and storytelling angles.

### Action-first content

When appropriate, suggest something small the creator can actually build or test. First-hand experience should be preferred over generic commentary.

### Feedback loop

Capture publishing outcomes and creator feedback so the system can learn which topics, angles, hooks, formats, and experiments consistently work. Metrics explain what happened; qualitative feedback helps explain why.

## Scheduled Action Setup

The scheduled research action is intentionally **not created by the repository setup**. This section is the reproducible specification for anyone who needs to configure it.

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

### Feedback-driven evolution

As publishing history accumulates, incorporate learned patterns into future opportunity ranking. Do not overfit to short-term noise; prefer patterns supported by repeated results and creator feedback.

## Project status

Early foundation. UI and implementation layers are intentionally being developed separately.

## License

See [LICENSE](LICENSE).
