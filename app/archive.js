const days = [];
const root = document.getElementById('archiveList');
if (!days.length) {
  root.innerHTML = '<div class="empty-archive">No daily briefs have been archived yet. Completed research runs will appear here.</div>';
} else {
  root.innerHTML = days.map(day => `<a class="archive-card" href="./days/${day.slug}.html"><div><strong>${day.title}</strong><br><small>${day.summary}</small></div><span>→</span></a>`).join('');
}