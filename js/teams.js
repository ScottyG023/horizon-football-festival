// Class of 2026 team wall — renders teams from data/teams.json.
// Empty spots are placeholder cells so the wall conveys "X of 108 spots filled".

(async function renderTeamWall() {
  const grid = document.getElementById('teamGrid');
  const counter = document.getElementById('teamCount');
  if (!grid) return;

  let data;
  try {
    // Always fetch the freshest team data. teams.json is tiny and changes
    // every time a club registers, so we bust the cache on every load — no
    // manual version bump needed when you edit teams.json.
    const res = await fetch('data/teams.json?t=' + Date.now(), { cache: 'no-store' });
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

  function makeTeamCell({ name, club, division, crest }) {
    const cell = document.createElement('div');
    cell.className = 'team-wall-cell';
    // Clubs supply a crest at registration. When present, show the badge image;
    // otherwise fall back to the club's initials so the cell still reads cleanly.
    const badge = crest
      ? `<div class="crest has-img"><img src="${escapeHtml(crest)}" alt="${escapeHtml(club || name)} crest" loading="lazy" /></div>`
      : `<div class="crest" aria-hidden="true">${initials(club || name)}</div>`;
    cell.innerHTML = `
      ${badge}
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
