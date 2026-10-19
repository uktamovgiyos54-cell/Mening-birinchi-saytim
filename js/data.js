/* =========================================================
   Jurnallar va konferensiyalar ro‘yxati
   ---------------------------------------------------------
   Saytdagi "Jurnallar" va "Konferensiyalar" bo‘limlari shu
   fayldan chiziladi. Kartalar shu yerdagi tartibda chiqadi.

   Yangi karta qo‘shish uchun kerakli massivga bitta obyekt
   qo‘shing:

   {
     title: "Karta sarlavhasi",
     description: "Qisqa tavsif",
     items: ["1-nom", "2-nom"],   // kartadagi nomlar ro‘yxati
     url: "https://t.me/Konferensiyalar_jurnallar/<raqam>"
   }

   Eslatma: bu yerga narx, foiz yoki "kafolat" yozmang —
   bunday ma’lumot Telegram postida turadi.
   ========================================================= */

window.JOURNALS = [
  {
    title: "Mahalliy impakt faktorli jurnallar",
    description: "OAK tan olgan mahalliy jurnallar · Google Scholar’da indekslanadi",
    items: [
      "IQRO jurnali",
      "International Journal of Scientific Researches",
      "Ilm-fan xabarnomasi",
      "Ilmiy tadqiqotlar va ularning yechimlari",
      "Pedagogik tadqiqotlar"
    ],
    url: "https://t.me/Konferensiyalar_jurnallar/13"
  },
  {
    title: "Xorijiy bazalarda indekslanuvchi jurnallar",
    description: "OAK tan olgan xorijiy bazalar · o‘zbek, rus va ingliz tillarida",
    items: [
      "O‘rta Osiyo ta’lim va innovatsiyalar jurnali",
      "Yangi O‘zbekiston pedagoglari axborotnomasi",
      "Yangi O‘zbekiston talabalari axborotnomasi",
      "Yangi O‘zbekiston ilmiy tadqiqotlar jurnali",
      "Central Asian Journal of Multidisciplinary Research and Management Studies"
    ],
    url: "https://t.me/Konferensiyalar_jurnallar/77"
  },
  {
    title: "Yevrosiyo jurnallari",
    description: "OAK bazalarida indekslangan mahalliy jurnallar · o‘zbek, rus va ingliz tillarida",
    items: [
      "Yevrosiyo ilmiy tadqiqotlar jurnali",
      "Yevrosiyo huquq, moliya va amaliy fanlar jurnali",
      "Yevrosiyo tibbiyot va tabiiy fanlar jurnali",
      "Yevrosiyo ijtimoiy fanlar, falsafa va san’at jurnali",
      "Yevrosiyo matematik nazariya va kompyuter fanlari jurnali"
    ],
    url: "https://t.me/Konferensiyalar_jurnallar/66"
  },
  {
    title: "OAK 14-baza xalqaro jurnallari",
    description: "ResearchBib bazasi · ingliz tilida",
    items: [
      "International Journal of Law",
      "International Journal of Technology and Academic Research",
      "Egyptian Medical Journal of the National Research Center",
      "Arabian Journal for Science",
      "International Journal of Literature and Language Studies (ISSN 2828-6235)",
      "BG Pulse Journal (AQSh)"
    ],
    url: "https://t.me/Konferensiyalar_jurnallar/14"
  },
  {
    title: "Amerika va Germaniya jurnallari",
    description: "Amerika va Germaniyada nashr etiladigan xalqaro jurnallar",
    items: [
      "International Bulletin of Applied Science and Technology (IBAST)",
      "Journal of Agriculture & Horticulture (JAH)",
      "International Bulletin of Medical Sciences and Clinical Research (IBMSCR)",
      "International Bulletin of Engineering and Technology (IBET)"
    ],
    url: "https://t.me/Konferensiyalar_jurnallar/126"
  },
  {
    title: "OAK 35-baza: Yevropa jurnallari",
    description: "Crossref bazasi · ingliz tilida",
    items: [
      "European International Journal of Multidisciplinary Research and Management Studies",
      "Journal of Social Sciences and Humanities Research Fundamentals",
      "European International Journal of Pedagogics",
      "Journal of Management and Economics",
      "European International Journal of Philological Sciences"
    ],
    url: "https://t.me/Konferensiyalar_jurnallar/63"
  },
  {
    title: "OAK 35-baza: Amerika jurnallari",
    description: "Crossref bazasi · ingliz tilida · ISSN raqamlari bilan",
    items: [
      "American Journal of Social Sciences and Humanity Research (2771-2141)",
      "American Journal of Agriculture and Horticulture Innovations (2771-2559)",
      "American Journal of Philological Sciences (2771-2273)",
      "International Journal of Pedagogics (2771-2281)",
      "American Journal of Biomedical Science & Pharmaceutical Innovation (2771-2753)",
      "International Journal of Medical Sciences and Clinical Research (2771-2265)",
      "International Journal of Literature and Languages (2771-2834)",
      "International Journal of History and Political Sciences (2771-2222)",
      "American Journal of Applied Science and Technology (2771-2745)",
      "International Journal of Law and Criminology (2771-2214)",
      "International Journal of Management and Economics Fundamental (2771-2257)"
    ],
    url: "https://t.me/Konferensiyalar_jurnallar/64"
  },
  {
    title: "Amerika jurnallari: BASE, CrossRef, ResearchGate",
    description: "OAK tan olgan BASE, CrossRef va ResearchGate bazalari · ingliz tilida",
    items: [
      "The American Journal of Interdisciplinary Innovations and Research",
      "The American Journal of Medical Sciences and Pharmaceutical Research",
      "The American Journal of Social Science and Education Innovations",
      "The American Journal of Applied Sciences",
      "The American Journal of Engineering and Technology",
      "The American Journal of Management and Economics Innovations",
      "The American Journal of Political Science, Law and Criminology",
      "The American Journal of Agriculture and Biomedical Engineering",
      "The American Journal of Horticulture and Floriculture Research",
      "The American Journal of Veterinary Sciences and Wildlife Discovery"
    ],
    url: "https://t.me/Konferensiyalar_jurnallar/65"
  }
];

