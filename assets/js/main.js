const projects = [
  {
    title: "Steel Factory",
    location: "PoiPet City",
    category: "civil",
    type: "Civil",
    image: "steel-factory.webp",
    width: 778,
    height: 500
  },
  {
    title: "Private Building",
    location: "Phnom Penh",
    category: "civil",
    type: "Civil",
    image: "private-building.webp",
    width: 486,
    height: 645
  },
  {
    title: "230kV KG Thom–Siem Reap TL Project",
    location: "Cambodia",
    category: "power",
    type: "Power",
    image: "transmission-230kv.webp",
    width: 960,
    height: 1280
  },
  {
    title: "500kV Transmission Line",
    location: "East Phnom Penh to Laos Border",
    category: "power",
    type: "Power",
    image: "transmission-500kv.webp",
    width: 812,
    height: 933
  },
  {
    title: "500kV Foundation Work",
    location: "Cambodia",
    category: "power",
    type: "Power",
    image: "foundation-500kv.webp",
    width: 747,
    height: 560
  },
  {
    title: "National Road 48",
    location: "PK132–135",
    category: "infrastructure",
    type: "Infrastructure",
    image: "national-road-48.webp",
    width: 759,
    height: 569
  },
  {
    title: "Canal Construction — JICA",
    location: "Battambang Province",
    category: "infrastructure",
    type: "Infrastructure",
    image: "canal-jica.webp",
    width: 662,
    height: 503
  },
  {
    title: "River Bank Works",
    location: "Cambodia",
    category: "infrastructure",
    type: "Infrastructure",
    image: "river-bank.webp",
    width: 631,
    height: 516
  },
  {
    title: "500kV Piling Works",
    location: "East Phnom Penh to Laos Border",
    category: "power",
    type: "Power",
    image: "piling-500kv.webp",
    width: 1280,
    height: 960
  },
  {
    title: "500kV Stringing Works",
    location: "East Phnom Penh to Laos Border",
    category: "power",
    type: "Power",
    image: "stringing-500kv.webp",
    width: 759,
    height: 960
  }
];

const grid = document.querySelector("[data-project-grid]");
const filterGroup = document.querySelector("[data-filters]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");

const projectCard = ({ title, location, category, type, image, width, height }) => `
  <article class="project-card" data-category="${category}">
    <div class="project-image">
      <img src="assets/img/${image}" alt="${title}" width="${width}" height="${height}" loading="lazy" decoding="async">
    </div>
    <div class="project-meta">
      <div>
        <h3>${title}</h3>
        <p>${location}</p>
      </div>
      <p class="project-type">${type}</p>
    </div>
  </article>`;

if (grid) grid.innerHTML = projects.map(projectCard).join("");

filterGroup?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  const filter = button.dataset.filter;
  filterGroup.querySelectorAll("[data-filter]").forEach((item) => {
    const active = item === button;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });

  grid.querySelectorAll(".project-card").forEach((card) => {
    card.hidden = filter !== "all" && card.dataset.category !== filter;
  });
});

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("is-open", !open);
});

nav?.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  nav.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
});

const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

document.querySelector("[data-year]").textContent = new Date().getFullYear();
