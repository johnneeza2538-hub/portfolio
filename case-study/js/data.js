/*
  ===== วิธีแก้ไขข้อมูล Case Study =====
  แต่ละโปรเจคใช้รูปน้อย (แค่ cover เดียวก็พอ) แต่เน้นเล่ากระบวนการคิดแทน
  โครงสร้างของแต่ละโปรเจค:
  - title / tag / summary: โชว์บนการ์ดหน้ารวม (summary = สรุปสั้น ๆ บรรทัดเดียว)
  - titleTh / tagTh / summaryTh: (ไม่บังคับ) เวอร์ชันภาษาไทย
  - cover: รูปเดียวพอ ใช้เป็นทั้งภาพหน้าการ์ดและภาพหลักตอนเปิดดูรายละเอียด
  - overview / overviewTh: แนวคิดรวม/ภาพรวมของโปรเจค — ทำไมโปรเจคนี้ถึงเกิดขึ้น
  - problem / problemTh: ปัญหา/โจทย์/ข้อจำกัดที่เจอ
  - approach / approachTh: array ของขั้นตอนการทำงาน (จะโชว์เป็น numbered list)
  - result / resultTh: ผลลัพธ์ที่ได้ หรือสิ่งที่เรียนรู้
  - draft: true = ยังเป็นฉบับร่าง/ตัวอย่างโครงร่าง จะมีป้าย "ฉบับร่าง" กำกับไว้ ลบ field นี้ทิ้งเมื่อแก้เนื้อหาจริงแล้ว
  ถ้ายังไม่มีรูป ระบบจะโชว์ placeholder บอกพาธไฟล์ที่ต้องใส่ให้อัตโนมัติเหมือนเว็บหลัก
*/

const caseGameMapsData = [
  {
    title: "Habour Island", tag: "Game Map Design", summary: "Designing a harbor map that reads clearly at a glance, not just looks pretty.",
    titleTh: "Habour Island", tagTh: "งานออกแบบแผนที่เกม", summaryTh: "ออกแบบแผนที่ท่าเรือให้ผู้เล่นอ่านออกได้ในแวบเดียว ไม่ใช่แค่สวยอย่างเดียว",
    cover: "images/game-maps/habour-cover.png",
    overview: "Habour Island is one of the recurring map themes in the game's rotation. Players spend a lot of time scanning the map to find their next move, so the map isn't just scenery — it's a functional layer of the UI.",
    overviewTh: "Habour Island เป็นหนึ่งในธีมแผนที่ที่ใช้หมุนเวียนในเกม ผู้เล่นใช้เวลาส่วนใหญ่มองหาจุดที่จะเล่นต่อไปบนแผนที่ ดังนั้นแผนที่จึงไม่ใช่แค่ฉากสวยงาม แต่เป็นส่วนหนึ่งของ UI ที่ต้องใช้งานได้จริง",
    problem: "Early drafts looked good in isolation but became visually noisy once real game pieces, icons, and UI elements were placed on top. Key landmarks blended into the background instead of standing out.",
    problemTh: "ดราฟต์แรก ๆ ดูดีตอนดูเดี่ยว ๆ แต่พอเอาชิ้นเกมจริง ไอคอน และ UI มาวางทับ กลับดูรกและลายตา จุดสังเกต (landmark) สำคัญกลืนไปกับพื้นหลังแทนที่จะเด่นออกมา",
    approach: [
      "Studied the actual gameplay screen with real UI overlays before finalizing composition, not just the empty map.",
      "Grouped the map into a clear foreground/midground/background value structure so the eye knows where to land first.",
      "Pushed saturation and detail on 2-3 key landmarks only, and simplified everything else so those points stay dominant.",
      "Tested the map at in-game thumbnail size early, since most players only ever see it small.",
    ],
    approachTh: [
      "ศึกษาหน้าจอเกมจริงที่มี UI วางทับก่อนสรุปคอมโพสิชัน ไม่ใช่ดูแค่แผนที่เปล่า ๆ",
      "จัดกลุ่มค่าน้ำหนักภาพ (value) เป็น foreground/midground/background ให้ชัดเจน เพื่อนำสายตาผู้เล่นไปจุดที่ควรมองก่อน",
      "เพิ่มความอิ่มตัวสีและรายละเอียดเฉพาะจุด landmark หลัก 2-3 จุด ส่วนที่เหลือลดทอนลงเพื่อให้จุดหลักเด่นอยู่",
      "ทดสอบแผนที่ที่ขนาดธัมบ์เนลจริงในเกมตั้งแต่ช่วงต้น เพราะผู้เล่นส่วนใหญ่เห็นแผนที่แค่ขนาดเล็ก",
    ],
    result: "The revised map kept its visual richness while staying readable with full UI overlay — used as the reference approach for later map themes.",
    resultTh: "แผนที่ฉบับปรับปรุงยังคงความสวยงามไว้ แต่อ่านง่ายขึ้นแม้มี UI วางทับเต็มจอ กลายเป็นแนวทางอ้างอิงสำหรับธีมแผนที่ชุดต่อ ๆ มา",
    draft: true,
  },
];

