/*
  แก้ไขข้อมูลผลงานของคุณตรงนี้
  - title: ชื่อผลงาน/ชื่อเกม/ชื่อแอป (ปกติไม่ต้องแปล เพราะเป็นชื่อโปรดักต์/สถานที่)
  - tag: หมวดหมู่ย่อยหรือ platform (เช่น "Mobile Game", "iOS", "Android")
  - desc: คำอธิบายสั้น ๆ
  - titleTh / tagTh / descTh: (ไม่บังคับ) เวอร์ชันภาษาไทยของ title/tag/desc
    ใส่ไว้ถ้าอยากให้ตอนสลับปุ่มภาษาเป็น TH แล้วข้อความส่วนนี้เปลี่ยนตามไปด้วย
    ถ้าไม่ใส่ ระบบจะโชว์ข้อความอังกฤษเดิมต่อไปแม้สลับเป็น TH แล้ว (ไม่ error แค่ไม่มีคำแปล)
  - image: พาธรูปภาพเดี่ยว เช่น "images/game-ui/ui-01.jpg"
  - images: (ใช้แทน image ได้) array ของพาธรูปหลายไฟล์ เช่น
      images: ["images/game-maps/map-01-a.jpg", "images/game-maps/map-01-b.jpg", ...]
    ใส่ได้กี่รูปก็ได้ ตอนคลิกเปิดดูรายละเอียด ระบบจะเรียงรูปต่อกันแนวตั้งให้ดูต่อเนื่องเหมือนเป็นภาพเดียวยาว ๆ
    โดยไม่ต้องต่อไฟล์ภาพเองก่อนอัปโหลด — เหมาะกับแผนที่เกมที่อยากทยอยใส่ทีละท่อน
  - cover: (ไม่บังคับ) รูป preview แยกต่างหากสำหรับการ์ดหน้ารวมผลงานโดยเฉพาะ
    ใส่ path รูปที่อยากให้เป็นภาพหน้าปกสวย ๆ ได้เลย — จะเป็นไฟล์แยกใหม่ หรือชี้ไปที่ไฟล์ใดไฟล์หนึ่งใน images ก็ได้
    ถ้าไม่ตั้ง cover ไว้ ระบบจะ fallback ไปใช้รูปแรกใน images แทน (สำหรับแผนที่เกมมักเป็นแค่ท่อนบนสุด ไม่ค่อยสวยเป็นภาพตัวอย่าง)
    ตอนคลิกเข้าไปดูรายละเอียด ระบบยังคงโชว์ครบทุกรูปใน images ตามเดิม cover ไม่กระทบส่วนนั้น
  - ถ้ายังไม่มีรูป ระบบจะโชว์ placeholder บอกพาธไฟล์ที่ต้องใส่ให้อัตโนมัติ
*/

