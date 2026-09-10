const days = [
  {
    slug: '2026-09-10',
    date: 'SEP 10, 2026',
    title: 'Agents are becoming the story.',
    summary: 'AI research, agent security, personal computers for agents, model economics, and the strongest content opportunities from today.'
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
