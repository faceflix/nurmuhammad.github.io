document.addEventListener("DOMContentLoaded", () => {
const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");const i18n = {
  en: {
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_about: "About",
    nav_contact: "Contact",
    hero_badge: "Software Engineering Student",
    hero_hi: "Hi, I'm",
    hero_sub: "I build clean web apps and practical tools. Here are my projects, skills, and how to contact me.",
    hero_btn_projects: "View projects",
    hero_btn_contact: "Contact me",
    currently_title: "Currently",
    currently_learning: "Learning: React, APIs, SQL",
    currently_building: "Building: UniSchedule app",
    currently_goal: "Goal: Internship / Junior role",
    currently_status: "Available for projects",
    projects_title: "Projects",
    projects_sub: "You need reality, get these then!",
    project1_title: "UniSchedule",
    project1_desc: "Curriculum + class schedule web app (login-only) with admin management.",
    project2_title: "Telegram AI Bot Tool",
    project2_desc: "A bot that detects AI text and humanizes it.",
    project3_title: "Portfolio Website",
    project3_desc: "Fast, responsive portfolio with GitHub Pages deployment.",
    skills_title: "Skills",
    skills_sub: "Simple and honest.",
    about_title: "About",
    about_body: "I'm a Software Engineering student based in Tashkent. I enjoy building practical apps and learning modern web development. I am fluent in English and pursuing international opportunities.",
    contact_title: "Contact",
    contact_email_title: "Email",
    contact_location_title: "Location",
    contact_location_value: "Tashkent, Uzbekistan",
    form_name: "Name",
    form_name_ph: "Your name",
    form_message: "Message",
    form_msg_ph: "Write a short message...",
    copy_btn: "Copy message",
    copy_copied: "Copied!",
    copy_failed: "Copy failed",
    form_hint: "This form doesn't send messages. It copies text so you can paste into email/DM.",
    back_top: "Back to top",
    ielts_title: "IELTS Certificate",
    ielts_sub: "View or download my IELTS certificate.",
    ielts_score_title: "Score",
    ielts_band: "Overall Band",
    ielts_open: "Open PDF",
    ielts_download: "Download",
    ielts_note: "If the file doesn't open, upload your PDF as 'ielts.pdf' to the same folder."
  },
  uz: {
    nav_projects: "Loyihalar",
    nav_skills: "Konikmalar",
    nav_about: "Men haqimda",
    nav_contact: "Aloqa",
    hero_badge: "Software Engineering talabasi",
    hero_hi: "Salom, men",
    hero_sub: "Men toza web ilovalar va amaliy vositalar yarataman. Quyida loyihalarim, konikmalarim va boglanish usullari bor.",
    hero_btn_projects: "Loyihalarni korish",
    hero_btn_contact: "Boglanish",
    currently_title: "Hozir",
    currently_learning: "Organayapman: React, API, SQL",
    currently_building: "Yasayapman: UniSchedule ilovasi",
    currently_goal: "Maqsad: Internship / Junior rol",
    currently_status: "Loyihalar uchun ochiqman",
    projects_title: "Loyihalar",
    projects_sub: "Eng real ishlarim quyida.",
    project1_title: "UniSchedule",
    project1_desc: "Oquv reja va dars jadvali uchun web ilova (login bilan), admin boshqaruvi bilan.",
    project2_title: "Telegram AI Bot Tool",
    project2_desc: "AI matnni aniqlaydigan va yaxshilaydigan bot.",
    project3_title: "Portfolio Website",
    project3_desc: "Tezkor va responsive portfolio, GitHub Pages orqali joylangan.",
    skills_title: "Konikmalar",
    skills_sub: "Sodda va aniq.",
    about_title: "Men haqimda",
    about_body: "Men Toshkentda yashovchi Software Engineering talabasiman. Amaliy ilovalar yaratishni va zamonaviy web texnologiyalarni organishni yoqtiraman. Ingliz tilini yaxshi bilaman va xalqaro imkoniyatlarni izlayman.",
    contact_title: "Aloqa",
    contact_email_title: "Email",
    contact_location_title: "Manzil",
    contact_location_value: "Toshkent, Ozbekiston",
    form_name: "Ism",
    form_name_ph: "Ismingiz",
    form_message: "Xabar",
    form_msg_ph: "Qisqa xabar yozing...",
    copy_btn: "Xabarni nusxalash",
    copy_copied: "Nusxalandi!",
    copy_failed: "Nusxalashda xato",
    form_hint: "Bu forma xabar yubormaydi. Matnni nusxalab, email/DM ga yuborishingiz mumkin.",
    back_top: "Yuqoriga",
    ielts_title: "IELTS Sertifikat",
    ielts_sub: "IELTS sertifikatimni koring yoki yuklab oling.",
    ielts_score_title: "Natija",
    ielts_band: "Umumiy Band",
    ielts_open: "PDFni ochish",
    ielts_download: "Yuklab olish",
    ielts_note: "Agar fayl ochilmasa, PDFni shu papkaga 'ielts.pdf' nomi bilan joylang."
  }
};

let currentLang = "en";

function t(key) {
  const dict = i18n[currentLang] || i18n.en;
  return dict[key] || i18n.en[key] || "";
}

function setText(selector, key) {
  const el = document.querySelector(selector);
  if (el) el.textContent = t(key);
}

function setPlaceholder(selector, key) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("placeholder", t(key));
}