const caseGameUiData = [
  {
    title: "Drinkopoly — Modular Character System", tag: "UI Kit", summary: "Building a character system that scales to dozens of variants without redrawing from scratch each time.",
    titleTh: "Drinkopoly — ระบบตัวละครแบบโมดูลาร์", tagTh: "ชุด UI", summaryTh: "สร้างระบบตัวละครที่ขยายเป็นหลายสิบแบบได้ โดยไม่ต้องวาดใหม่ทั้งตัวทุกครั้ง",
    cover: "images/game-ui/drinkopoly-cover.png",
    overview: "Drinkopoly needed a steady stream of character art for events, paywalls, and promotional UI — but a small design team can't hand-illustrate every character from zero on every cycle.",
    overviewTh: "Drinkopoly ต้องการภาพประกอบตัวละครใหม่อยู่เรื่อย ๆ สำหรับอีเวนต์ หน้า Paywall และ UI โปรโมชัน แต่ทีมออกแบบเล็ก ๆ ไม่สามารถวาดตัวละครใหม่ทั้งตัวทุกรอบได้ทัน",
    problem: "The old workflow treated every character as a one-off illustration. That made output slow and made it hard to keep a consistent visual identity across characters made at different times.",
    problemTh: "วิธีทำงานเดิมมองตัวละครแต่ละตัวเป็นภาพประกอบเดี่ยว ๆ แยกกัน ทำให้ทำงานช้า และรักษาความสม่ำเสมอของสไตล์ภาพระหว่างตัวละครที่วาดต่างช่วงเวลากันได้ยาก",
    approach: [
      "Broke a character down into interchangeable vector parts — base body, face expressions, hair, outfit, props.",
      "Standardized proportions and a shared color palette across all parts so any combination stays visually consistent.",
      "Built a small internal library of parts that could be mixed and matched for new characters instead of starting from a blank canvas.",
      "Validated the system by generating a handful of visibly different characters from the same part library.",
    ],
    approachTh: [
      "แยกตัวละครออกเป็นชิ้นส่วนเวกเตอร์ที่สลับกันได้ — ตัว, สีหน้า, ทรงผม, ชุด, พร็อพ",
      "กำหนดสัดส่วนและโทนสีร่วมให้เป็นมาตรฐานเดียวกันทุกชิ้นส่วน เพื่อให้ผสมกันแบบไหนก็ยังดูเป็นชุดเดียวกัน",
      "สร้างคลังชิ้นส่วนขนาดเล็กไว้ใช้ผสมสร้างตัวละครใหม่ แทนที่จะเริ่มจากกระดาษเปล่าทุกครั้ง",
      "ทดสอบระบบด้วยการลองประกอบตัวละครที่หน้าตาต่างกันชัดเจนหลายตัวจากคลังชิ้นส่วนชุดเดียวกัน",
    ],
    result: "New characters could be assembled in a fraction of the time it used to take, while staying on-brand — freeing up time for higher-priority ASO and UI work.",
    resultTh: "ประกอบตัวละครใหม่ได้เร็วขึ้นมากเมื่อเทียบกับเดิม โดยยังคงสไตล์ตรงกับแบรนด์ — ทำให้มีเวลาไปโฟกัสงาน ASO และ UI ที่สำคัญกว่าได้มากขึ้น",
    draft: true,
  },
];

