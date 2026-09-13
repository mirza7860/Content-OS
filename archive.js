const days = [
  {
    slug: '2026-09-13',
    date: 'SEP 13, 2026',
    title: 'AI is starting to debate its own speed.',
    summary: 'Frontier pacing, independent evaluators, long-horizon enterprise agents, AI control planes, and the strongest build and audit opportunities from the window.'
  },
  {
    slug: '2026-09-12',
    date: 'SEP 12, 2026',
    title: 'Agents are becoming an enterprise runtime.',
    summary: 'Long-horizon agents, enterprise AI control planes, managed retrieval, inference cache locality, and the strongest build and experiment opportunities from the window.'
  },
  {
    slug: '2026-09-11',
    date: 'SEP 11, 2026',
    title: 'Agents are moving into real workflows.',
    summary: 'DeepSeek inference economics, OpenAI agent infrastructure and data agents, vertical AI, agent safety, and India’s emerging agent commerce stack.'
  },
  {
    slug: '2026-09-10',
    date: 'SEP 10, 2026',
    title: 'One story can become a content mine.',
    summary: 'Fresh AI developments expanded into a broad angle matrix: builds, experiments, tutorials, benchmarks, business opportunities, and first-hand evidence.'
  }
];

const archive = document.getElementById('archive');
const count = document.getElementById('count');
count.textContent = `${days.length} ${days.length === 1 ? 'brief' : 'briefs'}`;

if (!days.length) {
  archive.innerHTML = '<div class="empty">Your first daily brief will appear here.<br>Each day gets its own permanent page in <code>days/</code>.</div>';
} else {
  archive.innerHTML = days.map(day => `<a class="archive-card" href="days/${day.slug}.html"><span class="date">${day.date}</span><span class="title"><strong>${day.title}</strong><small>${day.summary}</small></span><span class="arrow">↗</span></a>`).join('');
}
