function getImages(item) {
  return item.images && item.images.length ? item.images : [item.image];
}

// รูป preview ที่โชว์ในการ์ดหน้ารวมผลงาน
// ถ้าตั้ง item.cover ไว้ จะใช้รูปนั้นแทน ถ้าไม่ตั้งจะ fallback ไปใช้รูปแรกในลิสต์เหมือนเดิม
function getThumb(item) {
  return item.cover || getImages(item)[0];
}

let currentLang = "en";

// อ่านค่า title/tag/desc ตามภาษาปัจจุบัน — ถ้ามี titleTh/tagTh/descTh ก็ใช้ตอน TH
// ถ้าไม่มี (ยังไม่ได้แปล) จะ fallback ไปใช้เวอร์ชันอังกฤษเดิม ไม่ error/ไม่ว่างเปล่า
function localized(item, field) {
  const thField = field + "Th";
  if (currentLang === "th" && item[thField]) return item[thField];
  return item[field];
}

function renderGrid(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map((item, i) => {
    const thumb = getThumb(item);
    const title = localized(item, "title");
    const tag = localized(item, "tag");
    const desc = localized(item, "desc");
    const replaceLabel = currentLang === "th" ? `แทนที่รูปนี้ด้วย<br>${thumb}` : `Replace this image with:<br>${thumb}`;
    return `
    <article class="card" data-index="${i}" data-container="${containerId}">
      <div class="card__media">
        <img src="${thumb}" alt="${title}" loading="lazy"
             onerror="this.closest('.card__media').classList.add('card__media--empty'); this.remove();">
        <span class="card__placeholder-label">${replaceLabel}</span>
      </div>
      <div class="card__body">
        <span class="card__tag">${tag}</span>
        <h3 class="card__title">${title}</h3>
        <p class="card__desc">${desc}</p>
      </div>
    </article>
  `;
  }).join("");
}

// แถบเครดิตโลโก้แอป — โชว์แค่โลโก้ + ชื่อ ไม่มีปุ่มลิงก์สโตร์
function renderAppLogos(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(item => `
    <div class="app-logo" title="${item.name}">
      <span class="app-logo__media">
        <img src="${item.logo}" alt="${item.name}" loading="lazy"
             onerror="this.closest('.app-logo__media').classList.add('app-logo__media--empty'); this.remove();">
        <span class="app-logo__placeholder-label">${item.logo}</span>
      </span>
      <span class="app-logo__name">${item.name}</span>
    </div>
  `).join("");
}

// เรียกใหม่ทุกครั้งที่สลับภาษา เพื่อให้การ์ดผลงานอัปเดตข้อความตาม currentLang
function renderAllPortfolio() {
  renderGrid("gameMapsGrid", gameMapsData);
  renderGrid("gameUiGrid", gameUiData);
  renderGrid("asoGrid", asoData);
  renderAppLogos("appLogosGrid", appLogosData);
}

// ---------- Language toggle (EN default, TH สำรอง) ----------
// ทุก element ที่มี data-th จะสลับข้อความ EN <-> TH ได้
// data-th-aria ใช้กับ aria-label โดยเฉพาะ (ปุ่มที่ไม่มีข้อความให้เห็น เช่น hamburger menu)
function initLangToggle() {
  const toggleBtn = document.getElementById("langToggle");
  const textEls = document.querySelectorAll("[data-th]");
  const ariaEls = document.querySelectorAll("[data-th-aria]");

  // เก็บข้อความอังกฤษต้นฉบับไว้ก่อนสลับครั้งแรก
  textEls.forEach(el => { if (el.dataset.en === undefined) el.dataset.en = el.innerHTML; });
  ariaEls.forEach(el => { if (el.dataset.enAria === undefined) el.dataset.enAria = el.getAttribute("aria-label") || ""; });

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    textEls.forEach(el => { el.innerHTML = lang === "th" ? el.dataset.th : el.dataset.en; });
    ariaEls.forEach(el => { el.setAttribute("aria-label", lang === "th" ? el.dataset.thAria : el.dataset.enAria); });
    if (toggleBtn) {
      toggleBtn.textContent = lang === "th" ? "EN" : "TH";
      toggleBtn.setAttribute("aria-label", lang === "th" ? "Switch to English" : "สลับเป็นภาษาไทย");
    }
    localStorage.setItem("lang", lang);
    renderAllPortfolio();
  }

  const saved = localStorage.getItem("lang");
  applyLang(saved === "th" ? "th" : "en");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => applyLang(currentLang === "th" ? "en" : "th"));
  }
}
initLangToggle();

// ข้อความ error รูปหายใน lightbox แบบสองภาษา
function missingImageText(src) {
  return currentLang === "th" ? `ยังไม่มีรูปภาพสำหรับ: ${src}` : `Image not available: ${src}`;
}

// mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-active");
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.classList.remove("is-active");
  });
});

// shrink nav on scroll
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("nav--scrolled", window.scrollY > 20);
});

// lightbox
const dataMap = { gameMapsGrid: gameMapsData, gameUiGrid: gameUiData, asoGrid: asoData };
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightboxContent");
const lightboxClose = document.getElementById("lightboxClose");

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightboxContent.scrollTop = 0;
}

document.querySelectorAll(".grid").forEach(grid => {
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const item = dataMap[card.dataset.container][card.dataset.index];
    const title = localized(item, "title");
    const tag = localized(item, "tag");
    const desc = localized(item, "desc");
    const imagesHtml = getImages(item).map(src => `
      <img class="lightbox__image" src="${src}" alt="${title}"
           onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'lightbox__empty', innerText: missingImageText('${src}')}))">
    `).join("");
    lightboxContent.innerHTML = `
      ${imagesHtml}
      <div class="lightbox__caption">
        <span class="card__tag">${tag}</span>
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
    `;
    lightbox.classList.add("is-open");
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
