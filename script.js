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
    menuBtn.setAttribute("aria-expanded", "false");
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