function setHeroGreeting() {
  const h1 = document.querySelector(".hero-text h1");
  if (!h1) return;

  const blurName = h1.querySelector(".blur-animate");
  if (!blurName) return;

  const greetNode = Array.from(h1.childNodes).find((node) => {
    if (node.nodeType !== Node.TEXT_NODE) return false;
    const content = (node.nodeValue || "").trim();
    return content.length > 0 && !content.includes(".");
  });

  if (greetNode) {
    greetNode.nodeValue = ` ${t("hero_hi")} `;
    return;
  }

  const greeting = document.createElement("span");
  greeting.textContent = `${t("hero_hi")} `;
  h1.insertBefore(greeting, blurName);
}

function applyLanguage(lang) {
  currentLang = i18n[lang] ? lang : "en";
  localStorage.setItem("lang", currentLang);
  document.documentElement.lang = currentLang;

  const enBtn = document.getElementById("langEn");
  const uzBtn = document.getElementById("langUz");
  if (enBtn && uzBtn) {
    enBtn.classList.toggle("active", currentLang === "en");
    uzBtn.classList.toggle("active", currentLang === "uz");
  }

  setText("#nav a:nth-child(1)", "nav_projects");
  setText("#nav a:nth-child(2)", "nav_skills");
  setText("#nav a:nth-child(3)", "nav_about");
  setText("#nav a:nth-child(4)", "nav_contact");

  setText(".badge", "hero_badge");
  setHeroGreeting();
  setText(".hero-text .subtitle", "hero_sub");
  setText(".cta .btn.primary", "hero_btn_projects");
  setText(".cta .btn:not(.primary)", "hero_btn_contact");

  setText(".hero-card h3", "currently_title");
  setText(".hero-card .list li:nth-child(1)", "currently_learning");
  setText(".hero-card .list li:nth-child(2)", "currently_building");
  setText(".hero-card .list li:nth-child(3)", "currently_goal");
  setText(".hero-card .status span:last-child", "currently_status");

  setText("#projects .section-head h2", "projects_title");
  setText("#projects .section-head p", "projects_sub");
  setText("#projects .project:nth-of-type(1) h3", "project1_title");
  setText("#projects .project:nth-of-type(1) p", "project1_desc");
  setText("#projects .project:nth-of-type(2) h3", "project2_title");
  setText("#projects .project:nth-of-type(2) p", "project2_desc");
  setText("#projects .project:nth-of-type(3) h3", "project3_title");
  setText("#projects .project:nth-of-type(3) p", "project3_desc");

  setText("#skills .section-head h2", "skills_title");
  setText("#skills .section-head p", "skills_sub");
  setText("#about .section-head h2", "about_title");
  setText("#about .card p", "about_body");

  setText("#contact .section-head h2", "contact_title");
  setText("#contact .contact-grid > .card h3:nth-of-type(1)", "contact_email_title");
  setText("#contact .contact-grid > .card h3:nth-of-type(2)", "contact_location_title");
  setText("#contact .contact-grid > .card p:last-of-type", "contact_location_value");

  setText("#contact .form label:nth-of-type(1) span", "form_name");
  setPlaceholder("#name", "form_name_ph");
  setText("#contact .form label:nth-of-type(2) span", "form_message");
  setPlaceholder("#msg", "form_msg_ph");

  setText("#copyBtn", "copy_btn");
  setText("#contact .form .hint", "form_hint");
  setText(".footer-inner a", "back_top");

  setText("#ielts .section-head h2", "ielts_title");
  setText("#ielts .section-head p", "ielts_sub");
  setText("#ielts .card h3", "ielts_score_title");
  setText(".ielts-muted", "ielts_band");
  setText(".ielts-actions .btn.primary", "ielts_open");
  setText(".ielts-actions .btn:not(.primary)", "ielts_download");
  setText("#ielts .hint", "ielts_note");
}

