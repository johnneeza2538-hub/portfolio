# บันทึกแผนงาน Portfolio Website

(ย้ายมาจากแชท "Academic resume and portfolio" เฉพาะส่วนที่เกี่ยวกับเว็บพอร์ตนี้ — ส่วน resume/academic CV อยู่ในแชทเดิม)

## สถานะล่าสุด (ตามเช็คลิสต์)

Portfolio Website เป็นรายการ priority "สูง" และเป็นคอขวดที่สุดในเช็คลิสต์ — ตอนตรวจล่าสุดรูปขาด 34/38 ชิ้น และคำอธิบายผลงานยังเป็น placeholder ทั้งหมด

## แผนที่วางไว้: เริ่มจาก 5 ผลงานก่อน (ไม่ต้องคัดครบ 14 ชิ้น)

เลือกจาก 5 ผลงานที่ให้ดาว ⭐⭐⭐⭐⭐ ไว้ใน Career Foundation อยู่แล้ว (ตรงกับคำแนะนำ 4-6 case study):

1. Grand Solitaire
2. Drinkopoly
3. Most Likely To
4. Couple Games: Spicy Questions
5. 5 Second Rule

## ขั้นตอน

1. **คัดไฟล์ export ต่อแอป** — ดึงภาพจาก Figma/PSD/AI ของ 5 แอปนี้ก่อน (game map ต้องการหลายภาพต่อชิ้นตามโครงเว็บ, UI/ASO ใช้ภาพเดี่ยว)
2. **วางไฟล์ตามพาธที่ `js/data.js` กำหนดไว้** เช่น `images/game-maps/map-0X-a.jpg` (ดูรายละเอียดพาธเต็มใน README.md ของโฟลเดอร์นี้) — ถ้าจะใช้ชื่อไฟล์อื่น ต้องแก้ `data.js` ให้ตรงกันด้วย
3. **เขียน desc จริงแทน placeholder** — สั้น ๆ แบบ Problem → Role → Result ต่อชิ้น
4. เมื่อเว็บพร้อมแล้ว ใช้ 5 เคสเดียวกันขยายเป็น Portfolio PDF (Problem, Goal, Role, Process, Solution, Reflection ตาม Career Playbook)
5. งานเล็ก ๆ ที่เหลือคู่ขนานไปด้วย: รูปโปรไฟล์ (`images/profile/avatar.jpg`), อีเมล/LinkedIn ใน footer, bio

## หมายเหตุ

- ผู้ใช้แจ้งว่าจะใส่รูปและเขียน desc เอง (ยังไม่ได้ให้ Claude ร่าง desc ล่วงหน้า)
- ไฟล์โปรเจกต์จริงอยู่ในโฟลเดอร์นี้แล้ว: `index.html`, `css/`, `js/data.js`, `js/main.js`, `images/`
