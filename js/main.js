/* ==========================================================================
   MAIN.JS — reads window.SITE_CONFIG and renders/wires up the whole site.
   You should not need to edit this file to update content — use config.js.
   ========================================================================== */
(function () {
  "use strict";

  const CFG = window.SITE_CONFIG || {};

  /* ---------------------------------------------------------------------
     ICONS (inline SVG strings, reused across contact list / footer)
     ------------------------------------------------------------------- */
  const ICONS = {
    email: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></svg>',
    phone: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8.09 9.63a16 16 0 0 0 6 6l1.19-1.2a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    viber: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.5 2 2 5.6 2 10.1c0 2.7 1.7 5.1 4.3 6.6l-.6 4 3.9-2.3c.8.2 1.6.3 2.4.3 5.5 0 10-3.6 10-8.1S17.5 2 12 2z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/></svg>',
    discord: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.769-.554 1.117a18.27 18.27 0 0 0-5.658 0A11.413 11.413 0 0 0 9.118 3a19.736 19.736 0 0 0-4.433 1.369C1.884 8.58.126 12.685.518 16.73a19.944 19.944 0 0 0 5.993 3.03c.484-.665.915-1.37 1.285-2.109a12.92 12.92 0 0 1-2.021-.967c.17-.124.336-.253.497-.388 3.897 1.833 8.122 1.833 11.972 0 .161.135.327.264.497.388a12.86 12.86 0 0 1-2.025.969c.37.738.801 1.443 1.285 2.108a19.918 19.918 0 0 0 5.995-3.03c.46-4.695-.786-8.763-3.679-12.362ZM8.02 14.121c-1.183 0-2.157-1.085-2.157-2.419s.955-2.419 2.157-2.419c1.211 0 2.176 1.095 2.157 2.419.001 1.334-.955 2.419-2.157 2.419Zm7.961 0c-1.183 0-2.157-1.085-2.157-2.419s.955-2.419 2.157-2.419c1.211 0 2.176 1.095 2.157 2.419 0 1.334-.946 2.419-2.157 2.419Z"/></svg>',
    play: '<svg viewBox="0 0 24 24" width="20" height="20" fill="#fff"><path d="M8 5v14l11-7z"/></svg>',
    clapperboard: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.2 6 3 11l-.9-3.5L19.3 2.5z"/><path d="M2 11h20v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
    music: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    palette: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2a10 10 0 1 0 0 20c1 0 2-1 2-2s-1-1-1-2 1-2 2-2h2a2 2 0 0 0 2-2c0-5.5-4.5-10-9-10z"/></svg>',
  };

  const esc = (str) => String(str ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

  /* ---------------------------------------------------------------------
     META / HEAD
     ------------------------------------------------------------------- */
  function renderMeta() {
    const m = CFG.meta || {};
    document.title = m.title || "Portfolio";
    document.getElementById("page-title").textContent = m.title || "Portfolio";
    document.getElementById("meta-description").setAttribute("content", m.description || "");
    document.getElementById("og-title").setAttribute("content", m.title || "");
    document.getElementById("og-description").setAttribute("content", m.description || "");
  }

/* ---------------------------------------------------------------------
   PROFILE / HERO / ABOUT
   ------------------------------------------------------------------- */
function renderProfile() {
  const p = CFG.profile || {};

  document.getElementById("brand-name").textContent = p.name || "";
  document.getElementById("hero-name").textContent = p.name || "";
  document.getElementById("hero-title").textContent = p.title || "";
  document.getElementById("hero-tagline").textContent = p.tagline || "";
  document.getElementById("hero-availability").textContent =
    p.availability || "Available for new projects";

  const heroPhoto = document.getElementById("hero-photo");
  const theme = document.documentElement.getAttribute("data-theme");

heroPhoto.src =
  theme === "dark"
    ? (p.darkPhoto || p.photo)
    : p.photo;

// Update favicon
const favicon = document.getElementById("favicon");

if (favicon) {
  const icon =
    theme === "dark"
      ? (p.darkFavicon || p.favicon || p.photo)
      : (p.favicon || p.photo);

  // Prevent browser favicon cache
  favicon.href = `${icon}?v=${Date.now()}`;
}
  heroPhoto.alt = p.name
    ? `Portrait of ${p.name}`
    : "Portrait photo";

  document.getElementById("about-bio").textContent = p.bio || "";
  document.getElementById("about-location").textContent = p.location || "—";
  document.getElementById("about-availability").textContent =
    p.availability || "—";
  document.getElementById("footer-name").textContent = p.name || "";

  const cvBtn = document.getElementById("cv-download");
  if (p.cvFile) {
    cvBtn.href = p.cvFile;
  } else {
    cvBtn.style.display = "none";
  }
}
  /* ---------------------------------------------------------------------
     CONTACT
     ------------------------------------------------------------------- */
  function renderContact() {
    const c = CFG.contact || {};
    const list = document.getElementById("contact-list");
    const items = [];

    if (c.email) items.push({ key: "email", label: c.email, href: `mailto:${c.email}` });
    if (c.phone) items.push({ key: "phone", label: c.phone, href: `tel:${c.phone.replace(/\s+/g, "")}` });
    if (c.facebook) items.push({ key: "facebook", label: "Facebook", href: c.facebook });
    if (c.whatsapp) items.push({ key: "whatsapp", label: "WhatsApp", href: c.whatsapp });
    if (c.discord) items.push({ key: "discord", label: "Discord", href: c.discord });
    if (c.viber) items.push({ key: "viber", label: "Viber", href: c.viber });
    if (c.telegram) items.push({ key: "telegram", label: "Telegram", href: c.telegram });

    list.innerHTML = items
      .map(
        (it) => `<li><a href="${esc(it.href)}" target="${it.key === "email" || it.key === "phone" ? "_self" : "_blank"}" rel="noopener">${ICONS[it.key] || ""}<span>${esc(it.label)}</span></a></li>`
      )
      .join("");

    // Copy-email row
    const emailRow = document.getElementById("contact-email-row");
    if (c.email) {
      document.getElementById("contact-email-text").textContent = c.email;
      const copyBtn = document.getElementById("copy-email-btn");
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(c.email);
          copyBtn.textContent = "Copied!";
          copyBtn.classList.add("copied");
          setTimeout(() => {
            copyBtn.textContent = "Copy";
            copyBtn.classList.remove("copied");
          }, 1800);
        } catch (e) {
          copyBtn.textContent = "Press Ctrl+C";
        }
      });
    } else {
      emailRow.style.display = "none";
    }

    // Footer social icons (reuse same set, icon-only)
    const footerSocials = document.getElementById("footer-socials");
    const socialKeys = ["facebook", "whatsapp", "viber", "telegram", "email"];
    footerSocials.innerHTML = socialKeys
      .filter((k) => c[k])
      .map((k) => {
        const href = k === "email" ? `mailto:${c.email}` : c[k];
        return `<a href="${esc(href)}" target="_blank" rel="noopener" aria-label="${k}">${ICONS[k]}</a>`;
      })
      .join("");
  }

  /* ---------------------------------------------------------------------
     PROMO BANNER
     ------------------------------------------------------------------- */
  function renderPromo() {
    const promo = CFG.promo || {};
    const section = document.getElementById("promo");
    if (!promo.enabled) {
      section.hidden = true;
      return;
    }
    section.hidden = false;
    document.getElementById("promo-title").textContent = promo.title || "";
    document.getElementById("promo-description").textContent = promo.description || "";
    document.getElementById("promo-price").textContent = promo.price || "";
    const btn = document.getElementById("promo-button");
    btn.textContent = promo.buttonText || "Learn More";
    btn.href = promo.buttonLink || "#contact";

    const bg = promo.background || {};
    if (bg.type === "color") {
      section.style.background = bg.color || "var(--accent)";
    } else if (bg.image) {
      section.style.backgroundImage = `url('${bg.image}')`;
    }
  }

  /* ---------------------------------------------------------------------
     SERVICES
     ------------------------------------------------------------------- */
  function renderServices() {
    const grid = document.getElementById("services-grid");
    const services = CFG.services || [];
    grid.innerHTML = services
      .map(
        (s) => `
      <div class="service-card reveal">
        <div class="service-icon">${ICONS[s.icon] || ICONS.clapperboard}</div>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.description)}</p>
      </div>`
      )
      .join("");
  }

  /* ---------------------------------------------------------------------
     THUMBNAIL SHOWCASE — CAROUSEL
     ------------------------------------------------------------------- */
  let thumbCategory = "All";
  let currentLightboxThumbs = [];
  let lightboxIndex = 0;

  function getFilteredThumbnails() {
    const thumbs = CFG.thumbnails || [];
    return thumbCategory === "All" ? thumbs : thumbs.filter((t) => t.category === thumbCategory);
  }

  function renderThumbnailChips() {
    const wrap = document.getElementById("thumbnail-filter-chips");
    if (!wrap) return;
    const thumbs = CFG.thumbnails || [];
    const categories = ["All", ...new Set(thumbs.map((t) => t.category).filter(Boolean))];

    if (categories.length <= 2) {
      // Nothing meaningful to filter by — hide the chip row entirely.
      wrap.innerHTML = "";
      wrap.hidden = true;
      return;
    }
    wrap.hidden = false;
    wrap.innerHTML = categories
      .map((cat) => `<button type="button" class="chip${cat === thumbCategory ? " active" : ""}" data-category="${esc(cat)}">${esc(cat)}</button>`)
      .join("");

    wrap.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        thumbCategory = chip.dataset.category;
        renderThumbnailChips();
        renderThumbnailTrack();
      });
    });
  }

  function renderThumbnailTrack() {
    const track = document.getElementById("thumbnails-track");
    if (!track) return;
    const thumbs = getFilteredThumbnails();

    track.innerHTML = thumbs
      .map((t) => {
        const orientation = t.orientation === "9:16" ? "916" : "169";
        const ratioClass = orientation === "916" ? "ratio-916" : "ratio-169";
        return `
      <article class="thumbnail-card orientation-${orientation} reveal in-view">
        <div class="thumbnail-media ${ratioClass}">
          <img src="${esc(t.image)}" alt="${esc(t.title || "Thumbnail design")}" loading="lazy">
          <span class="thumbnail-ratio-badge">${esc(t.orientation || "16:9")}</span>
        </div>
        <div class="thumbnail-body">
          <p class="thumbnail-title">${esc(t.title || "")}</p>
          <p class="thumbnail-category">${esc(t.category || "")}</p>
        </div>
      </article>`;
      })
      .join("");

    currentLightboxThumbs = thumbs;
    track.scrollTo({ left: 0 });
    updateCarouselNav();
  }

  function renderThumbnails() {
    const section = document.getElementById("thumbnails");
    const thumbs = CFG.thumbnails || [];

    if (!section) return;

    if (thumbs.length === 0) {
      section.hidden = true;
      return;
    }
    section.hidden = false;

    thumbCategory = "All";
    renderThumbnailChips();
    renderThumbnailTrack();
  }

  function updateCarouselNav() {
    const track = document.getElementById("thumbnails-track");
    const prevBtn = document.getElementById("thumb-prev");
    const nextBtn = document.getElementById("thumb-next");
    const progressWrap = document.getElementById("thumb-progress");
    const bar = document.getElementById("thumb-progress-bar");
    if (!track) return;

    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);

    if (prevBtn) prevBtn.disabled = track.scrollLeft <= 4;
    if (nextBtn) nextBtn.disabled = maxScroll <= 4 || track.scrollLeft >= maxScroll - 4;

    if (bar && progressWrap) {
      if (maxScroll <= 0) {
        progressWrap.style.visibility = "hidden";
        return;
      }
      progressWrap.style.visibility = "visible";
      const wrapWidth = progressWrap.clientWidth;
      const visibleFraction = Math.min(1, track.clientWidth / track.scrollWidth);
      const barWidth = Math.max(visibleFraction * wrapWidth, 24);
      const progress = track.scrollLeft / maxScroll;
      const left = progress * (wrapWidth - barWidth);
      bar.style.width = `${barWidth}px`;
      bar.style.left = `${left}px`;
    }
  }

  function wireThumbnailCarousel() {
    const track = document.getElementById("thumbnails-track");
    const prevBtn = document.getElementById("thumb-prev");
    const nextBtn = document.getElementById("thumb-next");
    if (!track) return;

    const scrollByAmount = (dir) => {
      track.scrollBy({ left: track.clientWidth * 0.8 * dir, behavior: "smooth" });
    };

    if (prevBtn) prevBtn.addEventListener("click", () => scrollByAmount(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => scrollByAmount(1));

    track.addEventListener("scroll", () => window.requestAnimationFrame(updateCarouselNav), { passive: true });
    window.addEventListener("resize", () => updateCarouselNav());

    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); scrollByAmount(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); scrollByAmount(-1); }
    });

    // Click-and-drag / swipe support for mouse users (touch works natively via scroll-snap)
    let isDown = false;
    let dragged = false;
    let startX = 0;
    let startScroll = 0;

    track.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") return; // let native touch scrolling handle this
      isDown = true;
      dragged = false;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      track.classList.add("dragging");
      track.setPointerCapture(e.pointerId);
    });

    track.addEventListener("pointermove", (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) dragged = true;
      track.scrollLeft = startScroll - dx;
    });

    const endDrag = () => {
      if (!isDown) return;
      isDown = false;
      track.classList.remove("dragging");
    };
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointerleave", endDrag);
    track.addEventListener("pointercancel", endDrag);

    // Suppress the click that would otherwise fire on a card right after a drag
    track.addEventListener("click", (e) => {
      if (dragged) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  }

  /* ---------------------------------------------------------------------
     THUMBNAIL LIGHTBOX — click a thumbnail to view it enlarged
     ------------------------------------------------------------------- */
  function openLightbox(index) {
    const thumbs = currentLightboxThumbs;
    if (!thumbs.length) return;
    lightboxIndex = (index + thumbs.length) % thumbs.length;
    const t = thumbs[lightboxIndex];

    document.getElementById("lightbox-image").src = t.image;
    document.getElementById("lightbox-image").alt = t.title || "Thumbnail design";
    document.getElementById("lightbox-title").textContent = t.title || "";
    document.getElementById("lightbox-category").textContent = t.category || "";

    const nav = thumbs.length > 1;
    document.getElementById("lightbox-prev").hidden = !nav;
    document.getElementById("lightbox-next").hidden = !nav;

    const modal = document.getElementById("thumb-lightbox");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("lightbox-close").focus();
  }

  function closeLightbox() {
    const modal = document.getElementById("thumb-lightbox");
    modal.hidden = true;
    document.body.style.overflow = "";
    document.getElementById("lightbox-image").src = "";
  }

  function wireLightbox() {
    const track = document.getElementById("thumbnails-track");
    if (track) {
      track.addEventListener("click", (e) => {
        const card = e.target.closest(".thumbnail-card");
        if (!card) return;
        const idx = Array.from(track.children).indexOf(card);
        if (idx === -1) return;
        openLightbox(idx);
      });
    }

    document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox-backdrop").addEventListener("click", closeLightbox);
    document.getElementById("lightbox-prev").addEventListener("click", () => openLightbox(lightboxIndex - 1));
    document.getElementById("lightbox-next").addEventListener("click", () => openLightbox(lightboxIndex + 1));

    document.addEventListener("keydown", (e) => {
      const modal = document.getElementById("thumb-lightbox");
      if (modal.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") openLightbox(lightboxIndex + 1);
      if (e.key === "ArrowLeft") openLightbox(lightboxIndex - 1);
    });
  }

  /* ---------------------------------------------------------------------
     TESTIMONIALS
     ------------------------------------------------------------------- */
  function renderTestimonials() {
    const grid = document.getElementById("testimonials-grid");
    const testimonials = CFG.testimonials || [];
    grid.innerHTML = testimonials
      .map(
        (t) => `
      <div class="testimonial-card reveal">
        <p class="testimonial-quote">${esc(t.quote)}</p>
        <p class="testimonial-name">${esc(t.name)}</p>
        <p class="testimonial-role">${esc(t.role)}</p>
      </div>`
      )
      .join("");
  }

  /* ---------------------------------------------------------------------
     PORTFOLIO — render, search, filter, modal
     ------------------------------------------------------------------- */
  let activeCategory = "All";
  let searchTerm = "";

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }

  function getFilteredProjects() {
    const projects = CFG.projects || [];
    return projects.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const haystack = `${p.title}  ${p.category}`.toLowerCase();
      const matchesSearch = !searchTerm || haystack.includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  function renderFilterChips() {
    const projects = CFG.projects || [];
    const categories = ["All", ...new Set(projects.map((p) => p.category).filter(Boolean))];
    const wrap = document.getElementById("filter-chips");
    wrap.innerHTML = categories
      .map((cat) => `<button type="button" class="chip${cat === activeCategory ? " active" : ""}" data-category="${esc(cat)}">${esc(cat)}</button>`)
      .join("");

    wrap.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        activeCategory = chip.dataset.category;
        renderFilterChips();
        renderPortfolioGrid();
      });
    });
  }

  function renderPortfolioGrid() {
    const grid = document.getElementById("portfolio-grid");
    const empty = document.getElementById("portfolio-empty");
    const filtered = getFilteredProjects();

    if (filtered.length === 0) {
      grid.innerHTML = "";
      empty.hidden = false;
      return;
    }
    empty.hidden = true;

    grid.innerHTML = filtered
      .map(
        (p) => `
      <article class="project-card reveal in-view" data-id="${esc(p.id)}" tabindex="0" role="button" aria-label="Watch ${esc(p.title)}">
        <div class="project-thumb">
          <img src="${esc(p.thumbnail)}" alt="${esc(p.title)} thumbnail" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.classList.add('thumb-fallback');this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 200 200%27%3E%3Crect width=%27200%27 height=%27200%27 fill=%27%23E7E2D6%27/%3E%3Ctext x=%2750%25%27 y=%2752%25%27 font-size=%2740%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27 fill=%27%2363666F%27%3E%F0%9F%8E%AC%3C/text%3E%3C/svg%3E';">
          <div class="play-badge"><span>${ICONS.play}</span></div>
        </div>
        <div class="project-body">
          <span class="project-category">${esc(p.category || "")}</span>
          <h3 class="project-title">${esc(p.title)}</h3>

        </div>
      </article>`
      )
      .join("");

    grid.querySelectorAll(".project-card").forEach((card) => {
      const openHandler = () => openProjectModal(card.dataset.id);
      card.addEventListener("click", openHandler);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openHandler();
        }
      });
    });
  }

