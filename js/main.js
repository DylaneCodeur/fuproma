/* ============================================================
   FUPROMA-HG · Script global
   Nav (desktop + drawer mobile), footer, hero, interactions
   ============================================================ */
(function () {
  "use strict";

  const BASE = "";
  const LOGO = "assets/img/logo.jpg";

  const NAV_LINKS = [
    { label: "Accueil", href: "index.html", icon: "home" },
    { label: "À propos", href: "presentation.html", icon: "info" },
    { label: "Objectifs", href: "objectifs.html", icon: "target" },
    { label: "Domaines", href: "domaines.html", icon: "sprout" },
    { label: "Zones", href: "zones.html", icon: "map-pin" },
    { label: "Réalisations", href: "realisations.html", icon: "award" },
    { label: "Partenaires", href: "partenaires.html", icon: "handshake" },
    { label: "Contact", href: "contact.html", icon: "phone" },
  ];

  const CURRENT = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  /* -------------------- HEADER -------------------- */
  function buildHeader() {
    const host = document.getElementById("site-header");
    if (!host) return;
    const transparent = host.dataset.transparent === "true";

    const linksDesktop = NAV_LINKS.map(l => {
      const active = l.href.toLowerCase() === CURRENT ? "active" : "";
      return `<a class="nav-link ${active}" href="${l.href}">${l.label}</a>`;
    }).join("");

    const linksDrawer = NAV_LINKS.map(l => {
      const active = l.href.toLowerCase() === CURRENT ? "active" : "";
      return `<a class="drawer-link ${active}" href="${l.href}"><i data-lucide="${l.icon}" style="width:20px;height:20px"></i>${l.label}</a>`;
    }).join("");

    host.className = "site-header" + (transparent ? " header-transparent" : "");
    host.innerHTML = `
      <div class="nav-shell">
        <div class="container-x nav-inner">
          <a class="brand" href="index.html">
            <img src="${LOGO}" alt="Logo FUPROMA-HG">
            <span class="brand-txt">
              <strong>FUPROMA-HG</strong>
              <span>Producteurs de Maïs · Haute Guinée</span>
            </span>
          </a>
          <nav class="nav-links">${linksDesktop}</nav>
          <a href="contact.html" class="btn btn-primary nav-cta-desktop" style="padding:.7rem 1.3rem">
            <i data-lucide="send" style="width:18px;height:18px"></i> Nous rejoindre
          </a>
          <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
      </div>
      <div class="drawer-overlay" id="drawerOverlay"></div>
      <aside class="drawer" id="drawer" aria-hidden="true">
        <div class="drawer-head">
          <a class="brand" href="index.html">
            <img src="${LOGO}" alt="Logo">
            <span class="brand-txt"><strong>FUPROMA-HG</strong></span>
          </a>
          <button class="drawer-close" id="drawerClose" aria-label="Fermer"><i data-lucide="x"></i></button>
        </div>
        <nav style="display:flex;flex-direction:column;gap:.35rem">${linksDrawer}</nav>
        <a href="contact.html" class="btn btn-gold" style="margin-top:1.2rem;width:100%">
          <i data-lucide="send" style="width:18px;height:18px"></i> Nous rejoindre
        </a>
        <div style="margin-top:auto;padding-top:1.5rem;font-size:.85rem;color:var(--ink-soft)">
          <p style="display:flex;gap:.5rem;align-items:center;margin:.4rem 0"><i data-lucide="phone" style="width:16px;height:16px;color:var(--green-600)"></i> +224 610 08 74 74</p>
          <p style="display:flex;gap:.5rem;align-items:center;margin:.4rem 0"><i data-lucide="map-pin" style="width:16px;height:16px;color:var(--green-600)"></i> Kankan, Guinée</p>
        </div>
      </aside>`;

    // Drawer behaviour
    const burger = document.getElementById("burger");
    const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("drawerOverlay");
    const close = document.getElementById("drawerClose");
    const open = () => { drawer.classList.add("open"); overlay.classList.add("open"); burger.classList.add("open"); document.body.style.overflow = "hidden"; };
    const shut = () => { drawer.classList.remove("open"); overlay.classList.remove("open"); burger.classList.remove("open"); document.body.style.overflow = ""; };
    burger.addEventListener("click", () => drawer.classList.contains("open") ? shut() : open());
    overlay.addEventListener("click", shut);
    close.addEventListener("click", shut);
    drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", shut));
    window.addEventListener("keydown", e => { if (e.key === "Escape") shut(); });

    // Scroll state
    const onScroll = () => {
      if (window.scrollY > 30) host.classList.add("scrolled");
      else host.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* -------------------- FOOTER -------------------- */
  function buildFooter() {
    const host = document.getElementById("site-footer");
    if (!host) return;
    const col = (title, items) => `
      <div>
        <h4 style="color:#fff;font-weight:700;margin-bottom:1rem;font-size:1.05rem">${title}</h4>
        <ul style="display:flex;flex-direction:column;gap:.6rem;font-size:.92rem">${items}</ul>
      </div>`;
    const navItems = NAV_LINKS.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("");
    const domItems = ["Production du maïs","Semences améliorées","Mécanisation agricole","Transformation locale","Stockage & conservation","Commercialisation"]
      .map(d => `<li><a href="domaines.html">${d}</a></li>`).join("");

    host.className = "site-footer";
    host.innerHTML = `
      <div style="position:absolute;inset:0;opacity:.06;background:radial-gradient(600px 300px at 90% 0,var(--gold-500),transparent 60%)"></div>
      <div class="container-x" style="position:relative;padding:4rem 0 1.5rem">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2.5rem;">
          <div style="max-width:320px">
            <a class="brand" href="index.html" style="margin-bottom:1rem">
              <img src="${LOGO}" alt="Logo FUPROMA-HG" style="height:56px;width:56px;border-radius:50%">
              <span class="brand-txt"><strong style="color:#fff">FUPROMA-HG</strong><span style="color:#a9c294">Haute Guinée</span></span>
            </a>
            <p style="font-size:.92rem;line-height:1.7;color:#b9cca8">Fédération des Unions des Producteurs de Maïs de la Haute Guinée. Pour une agriculture moderne, productive, résiliente et rentable.</p>
            <div style="display:flex;gap:.6rem;margin-top:1.2rem">
              <a class="footer-social" href="#" aria-label="Facebook"><i data-lucide="facebook" style="width:20px;height:20px"></i></a>
              <a class="footer-social" href="#" aria-label="WhatsApp"><i data-lucide="message-circle" style="width:20px;height:20px"></i></a>
              <a class="footer-social" href="mailto:fuproma112@gmail.com" aria-label="Email"><i data-lucide="mail" style="width:20px;height:20px"></i></a>
              <a class="footer-social" href="#" aria-label="Youtube"><i data-lucide="youtube" style="width:20px;height:20px"></i></a>
            </div>
          </div>
          ${col("Navigation", navItems)}
          ${col("Nos domaines", domItems)}
          <div>
            <h4 style="color:#fff;font-weight:700;margin-bottom:1rem;font-size:1.05rem">Contact</h4>
            <ul style="display:flex;flex-direction:column;gap:.8rem;font-size:.92rem">
              <li style="display:flex;gap:.6rem"><i data-lucide="map-pin" style="width:18px;height:18px;color:var(--gold-400);flex:none"></i> Siège : Kankan, Guinée</li>
              <li style="display:flex;gap:.6rem"><i data-lucide="phone" style="width:18px;height:18px;color:var(--gold-400);flex:none"></i> <a href="tel:+224610087474">+224 610 08 74 74</a></li>
              <li style="display:flex;gap:.6rem"><i data-lucide="mail" style="width:18px;height:18px;color:var(--gold-400);flex:none"></i> <a href="mailto:fuproma112@gmail.com">fuproma112@gmail.com</a></li>
              <li style="display:flex;gap:.6rem"><i data-lucide="globe" style="width:18px;height:18px;color:var(--gold-400);flex:none"></i> www.fuproma.com</li>
            </ul>
          </div>
        </div>
        <div style="margin-top:3rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.1);display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between;align-items:center;font-size:.85rem;color:#93a883">
          <p>© ${new Date().getFullYear()} FUPROMA-HG · Tous droits réservés.</p>
          <p>Créée le 11 mars 2013 · Kankan, Guinée</p>
        </div>
      </div>`;
  }

  /* -------------------- HERO builder (variantes) -------------------- */
  function buildHeroes() {
    document.querySelectorAll("[data-hero]").forEach(el => {
      const d = el.dataset;
      const images = (d.images || d.image || "").split(",").map(s => s.trim()).filter(Boolean);
      const compact = d.variant === "compact";
      el.classList.add("hero");
      if (compact) el.classList.add("hero--compact");

      const bgHtml = images.length > 1
        ? `<div class="hero__bg"><div class="swiper heroSwiper"><div class="swiper-wrapper">${
            images.map(src => `<div class="swiper-slide"><div class="hero__slide" style="background-image:url('${src}')"></div></div>`).join("")
          }</div></div></div>`
        : `<div class="hero__img" style="background-image:url('${images[0] || ""}')"></div>`;

      const crumbs = d.crumbs
        ? `<nav style="margin-bottom:1rem" data-aos="fade-up"><span style="font-size:.85rem;color:rgba(255,255,255,.75)"><a href="index.html" style="color:#fff;text-decoration:none">Accueil</a> &nbsp;/&nbsp; ${d.crumbs}</span></nav>`
        : "";

      const actions = d.cta
        ? `<div style="display:flex;gap:.9rem;flex-wrap:wrap;margin-top:2rem" data-aos="fade-up" data-aos-delay="200">
             <a href="${d.ctaHref || '#'}" class="btn btn-gold"><i data-lucide="arrow-right" style="width:18px;height:18px"></i> ${d.cta}</a>
             ${d.cta2 ? `<a href="${d.cta2Href || '#'}" class="btn btn-outline">${d.cta2}</a>` : ""}
           </div>`
        : "";

      el.innerHTML = `
        ${bgHtml}
        <div class="hero__overlay"></div>
        <div class="hero__grain"></div>
        <div class="container-x" style="position:relative;z-index:2;padding-top:var(--header-h)">
          ${crumbs}
          ${d.eyebrow ? `<span class="eyebrow" data-aos="fade-up"><i data-lucide="${d.eyebrowIcon || 'sparkles'}" style="width:16px;height:16px"></i> ${d.eyebrow}</span>` : ""}
          <h1 style="margin-top:1rem" data-aos="fade-up" data-aos-delay="100">${d.title || ""}</h1>
          ${d.subtitle ? `<p class="lead" style="margin-top:1.2rem" data-aos="fade-up" data-aos-delay="150">${d.subtitle}</p>` : ""}
          ${actions}
        </div>
        ${d.cue === "true" ? `<div class="scroll-cue"><span></span></div>` : ""}
        <div class="hero__wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="${d.waveColor || '#faf8f0'}" d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L0,120Z"></path>
          </svg>
        </div>`;

      if (images.length > 1 && window.Swiper) {
        new Swiper(el.querySelector(".heroSwiper"), {
          loop: true, effect: "fade", fadeEffect: { crossFade: true },
          autoplay: { delay: 4500, disableOnInteraction: false }, speed: 1400,
          allowTouchMove: false,
        });
      }
    });
  }

  /* -------------------- Compteurs animés -------------------- */
  function initCounters() {
    const els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const dur = 1600; const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          el.textContent = (target % 1 === 0 ? Math.round(val).toLocaleString("fr-FR") : val.toFixed(1)) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    els.forEach(el => io.observe(el));
  }

  /* -------------------- Back to top -------------------- */
  function initToTop() {
    const btn = document.createElement("button");
    btn.className = "to-top"; btn.setAttribute("aria-label", "Haut de page");
    btn.innerHTML = '<i data-lucide="arrow-up"></i>';
    document.body.appendChild(btn);
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", () => {
      btn.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
  }

  /* -------------------- WhatsApp FAB -------------------- */
  function initFab() {
    if (document.querySelector(".fab-contact")) return;
    const fab = document.createElement("div");
    fab.className = "fab-contact";
    fab.innerHTML = `<a href="https://wa.me/224610087474" target="_blank" rel="noopener" aria-label="WhatsApp"><i data-lucide="message-circle"></i></a>`;
    document.body.appendChild(fab);
  }

  /* -------------------- Formulaire contact -------------------- */
  function initForms() {
    document.querySelectorAll("form[data-demo-form]").forEach(f => {
      f.addEventListener("submit", (e) => {
        e.preventDefault();
        const msg = f.querySelector("[data-form-msg]");
        if (msg) { msg.style.display = "flex"; f.reset(); setTimeout(() => msg.style.display = "none", 6000); }
      });
    });
  }

  /* -------------------- Init -------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    buildHeader();
    buildFooter();
    buildHeroes();
    initCounters();
    initToTop();
    initFab();
    initForms();

    // Grilles data-grid-2 (compat pages sans classe .grid-2)
    const fixGrids = () => document.querySelectorAll("[data-grid-2]").forEach(g => {
      g.style.gridTemplateColumns = window.innerWidth < 860 ? "1fr" : "1fr 1fr";
    });
    fixGrids(); window.addEventListener("resize", fixGrids);

    if (window.AOS) AOS.init({ duration: 800, once: true, offset: 60, easing: "ease-out-cubic" });
    if (window.lucide) lucide.createIcons();

    // Fallback si AOS échoue à révéler
    setTimeout(() => {
      document.querySelectorAll("[data-aos]:not(.aos-animate)").forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add("reveal-fallback");
      });
    }, 1200);
  });
})();
