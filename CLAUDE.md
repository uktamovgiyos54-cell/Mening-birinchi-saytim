# CLAUDE.md

## Loyiha haqida
Bu — akademik va ilmiy xizmatlar ko‘rsatuvchi freelancer uchun shaxsiy
bir sahifali (one-page) landing page sayti.
Mijozlar: talabalar, magistrantlar, doktorantlar (PhD, DSc), ilmiy
tadqiqotchilar va oliy ta’lim o‘qituvchilari.
Saytning yagona maqsadi — ishonch uyg‘otish va foydalanuvchini Telegram
orqali murojaat qilishga undash.

## Uslub qoidalari
- Ranglar: asosiy `#103B73`, fon `#FFFFFF`, ikkinchi fon `#F7F9FC`,
  matn `#1F2937`, aksent oltin `#C9A227`. Yangi rang qo‘shma.
- Uslub: minimalist, premium, akademik. Katta bo‘sh joylar, toza tartib.
- Ortiqcha animatsiya yo‘q. Yengil hover va silliq o‘tish yetarli.
- Sarlavhalar — serif, matn — sans-serif. O‘qilishi qulay bo‘lsin.
- Ohang: professional, xotirjam, ortiqcha va’dasiz. Baland gapirma.
- Barcha matn 100% o‘zbek tilida, lotin alifbosida, imlo xatosiz.
- Soxta statistika, soxta mijoz fikrlari va nashr kafolatini **yozma**.

## Fayl tuzilmasi
```
index.html        — sahifa tuzilmasi (HTML)
css/style.css     — barcha uslublar
js/main.js        — barcha skript
images/           — “Loyihalarim” kartochkalari rasmlari (loyiha-1..6.jpg)
```
Yangi fayl qo‘shma — shu to‘rttasi yetarli.

## Sahifa bo‘limlari (tartib bilan)
`#hero` → `#talabalar` → `#magistrantlar` → `#nashr` → `#loyihalar`
→ `#nega-men` → `#jarayon` → `#faq` → `#aloqa`

- Uchta xizmat bo‘limi alohida `section`, har birida `.svc-hero`
  (nishon + “Yo‘nalish NN” + sarlavha + tavsif + Telegram tugmasi).
- Fon navbatma-navbat: `section--alt` → oq → `section--alt` → oq.
- Navigatsiyada “Xizmatlar” `#talabalar` ga ishora qiladi; mobil
  menyuda uning ostida uchta kichik havola turadi.

## Texnik chegaralar
- HTML5 + CSS3 + Vanilla JS. React, Vue, Tailwind, Bootstrap, npm yo‘q.
- Tashqi kutubxona, shrift yoki CDN ishlatma — sayt internetsiz ham
  to‘liq ishlasin. Ikonalar inline SVG bo‘lsin.
- Backend, baza, login yoki admin panel kerak emas.
- Mobile-first, 320px dan boshlab gorizontal skroll bo‘lmasin.
- SEO: title, meta description, Open Graph va semantik HTML saqlansin.
- Ikonalar `index.html` boshidagi SVG sprite ichida `<symbol>` sifatida
  turadi; yangisini shu yerga `viewBox="0 0 24 24"` bilan qo‘sh.
- Loyiha rasmi yo‘q bo‘lsa, kartochkada naqshli `.pcard__ph` ko‘rinadi.
  Rasm yuklangach `js/main.js` `.is-loaded` klassini qo‘shadi.

## Ish qoidalari
- Kod yozishdan oldin qisqa reja ko‘rsat va tasdiqni kut.
- Kichik qadamlar bilan ishla: bitta o‘zgarish — bitta tekshiruv.
- Mavjud tuzilma va CSS o‘zgaruvchilarini qayta ishlat, qayta yozma.
- O‘zgarishdan keyin navigatsiya, mobil menyu va FAQ ishlashini tekshir.
- Parol, API kalit yoki shaxsiy maxfiy ma’lumot hech qachon yozma.
