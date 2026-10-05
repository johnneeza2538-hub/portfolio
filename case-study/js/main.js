// ---------- Case Study page logic ----------
// โครงสร้างคล้ายเว็บหลัก (js/main.js) แต่การ์ดโชว์แค่สรุปสั้น ๆ
// คลิกแล้วเปิด lightbox แสดง Overview / Problem / Approach / Result แบบเต็ม

let currentLang = "en";

const sectionLabels = {
  en: { overview: "Overview", problem: "Problem", approach: "Approach", result: "Result", draft: "Draft — content to be refined" },
  th: { overview: "ภาพรวม", problem: "ปัญหา", approach: "แนวทาง/ขั้นตอน", result: "ผลลัพธ์", draft: "ฉบับร่าง — รอแก้ไขเนื้อหา" },
};

// อ่านค่าฟิลด์ข้อความตามภาษาปัจจุบัน (เหมือน localized() ของเว็บหลัก)
function localized(item, field) {
  const thField = field + "Th";
  if (currentLang === "th" && item[thField]) return item[thField];
  return item[field];
}

// อ่านค่าฟิลด์ที่เป็น array (เช่น approach) ตามภาษาปัจจุบัน
function localizedList(item, field) {
  const thField = field + "Th";
  if (currentLang === "th" && item[thField]) return item[thField];
  return item[field] || [];
}

function renderCaseGrid(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map((item, i) => {
    const cover = item.cover;
    const title = localized(item, "title");
    const tag = localized(item, "tag");
    const summary = localized(item, "summary");
    const replaceLabel = currentLang === "th" ? `แทนที่รูปนี้ด้วย<br>${cover}` : `Replace this image with:<br>${cover}`;
    const draftBadge = item.draft
      ? `<span class="case-draft-badge">${sectionLabels[currentLang].draft}</span>`
      : "";
    return `
    <article class="card" data-index="${i}" data-container="${containerId}">
      <div class="card__media">
        <img src="${cover}" alt="${title}" loading="lazy"
             onerror="this.closest('.card__media').classList.add('card__media--empty'); this.remove();">
        <span class="card__placeholder-label">${replaceLabel}</span>
      </div>
      <div class="card__body">
        ${draftBadge}
        <span class="card__tag">${tag}</span>
        <h3 class="card__title">${title}</h3>
        <p class="card__desc">${summary}</p>
      </div>
    </article>
  `;
  }).join("");
}

function renderAllCaseStudies() {
  renderCaseGrid("caseGameMapsGrid", caseGameMapsData);
  renderCaseGrid("caseGameUiGrid", caseGameUiData);
  renderCaseGrid("caseAsoGrid", caseAsoData);
}

// ---------- Language toggle (เหมือนเว็บหลัก) ----------
function initLangToggle() {
  const toggleBtn = document.getElementById("langToggle");
  const textEls = document.querySelectorAll("[data-th]");
  const ariaEls = document.querySelectorAll("[data-th-aria]");

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
    renderAllCaseStudies();
  }

  const saved = localStorage.getItem("lang");
  applyLang(saved === "th" ? "th" : "en");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => applyLang(currentLang === "th" ? "en" : "th"));
  }
}
initLangToggle();

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

// lightbox — โชว์ case study แบบเต็ม (Overview / Problem / Approach / Result)
const dataMap = {
  caseGameMapsGrid: caseGameMapsData,
  caseGameUiGrid: caseGameUiData,
  caseAsoGrid: caseAsoData,
};
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightboxContent");
const lightboxClose = document.getElementById("lightboxClose");

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightboxContent.scrollTop = 0;
}

function renderCaseSection(labelKey, bodyHtml) {
  if (!bodyHtml) return "";
  return `
    <div class="case-section">
      <h4>${sectionLabels[currentLang][labelKey]}</h4>
      ${bodyHtml}
    </div>
  `;
}

document.querySelectorAll(".grid").forEach(grid => {
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const item = dataMap[card.dataset.container][card.dataset.index];
    const title = localized(item, "title");
    const tag = localized(item, "tag");
    const summary = localized(item, "summary");
    const cover = item.cover;

    const imageHtml = `
      <img class="lightbox__image" src="${cover}" alt="${title}"
           onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'lightbox__empty', innerText: missingImageText('${cover}')}))">
    `;

    const approachList = localizedList(item, "approach");
    const approachHtml = approachList.length
      ? `<ol class="case-steps">${approachList.map(step => `<li>${step}</li>`).join("")}</ol>`
      : "";

    const draftBadge = item.draft
      ? `<span class="case-draft-badge">${sectionLabels[currentLang].draft}</span>`
      : "";

    lightboxContent.innerHTML = `
      ${imageHtml}
      <div class="lightbox__caption">
        ${draftBadge}
        <span class="card__tag">${tag}</span>
        <h3>${title}</h3>
        <p class="case-summary">${summary}</p>
        ${renderCaseSection("overview", `<p>${localized(item, "overview") || ""}</p>`)}
        ${renderCaseSection("problem", `<p>${localized(item, "problem") || ""}</p>`)}
        ${renderCaseSection("approach", approachHtml)}
        ${renderCaseSection("result", `<p>${localized(item, "result") || ""}</p>`)}
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