function initBlurAnimatedText() {
  const els = document.querySelectorAll(".blur-animate");
  if (!els.length) return;

  const isCoarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  document.documentElement.classList.toggle("is-touch", Boolean(isCoarsePointer));

  els.forEach((el) => {
    if (el.dataset.initialized === "1") return;

    const text = el.getAttribute("data-text") || el.textContent || "";
    const animateBy = (el.getAttribute("data-animateby") || "words").toLowerCase();
    const direction = (el.getAttribute("data-direction") || "bottom").toLowerCase();
    const delay = Number(el.getAttribute("data-delay") || 90);
    const stepDuration = Number(el.getAttribute("data-stepduration") || 500);

    el.setAttribute("data-direction", direction);
    el.innerHTML = "";

    const parts = animateBy === "letters" ? Array.from(text) : text.split(" ");
    parts.forEach((part, i) => {
      const span = document.createElement("span");
      span.className = "ba-item";
      span.style.transitionDuration = `${stepDuration}ms`;
      span.style.transitionDelay = `${i * delay}ms`;
      span.textContent = animateBy === "letters" ? (part === " " ? "\u00A0" : part) : `${part}${i === parts.length - 1 ? "" : " "}`;
      el.appendChild(span);
    });

    el.dataset.initialized = "1";

    const show = () => el.classList.add("is-visible");

    if (!window.IntersectionObserver || isCoarsePointer) {
      setTimeout(show, 60);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  if (!window.IntersectionObserver) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => io.observe(el));
}

function initBlobBackground() {
  const cursor = document.getElementById("blobCursor");
  if (!cursor) return;

  const blobs = Array.from(cursor.querySelectorAll(".blob"));
  if (!blobs.length) return;

  const fills = [
    "radial-gradient(circle at 30% 30%, rgba(110,231,255,.9), transparent 60%)",
    "radial-gradient(circle at 30% 30%, rgba(167,139,250,.9), transparent 60%)",
    "radial-gradient(circle at 30% 30%, rgba(110,231,255,.9), transparent 60%)"
  ];
  blobs.forEach((blob, i) => {
    blob.style.background = fills[i] || fills[0];
  });

  const isCoarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  if (isCoarsePointer) {
    blobs.forEach((blob, i) => {
      blob.style.opacity = "0.12";
      const x = 20 + i * 30;
      const y = 20 + i * 25;
      blob.style.transform = `translate(${x}vw, ${y}vh)`;
    });
    return;
  }

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  const targets = blobs.map(() => ({ x, y }));
  const current = blobs.map(() => ({ x, y }));

  window.addEventListener("pointermove", (e) => {
    targets[0].x = e.clientX;
    targets[0].y = e.clientY;
  });

  function animate() {
    for (let i = 1; i < targets.length; i += 1) {
      targets[i].x += (targets[i - 1].x - targets[i].x) * 0.12;
      targets[i].y += (targets[i - 1].y - targets[i].y) * 0.12;
    }

    blobs.forEach((blob, i) => {
      const speed = i === 0 ? 0.35 : 0.18;
      current[i].x += (targets[i].x - current[i].x) * speed;
      current[i].y += (targets[i].y - current[i].y) * speed;
      blob.style.transform = `translate(${current[i].x}px, ${current[i].y}px) translate(-50%, -50%)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

function initHeaderMenu() {
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menuBtn");
  if (!nav || !menuBtn) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

function initCopyButton() {
  const copyBtn = document.getElementById("copyBtn");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", async () => {
    const name = (document.getElementById("name")?.value || "").trim();
    const msg = (document.getElementById("msg")?.value || "").trim();

    const text = `${t("form_name")}: ${name || "-"}\n${t("form_message")}: ${msg || "-"}`;

    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = t("copy_copied");
    } catch (err) {
      copyBtn.textContent = t("copy_failed");
    }

    setTimeout(() => {
      copyBtn.textContent = t("copy_btn");
    }, 1200);
  });
}

function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function initLanguageSwitch() {
  const enBtn = document.getElementById("langEn");
  const uzBtn = document.getElementById("langUz");

  const savedLang = localStorage.getItem("lang") || "en";
  applyLanguage(savedLang);

  if (enBtn) enBtn.addEventListener("click", () => applyLanguage("en"));
  if (uzBtn) uzBtn.addEventListener("click", () => applyLanguage("uz"));
}

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initHeaderMenu();
  initBlurAnimatedText();
  initReveal();
  initBlobBackground();
  initLanguageSwitch();
  initCopyButton();
});

  });
});

const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim();
  const msg = document.getElementById("msg").value.trim();
  const text = `Name: ${name || "-"}\nMessage: ${msg || "-"}`;
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy message"), 1200);
  } catch {
    copyBtn.textContent = "Copy failed";
    setTimeout(() => (copyBtn.textContent = "Copy message"), 1200);
  }
});
const isTouch =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0;

if (isTouch) {
  // Optional: keep blobs static or very slow
  blobs.forEach((b) => {
    b.style.opacity = "0.12";
  });
  return;
}

const cursor = document.getElementById("blobCursor");
const blobs = cursor ? Array.from(cursor.querySelectorAll(".blob")) : [];

if (blobs.length) {
  const colors = [
  "radial-gradient(circle at 40% 40%, rgba(110,231,255,.9), transparent 70%)",
  "radial-gradient(circle at 40% 40%, rgba(167,139,250,.9), transparent 70%)",
  "radial-gradient(circle at 40% 40%, rgba(110,231,255,.9), transparent 70%)"
];

blobs.forEach((b, i) => {
  b.style.background = colors[i];
});

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  const targets = blobs.map(() => ({ x, y }));
  const current = blobs.map(() => ({ x, y }));

  window.addEventListener("pointermove", (e) => {
  x = e.clientX;
  y = e.clientY;
  targets[0].x = x;
  targets[0].y = y;
});


  function animate() {
    for (let i = 1; i < targets.length; i++) {
      targets[i].x += (targets[i - 1].x - targets[i].x) * 0.12;
      targets[i].y += (targets[i - 1].y - targets[i].y) * 0.12;
    }

    blobs.forEach((blob, i) => {
      current[i].x += (targets[i].x - current[i].x) * (i === 0 ? 0.35 : 0.18);
      current[i].y += (targets[i].y - current[i].y) * (i === 0 ? 0.35 : 0.18);
      blob.style.transform = `translate(${current[i].x}px, ${current[i].y}px) translate(-50%, -50%)`;
    });

    requestAnimationFrame(animate);
  }
  animate();
}
function initBlurAnimatedText() {
  const els = document.querySelectorAll(".blur-animate");

  els.forEach((el) => {
    const text = el.getAttribute("data-text") || el.textContent || "";
    const animateBy = (el.getAttribute("data-animateby") || "words").toLowerCase();
    const direction = (el.getAttribute("data-direction") || "bottom").toLowerCase();
    const delay = Number(el.getAttribute("data-delay") || 90); // ms between items
    const stepDuration = Number(el.getAttribute("data-stepduration") || 500); // ms per item

    el.setAttribute("data-direction", direction);
    el.innerHTML = "";

    const parts =
      animateBy === "letters"
        ? Array.from(text)
        : text.split(" ");

    parts.forEach((part, i) => {
      const span = document.createElement("span");
      span.className = "ba-item";
      span.style.transitionDuration = `${stepDuration}ms`;
      span.style.transitionDelay = `${i * delay}ms`;

      // Preserve spaces for words mode
      if (animateBy === "words") {
        span.textContent = part + (i === parts.length - 1 ? "" : " ");
      } else {
        span.textContent = part === " " ? "\u00A0" : part;
      }

      el.appendChild(span);
    });

    // Trigger animation when element enters view
    const threshold = 0.1;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
  });
}

initBlurAnimatedText();
document.addEventListener("DOMContentLoaded", () => {
  // ---------- Blur Animated Name ----------
  function initBlurAnimatedText() {
    const els = document.querySelectorAll(".blur-animate");
    els.forEach((el) => {
      const text = el.getAttribute("data-text") || el.textContent || "";
      const animateBy = (el.getAttribute("data-animateby") || "words").toLowerCase();
      const direction = (el.getAttribute("data-direction") || "bottom").toLowerCase();
      const delay = Number(el.getAttribute("data-delay") || 90);
      const stepDuration = Number(el.getAttribute("data-stepduration") || 500);

      el.setAttribute("data-direction", direction);
      el.innerHTML = "";

      const parts = animateBy === "letters" ? Array.from(text) : text.split(" ");

      parts.forEach((part, i) => {
        const span = document.createElement("span");
        span.className = "ba-item";
        span.style.transitionDuration = `${stepDuration}ms`;
        span.style.transitionDelay = `${i * delay}ms`;

        if (animateBy === "words") {
          span.textContent = part + (i === parts.length - 1 ? "" : " ");
        } else {
          span.textContent = part === " " ? "\u00A0" : part;
        }
        el.appendChild(span);
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add("is-visible");
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
    });
  }

  initBlurAnimatedText();

  // ---------- Background Blobs ----------
  const cursor = document.getElementById("blobCursor");
  if (!cursor) return;

  const blobs = Array.from(cursor.querySelectorAll(".blob"));
  if (!blobs.length) return;

  // Nice glow gradients
  const fills = [
    "radial-gradient(circle at 30% 30%, rgba(110,231,255,.9), transparent 60%)",
    "radial-gradient(circle at 30% 30%, rgba(167,139,250,.9), transparent 60%)",
    "radial-gradient(circle at 30% 30%, rgba(110,231,255,.9), transparent 60%)"
  ];
  blobs.forEach((b, i) => (b.style.background = fills[i] || fills[0]));

  // If device is coarse pointer (mostly touch), just lower opacity (DON'T disable)
  const coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  if (coarse) blobs.forEach((b) => (b.style.opacity = "0.12"));

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  const targets = blobs.map(() => ({ x, y }));
  const current = blobs.map(() => ({ x, y }));

  window.addEventListener("pointermove", (e) => {
    x = e.clientX;
    y = e.clientY;
    targets[0].x = x;
    targets[0].y = y;
  });

  function animate() {
    for (let i = 1; i < targets.length; i++) {
      targets[i].x += (targets[i - 1].x - targets[i].x) * 0.12;
      targets[i].y += (targets[i - 1].y - targets[i].y) * 0.12;
    }

    blobs.forEach((blob, i) => {
      const speed = i === 0 ? 0.35 : 0.18;
      current[i].x += (targets[i].x - current[i].x) * speed;
      current[i].y += (targets[i].y - current[i].y) * speed;
      blob.style.transform = `translate(${current[i].x}px, ${current[i].y}px) translate(-50%, -50%)`;
    });

    requestAnimationFrame(animate);
  }
  animate();
});

});
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el) => io.observe(el));
}
initReveal();