function getEmbedUrl(type, src) {

  if (type === "youtube") {
    const match = src.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([a-zA-Z0-9_-]{6,})/);
    const id = match ? match[1] : "";
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  }

  if (type === "vimeo") {
    const match = src.match(/vimeo\.com\/(\d+)/);
    const id = match ? match[1] : "";
    return `https://player.vimeo.com/video/${id}?autoplay=1`;
  }

  if (type === "gdrive") {

    const match = src.match(/[-\w]{25,}/);
    const id = match ? match[0] : "";

    return `https://drive.google.com/file/d/${id}/preview`;

  }

  return src;
}

  function openProjectModal(id) {
    const project = (CFG.projects || []).find((p) => p.id === id);
    if (!project) return;

    const modal = document.getElementById("video-modal");
    const media = document.getElementById("video-modal-media");

    if (project.videoType === "upload") {
      media.innerHTML = `<video src="${esc(project.videoSrc)}" controls autoplay playsinline></video>`;
    } else {
      const url = getEmbedUrl(project.videoType, project.videoSrc);
      media.innerHTML = `<iframe src="${esc(url)}" title="${esc(project.title)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    }

    document.getElementById("modal-category").textContent = project.category || "";
    document.getElementById("modal-title").textContent = project.title || "";
    document.getElementById("modal-description").textContent = project.description || "";
    document.getElementById("modal-date").textContent = formatDate(project.date);

    const linkEl = document.getElementById("modal-link");
    if (project.link) {
      linkEl.href = project.link;
      linkEl.style.display = "inline";
    } else {
      linkEl.style.display = "none";
    }

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("video-modal-close").focus();
  }

  function closeProjectModal() {
    const modal = document.getElementById("video-modal");
    document.getElementById("video-modal-media").innerHTML = "";
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  function wireModal() {
    document.getElementById("video-modal-close").addEventListener("click", closeProjectModal);
    document.getElementById("video-modal-backdrop").addEventListener("click", closeProjectModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !document.getElementById("video-modal").hidden) closeProjectModal();
    });
  }

  function wireSearch() {
    const input = document.getElementById("portfolio-search");
    input.addEventListener("input", (e) => {
      searchTerm = e.target.value;
      renderPortfolioGrid();
    });
  }

  /* ---------------------------------------------------------------------
     CONTACT FORM (client-side only — wire to your own backend/formsubmit
     endpoint if you want real email delivery)
     ------------------------------------------------------------------- */
  function wireContactForm() {
    const form = document.getElementById("contact-form");
    const note = document.getElementById("form-note");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");
      const to = (CFG.contact || {}).email || "";
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      note.textContent = "Opening your email app…";
      form.reset();
    });
  }

  /* ---------------------------------------------------------------------
     THEME TOGGLE
     ------------------------------------------------------------------- */
 function wireThemeToggle() {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (prefersDark ? "dark" : "light");

  root.setAttribute("data-theme", initial);

  // Update profile image on page load
  renderProfile();

  btn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    // Update profile image instantly
    renderProfile();
  });
}

  /* ---------------------------------------------------------------------
     MOBILE NAV
     ------------------------------------------------------------------- */
  function wireMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("main-nav");
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------------------------------------------------------------------
     SCROLL REVEAL ANIMATIONS
     ------------------------------------------------------------------- */
  function wireRevealAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  /* ---------------------------------------------------------------------
     FOOTER YEAR
     ------------------------------------------------------------------- */
  function renderFooterYear() {
    document.getElementById("footer-year").textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------------------
     INIT
     ------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderMeta();
    renderProfile();
    renderContact();
    renderPromo();
    renderServices();
    renderThumbnails();
    renderTestimonials();
    renderFilterChips();
    renderPortfolioGrid();
    renderFooterYear();

    wireModal();
    wireSearch();
    wireContactForm();
    wireThemeToggle();
    wireMobileNav();
    wireRevealAnimations();
    wireThumbnailCarousel();
    wireLightbox();
  });
})();