const caseAsoData = [
  {
    title: "Localizing Store Assets Across Markets", tag: "App Store Optimization", summary: "Adapting store screenshots and feature graphics so they still land correctly outside the home market.",
    titleTh: "Localize สื่อหน้าสโตร์ให้ครอบคลุมหลายตลาด", tagTh: "App Store Optimization", summaryTh: "ปรับสกรีนช็อตและ feature graphic ให้ยังสื่อสารได้ถูกต้องเมื่อเจาะตลาดต่างประเทศ",
    cover: "images/aso/localization-cover.png",
    overview: "As the games expanded into new regions, the store pages needed to speak to players who don't read English — but a straight text swap on the existing layout wasn't enough.",
    overviewTh: "เมื่อเกมขยายไปยังตลาดใหม่ ๆ หน้าสโตร์ต้องสื่อสารกับผู้เล่นที่ไม่ได้อ่านภาษาอังกฤษ แต่การแปลข้อความตรง ๆ ลงบนเลย์เอาต์เดิมยังไม่พอ",
    problem: "Text length changes drastically between languages, and some visual metaphors or colors that work well in one market read differently — or don't land at all — in another.",
    problemTh: "ความยาวของข้อความเปลี่ยนไปมากระหว่างแต่ละภาษา และภาพเปรียบเทียบหรือสีบางอย่างที่ใช้ได้ดีในตลาดหนึ่ง อาจสื่อความหมายต่างไป หรือไม่สื่อความหมายเลยในอีกตลาดหนึ่ง",
    approach: [
      "Rebuilt screenshot layouts with flexible text zones instead of fixed-width captions, so translated copy wouldn't overflow or get truncated.",
      "Checked each target market's store conventions (e.g. what visuals/colors resonate) before reusing the same creative direction.",
      "Worked with the ASO team's performance data to see which markets needed the most visual adjustment, not just translation.",
      "Kept a shared master file so every localized variant stayed traceable back to one source design.",
    ],
    approachTh: [
      "ปรับเลย์เอาต์สกรีนช็อตให้มีพื้นที่ข้อความแบบยืดหยุ่น แทนที่จะกำหนดความกว้าง caption ตายตัว เพื่อไม่ให้ข้อความที่แปลแล้วล้นหรือถูกตัด",
      "ตรวจสอบธรรมเนียมของแต่ละตลาดเป้าหมาย (เช่น ภาพ/สีแบบไหนที่ตลาดนั้นตอบรับ) ก่อนใช้ทิศทางครีเอทีฟเดิมซ้ำ",
      "ทำงานร่วมกับทีม ASO โดยดูข้อมูลผลลัพธ์จริงว่าตลาดไหนต้องการปรับภาพมากกว่าแค่แปลข้อความ",
      "เก็บไฟล์ต้นฉบับกลางไว้ชุดเดียว เพื่อให้ทุกเวอร์ชัน localize ย้อนกลับไปหาต้นทางเดียวกันได้เสมอ",
    ],
    result: "Localized store pages that read naturally in each target market, supporting the ASO team's conversion-rate work market by market.",
    resultTh: "หน้าสโตร์ที่ localize แล้วอ่านเป็นธรรมชาติในแต่ละตลาดเป้าหมาย ช่วยสนับสนุนงานปรับ conversion rate ของทีม ASO ในแต่ละตลาด",
    draft: true,
  },
];