window.CONFERENCES = [
  {
    title: "Mahalliy konferensiyalar",
    description: "Google Scholar’da indekslanadi · tezislar uchun",
    items: [
      "Zamonaviy dunyoda tabiiy fanlar: nazariy va amaliy izlanishlar",
      "Zamonaviy dunyoda amaliy fanlar: muammolar va yechimlar",
      "Zamonaviy dunyoda pedagogika va psixologiya: nazariy va amaliy izlanishlar",
      "Zamonaviy dunyoda innovatsion tadqiqotlar: nazariya va amaliyot",
      "Zamonaviy dunyoda ijtimoiy fanlar: nazariy va amaliy izlanishlar",
      "Zamonaviy dunyoda ilm-fan va texnologiya",
      "Ilm-fan va innovatsiya ilmiy-amaliy konferensiyasi",
      "Yosh olimlar ilmiy-amaliy konferensiyasi",
      "Ilm-fan yangiliklari konferensiyasi",
      "Pedagogik islohotlar va ularning yechimlari",
      "Pedagogical Reforms and Their Solutions",
      "Zamonaviy jamiyat va ijtimoiy-gumanitar fanlar: dolzarb masalalar va ilmiy yondashuvlar",
      "Tabiiy fanlarning dolzarb muammolari va ularning ilmiy yechimlari"
    ],
    url: "https://t.me/Konferensiyalar_jurnallar/8"
  },
  {
    title: "Xalqaro konferensiyalar: davlatlar bo‘yicha",
    description: "10 ta davlatda o‘tkaziladi · Google Scholar’da indekslanmaydi",
    items: [
      "AQSh konferensiyasi",
      "Niderlandiya konferensiyasi",
      "Fransiya konferensiyasi",
      "Rossiya konferensiyasi",
      "Belarus konferensiyasi",
      "Italiya konferensiyasi",
      "Polsha konferensiyasi",
      "Turkiya konferensiyasi",
      "Buyuk Britaniya konferensiyasi",
      "Ispaniya konferensiyasi"
    ],
    url: "https://t.me/Konferensiyalar_jurnallar/9"
  },
  {
    title: "Xalqaro konferensiyalar: ICSEL, ICHT va boshqalar",
    description: "Google Scholar’da indekslanadi · ingliz va mahalliy tillarda",
    items: [
      "AQSh — International Conference on Science, Education & Law (ICSEL)",
      "Germaniya — International Conference on Health & Technology (ICHT)",
      "Fransiya — International Conference on Arts, Society & Humanities (ICASH)",
      "Rossiya — International Conference on Science & Technology (ICST)",
      "Buyuk Britaniya — International Conference on Business & Management (ICBM)",
      "Singapur — International Conference on Engineering & Technology (ICET)",
      "Yaponiya — International Conference on Medicine & Agriculture (ICMA)",
      "Kanada — International Conference on Social Sciences & Humanities (ICSH)",
      "Polsha — International Conference on Linguistics & Translation (ICLT)",
      "Italiya — International Conference on Culture & History (ICCH)"
    ],
    url: "https://t.me/Konferensiyalar_jurnallar/12"
  },
  {
    title: "Xalqaro konferensiyalar 2026",
    description: "Google Scholar’da indekslanadi · ko‘p tarmoqli yo‘nalishlar",
    items: [
      "Shotlandiya — Scottish International Conference on Multidisciplinary Research and Innovation (SICMRI 2026)",
      "London — London International Monthly Conference on Multidisciplinary Research and Innovation (LIMCMRI)",
      "AQSh — International Conference on Artificial Intelligence and Applications (ICAIA)",
      "Germaniya — International Conference on Multidisciplinary Sciences and Innovations (ICMSI)",
      "Hindiston — Ethiopian International Multidisciplinary Research Conferences",
      "AQSh — Euro-America-UK International Scientific Conference"
    ],
    url: "https://t.me/Konferensiyalar_jurnallar/119"
  }
];
