# Content-OS Interface

This is the initial reading interface. `index.html` is the main page and `archive.html` is the day-by-day archive. Completed daily briefs belong in `days/` as one page per date.

The UI is intentionally minimal so the visual layer can be finalized independently.

## Data flow

The scheduled research action produces a daily brief. A future ingestion layer should store the structured brief, update the archive index, and generate the corresponding day page without requiring manual UI edits.