const gameMapsData = [
  {
    title: "Habour Island", tag: "Game map design", desc: "A vibrant harbor-inspired map designed to evoke a sense of adventure and exploration.",
    tagTh: "งานออกแบบแผนที่เกม", descTh: "แผนที่ธีมท่าเรือที่มีชีวิตชีวา ออกแบบให้รู้สึกถึงการผจญภัยและการสำรวจ",
    cover: "images/game-maps/cover_1.png", // ชั่วคราว: ชี้ไปรูปกลาง ๆ ในเซ็ต — เปลี่ยนเป็นไฟล์ cover สวย ๆ แยกได้ทีหลัง
    images: [
      "images/game-maps/habour_1.png",
      "images/game-maps/habour_2.png",
      "images/game-maps/habour_3.png",
      "images/game-maps/habour_4.png",
      "images/game-maps/habour_5.png",
    ],
  },
  {
    title: "Japanese Garden", tag: "Game map design", desc: "A peaceful Japanese-inspired map featuring temples, gardens, and tranquil pathways.",
    tagTh: "งานออกแบบแผนที่เกม", descTh: "แผนที่สไตล์ญี่ปุ่นที่สงบร่มรื่น มีวัด สวน และทางเดินที่เงียบสงบ",
    cover: "images/game-maps/cover_2.png" ,
    images: [
      "images/game-maps/Asian park_1.png",
      "images/game-maps/Asian park_2.png",
      "images/game-maps/Asian park_3.png",
      "images/game-maps/Asian park_4.png",
    ],
  },
  {
    title: "Egypt", tag: "Game map design", desc: "An ancient Egyptian-themed map with pyramids, the Nile River, and vast desert landscapes.",
    tagTh: "งานออกแบบแผนที่เกม", descTh: "แผนที่ธีมอียิปต์โบราณ มีปิรามิด แม่น้ำไนล์ และทะเลทรายอันกว้างใหญ่",
    cover: "images/game-maps/cover_3.png" ,
    images: [
      "images/game-maps/Egypt_1.png",
      "images/game-maps/Egypt_2.png",
      "images/game-maps/Egypt_3.png",
      "images/game-maps/Egypt_4.png",
      "images/game-maps/Egypt_5.png",
    ],
  },
  {
    title: "Volcano", tag: "Game map design", desc: "A volcanic island filled with flowing lava, tiki statues, and rugged tropical terrain.",
    tagTh: "งานออกแบบแผนที่เกม", descTh: "เกาะภูเขาไฟที่เต็มไปด้วยลาวาไหล รูปปั้นติกิ และภูมิประเทศเขตร้อนสุดขรุขระ",
    cover: "images/game-maps/cover_4.png" ,
    images: [
      "images/game-maps/Volcano_1.png",
      "images/game-maps/Volcano_2.png",
      "images/game-maps/Volcano_3.png",
      "images/game-maps/Volcano_4.png",
      "images/game-maps/Volcano_5.png",
    ],
  },
  {
    title: "Santa Village", tag: "Game map design", desc: "A cozy Christmas village surrounded by snowy landscapes, festive decorations, and holiday charm.",
    tagTh: "งานออกแบบแผนที่เกม", descTh: "หมู่บ้านคริสต์มาสแสนอบอุ่น ล้อมรอบด้วยทิวทัศน์หิมะ การตกแต่งเทศกาล และบรรยากาศวันหยุด",
    cover: "images/game-maps/cover_5.png" ,
    images: [
      "images/game-maps/Xmas_1.png",
      "images/game-maps/Xmas_2.png",
      "images/game-maps/Xmas_3.png",
      "images/game-maps/Xmas_4.png",
      "images/game-maps/Xmas_5.png",
    ],
  },
  {
    title: "Paris", tag: "Game map design", desc: "A charming Paris-inspired map showcasing elegant streets, iconic landmarks, and scenic riversides.",
    tagTh: "งานออกแบบแผนที่เกม", descTh: "แผนที่สไตล์ปารีสสุดมีเสน่ห์ นำเสนอถนนสวยงาม แลนด์มาร์กสำคัญ และริมแม่น้ำอันงดงาม",
    cover: "images/game-maps/cover_6.png" ,
    images: [
      "images/game-maps/Paris_1.png",
      "images/game-maps/Paris_2.png",
      "images/game-maps/Paris_3.png",
      "images/game-maps/Paris_4.png",
      "images/game-maps/Paris_5.png",
    ],
  },
  {
    title: "Mangroove Swamp", tag: "Game map design", desc: "A mysterious mangrove forest featuring winding wetlands, dense roots, and lush tropical vegetation.",
    tagTh: "งานออกแบบแผนที่เกม", descTh: "ป่าชายเลนลึกลับ มีพื้นที่ชุ่มน้ำคดเคี้ยว รากไม้หนาแน่น และพืชพรรณเขตร้อนอุดมสมบูรณ์",
    cover: "images/game-maps/cover_7.png" ,
    images: [
      "images/game-maps/mangrove_1.png",
      "images/game-maps/mangrove_2.png",
      "images/game-maps/mangrove_3.png",
      "images/game-maps/mangrove_4.png",
      "images/game-maps/mangrove_5.png",
    ],
  },
    {
    title: "Additional Maps", tag: "Game map design", desc: "20+ Game Map Designs",
    titleTh: "แผนที่เพิ่มเติม", tagTh: "งานออกแบบแผนที่เกม", descTh: "งานออกแบบแผนที่เกมกว่า 20 แบบ",
    cover: "images/game-maps/cover_8.png" ,
    images: [
      "images/game-maps/all map_1.png",
      "images/game-maps/all map_2.png",
      "images/game-maps/all map_3.png",
      "images/game-maps/all map_4.png",
      "images/game-maps/all map_5.png",
      "images/game-maps/all map_6.png",
      "images/game-maps/all map_7.png",
    ],
  },
];

