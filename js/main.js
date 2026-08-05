/* =========================================================
   Jesus Celebration Centre – Kitengela Town
   Site interactions (vanilla ES6+, no dependencies)
   ========================================================= */
(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Data ---------------- */
  const ministries = [
    { title: "Children's Ministry", desc: "Nurturing little hearts in the truth and joy of the Gospel.", icon: "M12 3l7 4v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V7l7-4z" },
    { title: "Youth Ministry", desc: "Empowering the next generation to live boldly for Christ.", icon: "M12 2a4 4 0 100 8 4 4 0 000-8zM4 20a8 8 0 0116 0v1H4v-1z" },
    { title: "Women's Ministry", desc: "Building women of faith, purpose and quiet strength.", icon: "M12 2a5 5 0 015 5c0 2.4-1.7 4.4-4 4.9V15h3v2h-3v3h-2v-3H8v-2h3v-3.1C8.7 11.4 7 9.4 7 7a5 5 0 015-5z" },
    { title: "Men's Fellowship", desc: "Raising men after God's own heart for family and nation.", icon: "M14 2l-2 4-2-4H4l5 7-5 7h6l2-4 2 4h6l-5-7 5-7h-6z" },
    { title: "Worship Team", desc: "Leading the church into the presence of God through praise.", icon: "M9 3v10.6A4 4 0 108 17V7l10-2v6.6A4 4 0 1017 15V3L9 5z" },
    { title: "Media Team", desc: "Carrying the message beyond our walls with excellence.", icon: "M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm6 3v8l6-4-6-4z" },
    { title: "Evangelism", desc: "Reaching Kitengela and beyond with the good news.", icon: "M3 11l18-8-8 18-2-8-8-2z" },
    { title: "Prayer Ministry", desc: "Standing in the gap as a house of prayer for all.", icon: "M12 2c-1 3-3 4.5-3 7a3 3 0 006 0c0-2.5-2-4-3-7zm0 12a5 5 0 00-5 5v1h10v-1a5 5 0 00-5-5z" },
  ];

  const sermons = [
    { title: "The Power of Worship", pastor: "Senior Pastor", date: "Aug 3, 2026", img: "assets/img/sermon-1.svg" },
    { title: "Walking in Faith", pastor: "Guest Speaker", date: "Jul 27, 2026", img: "assets/img/sermon-2.svg" },
    { title: "Kingdom Ambassadors", pastor: "Senior Pastor", date: "Jul 20, 2026", img: "assets/img/sermon-3.svg" },
  ];

  const DAY = 24 * 60 * 60 * 1000;
  const now = Date.now();
  const events = [
    { name: "Kingdom Worship Night", date: new Date(now + 6 * DAY), time: "6:00 PM", venue: "Main Sanctuary", img: "assets/img/event-1.svg" },
    { name: "Youth Conference 2026", date: new Date(now + 20 * DAY), time: "9:00 AM", venue: "JCC Grounds", img: "assets/img/event-2.svg" },
    { name: "Prayer & Fasting Week", date: new Date(now + 34 * DAY), time: "5:30 PM", venue: "Prayer Altar", img: "assets/img/event-3.svg" },
  ];

  const gallery = [
    { img: "assets/img/gallery-1.svg", cat: "Sunday Services", cap: "Sunday Worship" },
    { img: "assets/img/gallery-2.svg", cat: "Worship", cap: "Lost in Praise" },
    { img: "assets/img/gallery-3.svg", cat: "Conferences", cap: "Annual Conference" },
    { img: "assets/img/gallery-4.svg", cat: "Youth", cap: "Youth Alive" },
    { img: "assets/img/gallery-5.svg", cat: "Outreach", cap: "Community Outreach" },
    { img: "assets/img/gallery-6.svg", cat: "Worship", cap: "Worship Encounter" },
    { img: "assets/img/gallery-7.svg", cat: "Sunday Services", cap: "Family Service" },
    { img: "assets/img/gallery-8.svg", cat: "Conferences", cap: "Leaders Summit" },
  ];

  const testimonials = [
    { quote: "JCC became my family the moment I walked in. The worship and the Word transformed my life completely.", name: "Grace Kamau", role: "Member since 2019", img: "assets/img/avatar-1.svg" },
    { quote: "Through the prayer ministry I found healing and hope. This church truly carries the presence of God.", name: "Michael Wanjala", role: "Youth Leader", img: "assets/img/avatar-2.svg" },
    { quote: "My children love their ministry and my marriage has been strengthened. We are home at JCC Kitengela.", name: "Janet Otieno", role: "Member since 2021", img: "assets/img/avatar-3.svg" },
    { quote: "The teaching is deep yet practical. I've grown into leadership I never imagined possible.", name: "Anthony Njoroge", role: "Media Team", img: "assets/img/avatar-4.svg" },
  ];

  const iconSvg = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" fill="currentColor"/></svg>`;

  /* ---------------- Render: Ministries ---------------- */
  function renderMinistries() {
    const grid = $("#ministries-grid");
    if (!grid) return;
    grid.innerHTML = ministries.map((m, i) => `
      <article class="ministry reveal" data-reveal="fade-up" data-delay="${(i % 4) * 70}">
        <div class="ministry__icon">${iconSvg(m.icon)}</div>
        <h3>${m.title}</h3>
        <p>${m.desc}</p>
      </article>`).join("");
  }

  /* ---------------- Render: Sermons ---------------- */
  function renderSermons() {
    const grid = $("#sermons-grid");
    if (!grid) return;
    grid.innerHTML = sermons.map((s, i) => `
      <article class="sermon reveal" data-reveal="fade-up" data-delay="${i * 90}">
        <div class="sermon__thumb">
          <img src="${s.img}" alt="Sermon thumbnail: ${s.title}" loading="lazy" width="800" height="500" />
          <div class="sermon__play"><span>${iconSvg("M8 5v14l11-7z")}</span></div>
        </div>
        <div class="sermon__body">
          <div class="sermon__meta"><span>${s.pastor}</span><span>${s.date}</span></div>
          <h3>${s.title}</h3>
          <div class="sermon__actions">
            <button class="chip chip--accent">${iconSvg("M8 5v14l11-7z")} Watch</button>
            <button class="chip">${iconSvg("M12 3a3 3 0 013 3v6a3 3 0 01-6 0V6a3 3 0 013-3zm7 9a7 7 0 01-6 6.9V21h-2v-2.1A7 7 0 015 12h2a5 5 0 0010 0h2z")} Listen</button>
            <button class="chip">${iconSvg("M12 3v10.6l3.3-3.3 1.4 1.4L12 17.4 6.3 11.7l1.4-1.4L11 13.6V3h1zM5 19h14v2H5z")} Notes</button>
          </div>
        </div>
      </article>`).join("");
  }

  /* ---------------- Render: Events + countdown ---------------- */
  function renderEvents() {
    const grid = $("#events-grid");
    if (!grid) return;
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    grid.innerHTML = events.map((e, i) => `
      <article class="event reveal" data-reveal="fade-up" data-delay="${i * 90}">
        <div class="event__poster">
          <img src="${e.img}" alt="Event poster: ${e.name}" loading="lazy" width="800" height="1000" />
          <div class="event__date-badge"><strong>${e.date.getDate()}</strong><span>${months[e.date.getMonth()]}</span></div>
        </div>
        <div class="event__body">
          <h3>${e.name}</h3>
          <div class="event__info">
            <div>${iconSvg("M7 2v2h10V2h2v2h1a2 2 0 012 2v13a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V2h2zm13 7H4v10h16V9z")}<span>${e.date.toDateString()}</span></div>
            <div>${iconSvg("M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6l5 3 1-1.7-4-2.3V7z")}<span>${e.time}</span></div>
            <div>${iconSvg("M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z")}<span>${e.venue}</span></div>
          </div>
          <div class="countdown" data-deadline="${e.date.getTime()}">
            <div class="countdown__unit"><span class="countdown__num" data-unit="d">0</span><span class="countdown__lbl">Days</span></div>
            <div class="countdown__unit"><span class="countdown__num" data-unit="h">0</span><span class="countdown__lbl">Hrs</span></div>
            <div class="countdown__unit"><span class="countdown__num" data-unit="m">0</span><span class="countdown__lbl">Min</span></div>
            <div class="countdown__unit"><span class="countdown__num" data-unit="s">0</span><span class="countdown__lbl">Sec</span></div>
          </div>
          <button class="btn btn--accent btn--sm btn--ripple">Register</button>
        </div>
      </article>`).join("");
  }

  function tickCountdowns() {
    const nowT = Date.now();
    $$(".countdown").forEach((cd) => {
      let diff = Math.max(0, Number(cd.dataset.deadline) - nowT);
      const d = Math.floor(diff / DAY); diff -= d * DAY;
      const h = Math.floor(diff / 3.6e6); diff -= h * 3.6e6;
      const m = Math.floor(diff / 6e4); diff -= m * 6e4;
      const s = Math.floor(diff / 1e3);
      const set = (u, v) => { const el = cd.querySelector(`[data-unit="${u}"]`); if (el) el.textContent = String(v).padStart(2, "0"); };
      set("d", d); set("h", h); set("m", m); set("s", s);
    });
  }

  /* ---------------- Render: Gallery + filters ---------------- */
  function renderGallery() {
    const grid = $("#gallery-grid");
    const filters = $("#gallery-filters");
    if (!grid || !filters) return;
    const cats = ["All", ...new Set(gallery.map((g) => g.cat))];
    filters.innerHTML = cats.map((c, i) => `<button class="gallery__filter ${i === 0 ? "is-active" : ""}" data-filter="${c}" role="tab" aria-selected="${i === 0}">${c}</button>`).join("");
    grid.innerHTML = gallery.map((g, i) => `
      <figure class="gallery__item reveal" data-reveal="zoom" data-cat="${g.cat}" data-index="${i}" tabindex="0" role="button" aria-label="View ${g.cap}">
        <img src="${g.img}" alt="${g.cap}" loading="lazy" />
        <figcaption class="gallery__cap">${g.cap}</figcaption>
      </figure>`).join("");

    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".gallery__filter");
      if (!btn) return;
      $$(".gallery__filter", filters).forEach((b) => { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("is-active"); btn.setAttribute("aria-selected", "true");
      const f = btn.dataset.filter;
      $$(".gallery__item", grid).forEach((item) => {
        item.classList.toggle("is-hidden", f !== "All" && item.dataset.cat !== f);
      });
    });

    initLightbox(grid);
  }

  /* ---------------- Lightbox ---------------- */
  function initLightbox(grid) {
    const lb = $("#lightbox");
    const img = $("#lightbox-img");
    const cap = $("#lightbox-caption");
    let current = 0;
    const visible = () => $$(".gallery__item", grid).filter((i) => !i.classList.contains("is-hidden"));

    function open(index) {
      const items = visible();
      current = index;
      const item = items[current];
      if (!item) return;
      const idx = Number(item.dataset.index);
      img.src = gallery[idx].img;
      img.alt = gallery[idx].cap;
      cap.textContent = gallery[idx].cap;
      lb.classList.add("is-open");
      lb.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function close() { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
    function step(dir) { const items = visible(); current = (current + dir + items.length) % items.length; open(current); }

    grid.addEventListener("click", (e) => {
      const item = e.target.closest(".gallery__item");
      if (!item) return;
      open(visible().indexOf(item));
    });
    grid.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("gallery__item")) {
        e.preventDefault(); open(visible().indexOf(e.target));
      }
    });
    $(".lightbox__close").addEventListener("click", close);
    $(".lightbox__nav--prev").addEventListener("click", () => step(-1));
    $(".lightbox__nav--next").addEventListener("click", () => step(1));
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }

  /* ---------------- Testimonials slider ---------------- */
  function renderTestimonials() {
    const track = $("#testimonial-track");
    const dotsWrap = $("#testi-dots");
    if (!track) return;
    track.innerHTML = testimonials.map((t) => `
      <div class="testimonial">
        <div class="testimonial__inner glass">
          <p class="testimonial__quote">${t.quote}</p>
          <div class="testimonial__person">
            <img src="${t.img}" alt="Photo of ${t.name}" loading="lazy" width="56" height="56" />
            <div>
              <div class="testimonial__name">${t.name}</div>
              <div class="testimonial__role">${t.role}</div>
            </div>
          </div>
        </div>
      </div>`).join("");
    dotsWrap.innerHTML = testimonials.map((_, i) => `<button class="slider__dot ${i === 0 ? "is-active" : ""}" data-dot="${i}" role="tab" aria-label="Go to testimonial ${i + 1}"></button>`).join("");

    let index = 0;
    let timer;
    const total = testimonials.length;
    const go = (i) => {
      index = (i + total) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
      $$(".slider__dot", dotsWrap).forEach((d, di) => d.classList.toggle("is-active", di === index));
    };
    const next = () => go(index + 1);
    const start = () => { if (prefersReduced) return; stop(); timer = setInterval(next, 5000); };
    const stop = () => clearInterval(timer);

    $("#testi-next").addEventListener("click", () => { next(); start(); });
    $("#testi-prev").addEventListener("click", () => { go(index - 1); start(); });
    dotsWrap.addEventListener("click", (e) => { const d = e.target.closest(".slider__dot"); if (d) { go(Number(d.dataset.dot)); start(); } });
    const slider = $("#testimonial-slider");
    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    start();
  }

  /* ---------------- Navbar scroll + mobile menu + active links ---------------- */
  function initNav() {
    const nav = $("#navbar");
    const toggle = $("#nav-toggle");
    const menu = $("#nav-menu");
    const links = $$('#nav-menu a[href^="#"]');

    const onScroll = () => { nav.classList.toggle("is-scrolled", window.scrollY > 40); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const closeMenu = () => { menu.classList.remove("is-open"); toggle.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; };
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

    // Scrollspy
    const sections = links.map((a) => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const id = en.target.id;
          links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------------- Scroll reveal + animated counters ---------------- */
  function initReveal() {
    const items = $$(".reveal");
    if (prefersReduced) { items.forEach((i) => i.classList.add("is-visible")); runCounters(); return; }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const el = en.target;
          const delay = Number(el.dataset.delay || 0);
          setTimeout(() => el.classList.add("is-visible"), delay);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    items.forEach((i) => io.observe(i));

    // Counters
    const statWrap = $("#stats");
    if (statWrap) {
      const cio = new IntersectionObserver((entries, obs) => {
        entries.forEach((en) => { if (en.isIntersecting) { runCounters(); obs.disconnect(); } });
      }, { threshold: 0.4 });
      cio.observe(statWrap);
    }
  }

  function runCounters() {
    $$(".stat__num").forEach((el) => {
      const target = Number(el.dataset.count || 0);
      const suffix = el.dataset.suffix || "";
      const dur = 1600;
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString() + (p === 1 ? suffix : "");
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  /* ---------------- Hero particle canvas ---------------- */
  function initParticles() {
    const canvas = $("#hero-canvas");
    if (!canvas || prefersReduced) return;
    const ctx = canvas.getContext("2d");
    let w, h, particles, raf;
    const COUNT = () => Math.min(90, Math.floor(window.innerWidth / 16));

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function make() {
      particles = Array.from({ length: COUNT() }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        a: Math.random() * 0.5 + 0.1,
        red: Math.random() > 0.6,
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.red ? `rgba(230,57,70,${p.a})` : `rgba(255,255,255,${p.a * 0.7})`;
        ctx.shadowBlur = p.red ? 8 : 0;
        ctx.shadowColor = "rgba(230,57,70,0.6)";
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      // link nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = dx * dx + dy * dy;
          if (dist < 12000) {
            ctx.strokeStyle = `rgba(230,57,70,${0.10 * (1 - dist / 12000)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    function boot() { resize(); make(); cancelAnimationFrame(raf); draw(); }
    boot();
    let rt;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(boot, 200); });
  }

  /* ---------------- Ripple effect ---------------- */
  function initRipple() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--ripple");
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const span = document.createElement("span");
      span.className = "ripple";
      span.style.width = span.style.height = size + "px";
      span.style.left = e.clientX - rect.left - size / 2 + "px";
      span.style.top = e.clientY - rect.top - size / 2 + "px";
      btn.appendChild(span);
      setTimeout(() => span.remove(), 650);
    });
  }

  /* ---------------- Modal ---------------- */
  function initModal() {
    let lastFocus;
    const open = (id) => {
      const modal = document.getElementById(id);
      if (!modal) return;
      lastFocus = document.activeElement;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      const c = modal.querySelector(".modal__close"); if (c) c.focus();
    };
    const close = (modal) => { modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); };
    $$("[data-modal-open]").forEach((b) => b.addEventListener("click", () => open(b.dataset.modalOpen)));
    $$(".modal").forEach((modal) => {
      modal.addEventListener("click", (e) => { if (e.target.hasAttribute("data-modal-close")) close(modal); });
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") $$(".modal.is-open").forEach(close); });
  }

  /* ---------------- Copy buttons (giving) ---------------- */
  function initCopy() {
    $$(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const text = btn.dataset.copy;
        try {
          if (navigator.clipboard) await navigator.clipboard.writeText(text);
          else { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
          const orig = btn.textContent;
          btn.textContent = "Copied!"; btn.classList.add("is-copied");
          setTimeout(() => { btn.textContent = orig; btn.classList.remove("is-copied"); }, 1600);
        } catch (_) { /* no-op */ }
      });
    });
  }

  /* ---------------- Forms (client-side, simulated submit) ---------------- */
  function initForms() {
    const validateField = (field) => {
      const input = field.querySelector("input, textarea");
      if (!input) return true;
      let ok = input.value.trim() !== "" || !input.required;
      if (ok && input.type === "email" && input.value) ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
      field.classList.toggle("is-invalid", !ok);
      return ok;
    };

    const handle = (form, okMsg) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const fields = $$(".form__field", form);
        let valid = true;
        fields.forEach((f) => { if (!validateField(f)) valid = false; });
        const status = form.querySelector(".form__status");
        const btn = form.querySelector(".form__submit") || form.querySelector("button[type=submit]");
        if (!valid) { if (status) { status.textContent = "Please fill in the required fields correctly."; status.className = "form__status is-err"; } return; }
        if (btn) btn.classList.add("is-loading");
        if (status) { status.textContent = ""; status.className = "form__status"; }
        setTimeout(() => {
          if (btn) btn.classList.remove("is-loading");
          if (status) { status.textContent = okMsg; status.className = "form__status is-ok"; }
          form.reset();
        }, 1400);
      });
      $$(".form__field input, .form__field textarea", form).forEach((input) => {
        input.addEventListener("input", () => input.closest(".form__field").classList.remove("is-invalid"));
      });
    };

    const prayer = $("#prayer-form"); if (prayer) handle(prayer, "Thank you — your prayer request has been received. We are praying with you.");
    const contact = $("#contact-form"); if (contact) handle(contact, "Thank you for reaching out! We'll be in touch soon.");

    const news = $("#newsletter-form");
    if (news) {
      news.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = news.querySelector("input");
        const status = news.parentElement.querySelector(".form__status");
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
        if (status) { status.textContent = ok ? "You're subscribed. Welcome to the family!" : "Please enter a valid email."; status.className = "form__status " + (ok ? "is-ok" : "is-err"); }
        if (ok) news.reset();
      });
    }
  }

  /* ---------------- Back to top ---------------- */
  function initToTop() {
    const btn = $("#to-top");
    if (!btn) return;
    window.addEventListener("scroll", () => { btn.classList.toggle("is-visible", window.scrollY > 600); }, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" }));
  }

  /* ---------------- Loader ---------------- */
  function initLoader() {
    const loader = $("#loader");
    if (!loader) return;
    const hide = () => setTimeout(() => loader.classList.add("is-hidden"), 350);
    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide);
    // Fallback
    setTimeout(() => loader.classList.add("is-hidden"), 3500);
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    $("#year").textContent = new Date().getFullYear();
    renderMinistries();
    renderSermons();
    renderEvents();
    renderGallery();
    renderTestimonials();
    initNav();
    initReveal();
    initParticles();
    initRipple();
    initModal();
    initCopy();
    initForms();
    initToTop();
    initLoader();
    tickCountdowns();
    setInterval(tickCountdowns, 1000);
  });
})();
