// Class of 2026 team wall — renders teams from data/teams.json.
// Empty spots are placeholder cells so the wall conveys "X of 108 spots filled".

(async function renderTeamWall() {
  const grid = document.getElementById('teamGrid');
  const counter = document.getElementById('teamCount');
  if (!grid) return;

  let data;
  try {
    const res = await fetch('data/teams.json');
    data = await res.json();
  } catch (err) {
    console.error('Could not load teams.json:', err);
    return;
  }

  const total = data.totalSpots || 108;
  const teams = Array.isArray(data.teams) ? data.teams : [];

  if (counter) counter.textContent = String(teams.length);

  const frag = document.createDocumentFragment();
  teams.forEach((t) => frag.appendChild(makeTeamCell(t)));

  // Show enough placeholder cells to make the wall feel populated without going
  // overboard. Tune this if real registrations exceed the visible window.
  const maxVisible = 36;
  const placeholdersToShow = Math.max(0, Math.min(total - teams.length, maxVisible - teams.length));
  for (let i = 0; i < placeholdersToShow; i++) {
    frag.appendChild(makePlaceholderCell());
  }
  grid.appendChild(frag);

  function makeTeamCell({ name, club, division }) {
    const cell = document.createElement('div');
    cell.className = 'team-wall-cell';
    cell.innerHTML = `
      <div class="crest" aria-hidden="true">${initials(club || name)}</div>
      <div class="team-name">${escapeHtml(name)}</div>
      <div class="team-div">${escapeHtml(division || '')}</div>
    `;
    return cell;
  }

  function makePlaceholderCell() {
    const cell = document.createElement('div');
    cell.className = 'team-wall-cell is-empty';
    cell.innerHTML = `
      <div class="crest" aria-hidden="true">+</div>
      <div class="team-name">Open spot</div>
    `;
    return cell;
  }

  function initials(s) {
    return s.split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  }

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }
})();