const gameUiData = [
  { title: "Solitaire Adventure Tripeak", tag: "UI Kit", desc: "Designed and refined the game's logo and splash screen through multiple iterations, focusing on strong visual identity, readability, and user appeal.",
    tagTh: "ชุด UI", descTh: "ออกแบบและปรับปรุงโลโก้กับหน้าจอ Splash ของเกม โดยเน้นอัตลักษณ์ภาพที่ชัดเจน อ่านง่าย และดึงดูดผู้ใช้",
    cover: "images/game-ui/UI_cover_1.png" ,
    images: [
    "images/game-ui/UI_1_1.png",
    "images/game-ui/UI_1_2.png",
    "images/game-ui/UI_1_3.png",
    ],
  },
  { title: "Drinkin", tag: "UI Kit", desc: "Created expressive character illustrations for app icons, in-game events, paywalls, and promotional UI to strengthen the game's personality.",
    tagTh: "ชุด UI", descTh: "สร้างภาพประกอบตัวละครที่มีเอกลักษณ์สำหรับไอคอนแอป อีเวนต์ในเกม หน้า Paywall และ UI โปรโมชัน เพื่อเสริมบุคลิกของเกมให้ชัดเจนขึ้น",
    cover: "images/game-ui/UI_cover_2.png" ,
    images: [
    "images/game-ui/UI_2_1.png",
    "images/game-ui/UI_2_2.png",
    "images/game-ui/UI_2_3.png",
    ],
  },{ title: "Drinkopoly", tag: "UI Kit", desc: "Developed a modular vector character system with interchangeable parts, enabling efficient creation of diverse characters while maintaining a consistent visual style.",
    tagTh: "ชุด UI", descTh: "พัฒนาระบบตัวละครเวกเตอร์แบบโมดูลาร์ที่สลับชิ้นส่วนได้ ช่วยให้สร้างตัวละครหลากหลายได้อย่างมีประสิทธิภาพ พร้อมคงสไตล์ภาพให้สม่ำเสมอ",
    cover: "images/game-ui/ui_cover_3.png" ,
    images: [
    "images/game-ui/UI_3_1.png",
    "images/game-ui/UI_3_2.png",
    "images/game-ui/UI_3_3.png",
    ],
  },{ title: "Couple Games", tag: "UI Kit", desc: "Designed a cohesive set of vector icons and illustrations for deck themes, paywalls, and in-app UI, enhancing visual communication and supporting a consistent user experience.",
    tagTh: "ชุด UI", descTh: "ออกแบบชุดไอคอนและภาพประกอบเวกเตอร์ที่กลมกลืนกันสำหรับธีมการ์ด หน้า Paywall และ UI ภายในแอป ช่วยเสริมการสื่อสารด้วยภาพและประสบการณ์ผู้ใช้ที่สอดคล้องกัน",
    cover: "images/game-ui/ui_cover_4.png" ,
    images: [
    "images/game-ui/UI_4_1.png",
    "images/game-ui/UI_4_2.png",
    "images/game-ui/UI_4_3.png",
    ],
  },
];

const asoData = [
  { title: "Couple Games", tag: "App Icon + Screenshots", desc: "Designed and optimized app icons, screenshots, and store assets to improve visual appeal and maximize App Store conversion.",
    tagTh: "ไอคอนแอป + สกรีนช็อต", descTh: "ออกแบบและปรับปรุงไอคอนแอป สกรีนช็อต และสื่อประกอบหน้าสโตร์ เพื่อเพิ่มความน่าสนใจและอัตราการดาวน์โหลดบน App Store",
    cover: "images/aso/UI_cover_1.png" ,
    images: [
    "images/aso/ASO_1_1.png",
    "images/aso/ASO_1_2.png",
    "images/aso/ASO_1_3.png",
    "images/aso/ASO_1_4.png",
    ],
  },
  { title: "Drinkopoly", tag: "App Icon + Screenshots", desc: "Created localized store assets, feature graphics, and multi-language visuals tailored for different markets and platforms.",
    tagTh: "ไอคอนแอป + สกรีนช็อต", descTh: "สร้างสื่อหน้าสโตร์แบบ localized ภาพ Feature Graphic และภาพหลายภาษาที่ปรับให้เหมาะกับแต่ละตลาดและแพลตฟอร์ม",
    cover: "images/aso/UI_cover_2.png" ,
    images: [
    "images/aso/ASO_2_1.png",
    "images/aso/ASO_2_2.png",
    "images/aso/ASO_2_3.png",
    "images/aso/ASO_2_4.png",
    ],
  },
  { title: "Additional Apps", tag: "App Icon + Screenshots", desc: "Designed and localized ASO assets across multiple party game titles, maintaining a consistent visual identity while adapting each product to its target audience.",
    titleTh: "แอปเพิ่มเติม", tagTh: "ไอคอนแอป + สกรีนช็อต", descTh: "ออกแบบและ localized ASO ให้กับเกมปาร์ตี้หลายชื่อเรื่อง โดยคงอัตลักษณ์ภาพให้สม่ำเสมอ พร้อมปรับแต่ละผลิตภัณฑ์ให้เหมาะกับกลุ่มเป้าหมาย",
    cover: "images/aso/UI_cover_3.png" ,
    images: [
    "images/aso/ASO_3_1.png",
    "images/aso/ASO_3_2.png",
    "images/aso/ASO_3_3.png",
    ],
  },
];

/*
  แอปที่มีส่วนร่วมพัฒนา (แถบเครดิตโลโก้ ก่อน section ติดต่อ)
  ใช้เฉพาะแอปที่บริษัทอนุญาตให้เครมเครดิตได้เท่านั้น
  - name: ชื่อแอป (โชว์ตอน hover / ใต้โลโก้)
  - logo: path โลโก้แอป แนะนำเป็นไฟล์สี่เหลี่ยมจัตุรัส พื้นหลังโปร่งใส (.png) ขนาดสัก 256x256px ขึ้นไป
  - playUrl: ลิงก์ไปหน้าแอปบน Google Play Store (ถ้าไม่มีบน Android ให้ลบบรรทัดนี้ทิ้งหรือเว้นว่างได้)
  - appStoreUrl: ลิงก์ไปหน้าแอปบน Apple App Store (ถ้าไม่มีบน iOS ให้ลบบรรทัดนี้ทิ้งหรือเว้นว่างได้)
  ใส่ได้ทั้งสองลิงก์พร้อมกันถ้าแอปมีทั้ง Android/iOS ระบบจะโชว์ปุ่มเล็ก ๆ ให้เลือกใต้โลโก้ตามที่มีข้อมูล
  เพิ่ม/ลบแอปได้โดยเพิ่ม/ลบ object ในอาร์เรย์นี้ — ใส่กี่แอปก็ได้ ไม่จำกัดแค่ 5-6
*/
const appLogosData = [
  { name: "Solitaire Adventures Tripeaks", logo: "images/app-logos/Solitaire Adventures Tripeaks.png",
    appStoreUrl: "https://apps.apple.com/th/app/solitaire-adventures-tripeaks/id1623346731?l=th",
    playUrl: "" /* ใส่ลิงก์ Play Store ตรงนี้ถ้ามีเวอร์ชัน Android */ },
  { name: "Drinkin", logo: "images/app-logos/Drinkin.png",
    playUrl: "https://play.google.com/store/apps/details?id=com.ultimatepartyapp.drinkinggameflat",
    appStoreUrl: "" /* ใส่ลิงก์ App Store ตรงนี้ถ้ามีเวอร์ชัน iOS */ },
  { name: "Drinkopoly", logo: "images/app-logos/Drinkopoly.png",
    playUrl: "https://play.google.com/store/apps/details?id=com.gtm.drinkinggamefun",
    appStoreUrl: "" },
  { name: "Most Likely To_ Question Game", logo: "images/app-logos/Most Likely To_ Question Game.png",
    playUrl: "https://play.google.com/store/apps/details?id=com.gtm.mostlikelytogame",
    appStoreUrl: "" },
  { name: "Couple Games _ Spicy Questions", logo: "images/app-logos/Couple Games _ Spicy Questions.png",
    playUrl: "https://play.google.com/store/apps/details?id=com.gtm.coupletruthordare&hl=th",
    appStoreUrl: "" },
  { name: "Would You Rather Question Game", logo: "images/app-logos/Would You Rather Question Game-1.png",
    playUrl: "https://play.google.com/store/apps/details?id=com.gtm.wouldyourather",
    appStoreUrl: "" },
  { name: "5 Second Rule - Fun Group Game", logo: "images/app-logos/5 Second Rule - Fun Group Game.png",
    playUrl: "https://play.google.com/store/apps/details?id=com.gtm.fiveseconds",
    appStoreUrl: "" },
];
