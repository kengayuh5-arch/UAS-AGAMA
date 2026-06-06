/* AKHLAKDIGITAL — script.js */

const materiData = [
  {
    id: 0, title: "Menjaga Lisan Digital: Etika Berkomentar di Media Sosial",
    kategori: "komunikasi", kategoriLabel: "Komunikasi",
    ringkasan: "Panduan Islami dalam berkomentar, membalas pesan, dan berinteraksi di platform digital agar tetap menjaga akhlak mulia.",
    thumb: "https://placehold.co/600x350/e8f5e9/2e7d32?text=Lisan+Digital",
    penulis: "Ken Gayuh", tanggal: "12 Maret 2025", durasi: "8 menit baca",
    konten: `<p>Di era media sosial, setiap komentar yang kita ketikkan adalah bentuk lisan digital kita. Islam memandang ini sebagai bagian dari tanggung jawab seorang muslim.</p><h2>Dalil tentang Menjaga Lisan</h2>`,
    dalil: [{label:"HR. Bukhari & Muslim",arabic:"مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",terjemah:"\"Barangsiapa beriman kepada Allah dan hari akhir, hendaklah ia berkata baik atau diam.\" — HR. Bukhari & Muslim",source:"HR. Bukhari No. 6018"},{label:"Al-Qur'an — Al-Hujurat: 11",arabic:"يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ",terjemah:"\"Janganlah suatu kaum mengolok-olok kaum yang lain.\" — QS. Al-Hujurat: 11",source:"QS. Al-Hujurat (49): 11"}],
    kontenLanjut: `<h2>Panduan Praktis</h2><ul><li><strong>Pikirkan sebelum mengetik</strong> — Baca ulang sebelum dikirim</li><li><strong>Hindari ghibah digital</strong> — Membicarakan keburukan orang lain di medsos tetap ghibah</li><li><strong>Bertabayyun sebelum menyebar</strong> — Verifikasi informasi terlebih dahulu</li></ul>`
  },
  {
    id: 1, title: "Menjaga Pandangan di Era Konten Tanpa Batas",
    kategori: "konten", kategoriLabel: "Konsumsi Konten",
    ringkasan: "Bagaimana Islam membimbing kita dalam mengelola konsumsi konten digital agar pandangan mata dan hati tetap bersih.",
    thumb: "https://placehold.co/600x350/f1f8e9/558b2f?text=Menjaga+Pandangan",
    penulis: "Ken Gayuh", tanggal: "5 April 2025", durasi: "7 menit baca",
    konten: `<p>Dalam sehari, kita bisa terpapar ribuan gambar, video, dan teks yang banyak di antaranya tidak baik untuk pandangan dan hati kita.</p><h2>Perintah Allah tentang Menjaga Pandangan</h2>`,
    dalil: [{label:"Al-Qur'an — An-Nur: 30",arabic:"قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ",terjemah:"\"Katakanlah kepada orang mukmin agar mereka menjaga pandangannya.\" — QS. An-Nur: 30",source:"QS. An-Nur (24): 30"}],
    kontenLanjut: `<h2>Strategi Menjaga Pandangan Digital</h2><ul><li><strong>Gunakan fitur filter konten</strong> — Manfaatkan pengaturan platform</li><li><strong>Kurate feed media sosial</strong> — Follow akun bermanfaat, unfollow yang tidak</li><li><strong>Batasi waktu scrolling</strong> — Gunakan screen time limiter</li></ul>`
  },
  {
    id: 2, title: "Amanah & Kejujuran: Melawan Hoaks dan Plagiarisme",
    kategori: "integritas", kategoriLabel: "Integritas",
    ringkasan: "Islam mewajibkan kejujuran dan amanah dalam segala aspek, termasuk dalam berbagi informasi dan karya di ruang digital.",
    thumb: "https://placehold.co/600x350/e8f5e9/1b5e20?text=Amanah+Digital",
    penulis: "Ken Gayuh", tanggal: "20 April 2025", durasi: "9 menit baca",
    konten: `<p>Hoaks, plagiarisme, dan penipuan digital adalah bentuk pelanggaran amanah yang sangat berbahaya. Islam dengan tegas melarang segala bentuk kebohongan.</p><h2>Perintah Tabayyun dalam Al-Qur'an</h2>`,
    dalil: [{label:"Al-Qur'an — Al-Isra: 36",arabic:"وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ",terjemah:"\"Dan janganlah kamu mengikuti sesuatu yang tidak kamu ketahui.\" — QS. Al-Isra: 36",source:"QS. Al-Isra (17): 36"},{label:"Al-Qur'an — Al-Hujurat: 6",arabic:"إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا",terjemah:"\"Jika seorang fasik datang dengan berita, maka verifikasikanlah.\" — QS. Al-Hujurat: 6",source:"QS. Al-Hujurat (49): 6"}],
    kontenLanjut: `<h2>Cara Menjadi Muslim Anti-Hoaks</h2><ul><li><strong>Cek sumber informasi</strong> — Pastikan dari media terpercaya</li><li><strong>Gunakan fact-checker</strong> — Manfaatkan situs Cek Fakta</li><li><strong>Hormati hak cipta</strong> — Plagiarisme adalah pencurian yang dilarang Islam</li></ul>`
  },
  {
    id: 3, title: "Ukhuwah Islamiyah di Dunia Maya",
    kategori: "sosial", kategoriLabel: "Sosial",
    ringkasan: "Membangun persaudaraan Islam yang kuat di ruang digital dan menghindari perpecahan, fitnah, serta ujaran kebencian.",
    thumb: "https://placehold.co/600x350/f9fbe7/827717?text=Ukhuwah+Online",
    penulis: "Ken Gayuh", tanggal: "3 Mei 2025", durasi: "6 menit baca",
    konten: `<p>Ukhuwah Islamiyah adalah salah satu pilar utama Islam. Di era digital, persaudaraan ini bisa diperkuat atau justru dirusak tergantung cara kita berinteraksi online.</p><h2>Fondasi Ukhuwah dalam Al-Qur'an</h2>`,
    dalil: [{label:"Al-Qur'an — Al-Hujurat: 10",arabic:"إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ",terjemah:"\"Sesungguhnya orang mukmin itu bersaudara, maka damaikanlah antara saudaramu.\" — QS. Al-Hujurat: 10",source:"QS. Al-Hujurat (49): 10"}],
    kontenLanjut: `<h2>Membangun Ukhuwah Digital yang Sehat</h2><ul><li><strong>Hindari debat kusir</strong> — Pilih forum yang tepat untuk diskusi</li><li><strong>Jaga husnu zhann</strong> — Jangan mudah su'udzhann terhadap sesama muslim</li><li><strong>Tegur dengan bijak</strong> — Nasihati secara pribadi dan sopan</li></ul>`
  },
  {
    id: 4, title: "Manajemen Waktu Islami di Era Gadget",
    kategori: "produktivitas", kategoriLabel: "Produktivitas",
    ringkasan: "Panduan praktis mengelola waktu agar penggunaan teknologi tidak mengorbankan ibadah, keluarga, dan produktivitas.",
    thumb: "https://placehold.co/600x350/e8f5e9/2e7d32?text=Manajemen+Waktu",
    penulis: "Ken Gayuh", tanggal: "18 Mei 2025", durasi: "10 menit baca",
    konten: `<p>Waktu adalah nikmat Allah yang sering disia-siakan. Di era digital, waktu sering tersita oleh scrolling tanpa tujuan dan notifikasi yang tiada henti.</p><h2>Islam dan Penghargaan terhadap Waktu</h2>`,
    dalil: [{label:"Al-Qur'an — Al-Ashr: 1-3",arabic:"وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ إِلَّا الَّذِينَ آمَنُوا",terjemah:"\"Demi masa. Sungguh manusia berada dalam kerugian, kecuali yang beriman dan beramal shaleh.\" — QS. Al-Ashr",source:"QS. Al-Ashr (103): 1-3"},{label:"Hadist — HR. Bukhari",arabic:"نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ الصِّحَّةُ وَالْفَرَاغُ",terjemah:"\"Dua nikmat yang sering disia-siakan: kesehatan dan waktu luang.\" — HR. Bukhari",source:"HR. Bukhari No. 6412"}],
    kontenLanjut: `<h2>Tips Manajemen Waktu Digital Islami</h2><ul><li><strong>Jadwalkan waktu online & offline</strong> — Tentukan jam bebas gadget</li><li><strong>Prioritaskan sholat</strong> — Jangan biarkan notifikasi menunda sholat</li><li><strong>Audit screen time</strong> — Evaluasi penggunaan HP setiap hari</li></ul>`
  },
  {
    id: 5, title: "Privasi dan Kehormatan dalam Islam Digital",
    kategori: "integritas", kategoriLabel: "Integritas",
    ringkasan: "Islam sangat menjaga kehormatan dan privasi individu. Bagaimana prinsip ini diterapkan di dunia digital modern?",
    thumb: "https://placehold.co/600x350/e8f5e9/388e3c?text=Privasi+Islami",
    penulis: "Ken Gayuh", tanggal: "1 Juni 2025", durasi: "7 menit baca",
    konten: `<p>Jauh sebelum era digital, Islam telah mengajarkan prinsip perlindungan kehormatan dan privasi melalui berbagai ayat dan hadist yang relevan hingga hari ini.</p><h2>Larangan Tajassus (Memata-matai)</h2>`,
    dalil: [{label:"Al-Qur'an — Al-Hujurat: 12",arabic:"وَلَا تَجَسَّسُوا وَلَا يَغْتَب بَّعْضُكُم بَعْضًا",terjemah:"\"Janganlah mencari-cari kesalahan orang lain dan janganlah menggunjing.\" — QS. Al-Hujurat: 12",source:"QS. Al-Hujurat (49): 12"}],
    kontenLanjut: `<h2>Menjaga Privasi di Era Digital</h2><ul><li><strong>Jangan sebar foto/data tanpa izin</strong> — Pelanggaran kehormatan</li><li><strong>Lindungi data pribadi</strong> — Hati-hati berbagi informasi sensitif</li><li><strong>Hormati privasi keluarga</strong> — Jangan pamer kehidupan keluarga berlebihan</li></ul>`
  },
  {
    id: 6, title: "Etika Mengunggah Konten di Media Sosial",
    kategori: "komunikasi", kategoriLabel: "Komunikasi",
    ringkasan: "Panduan Islam dalam membuat dan memposting konten — apa yang boleh dan tidak boleh diunggah di media sosial.",
    thumb: "https://placehold.co/600x350/c8e6c9/1b5e20?text=Etika+Konten",
    penulis: "Ken Gayuh", tanggal: "2 Juni 2025", durasi: "8 menit baca",
    konten: `<p>Setiap konten yang kita unggah adalah cerminan akhlak dan keimanan kita kepada Allah SWT. Sebelum posting, tanyakan: apakah ini bermanfaat dan diridhai Allah?</p><h2>Dalil tentang Setiap Ucapan</h2>`,
    dalil: [{label:"Al-Qur'an — Qaf: 18",arabic:"مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ",terjemah:"\"Tidak ada suatu kata yang diucapkan melainkan ada malaikat pengawas yang siap mencatat.\" — QS. Qaf: 18",source:"QS. Qaf (50): 18"}],
    kontenLanjut: `<h2>Konten yang Diperbolehkan</h2><ul><li><strong>Dakwah dan ilmu</strong> — Berbagi pengetahuan Islam yang bermanfaat</li><li><strong>Motivasi positif</strong> — Kata-kata yang menginspirasi</li></ul><h2>Konten yang Harus Dihindari</h2><ul><li><strong>Riya (pamer)</strong> — Memamerkan ibadah untuk pujian manusia</li><li><strong>Ghibah digital</strong> — Membicarakan keburukan orang lain</li><li><strong>Provokatif</strong> — Yang memancing perpecahan umat</li></ul>`
  },
  {
    id: 7, title: "Stop Cyberbullying! Perspektif Islam",
    kategori: "sosial", kategoriLabel: "Sosial",
    ringkasan: "Memahami cyberbullying sebagai bentuk kezhaliman digital yang dilarang Islam dan cara menghadapinya.",
    thumb: "https://placehold.co/600x350/f1f8e9/558b2f?text=Stop+Cyberbullying",
    penulis: "Ken Gayuh", tanggal: "5 Juni 2025", durasi: "9 menit baca",
    konten: `<p>Cyberbullying adalah tindakan menyakiti seseorang melalui media digital. Islam dengan tegas melarangnya sebagai bentuk kezhaliman yang akan dipertanggungjawabkan.</p><h2>Islam Melarang Segala Kezhaliman</h2>`,
    dalil: [{label:"Al-Qur'an — Al-Hujurat: 11",arabic:"لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ عَسَىٰ أَن يَكُونُوا خَيْرًا مِّنْهُمْ",terjemah:"\"Janganlah suatu kaum mengolok-olok kaum lain, boleh jadi mereka lebih baik.\" — QS. Al-Hujurat: 11",source:"QS. Al-Hujurat (49): 11"},{label:"Hadist — HR. Muslim",arabic:"الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",terjemah:"\"Muslim sejati adalah yang kaum muslimin selamat dari gangguan lisan dan tangannya.\" — HR. Muslim",source:"HR. Muslim No. 41"}],
    kontenLanjut: `<h2>Bentuk Cyberbullying yang Harus Dihindari</h2><ul><li><strong>Body shaming</strong> — Menghina penampilan di kolom komentar</li><li><strong>Menyebarkan rumor palsu</strong> — Fitnah yang merusak reputasi</li><li><strong>Doxing</strong> — Menyebarkan data pribadi tanpa izin</li></ul><h2>Cara Menghadapi Cyberbullying</h2><ul><li>Blokir dan laporkan pelaku</li><li>Simpan bukti sebagai dokumentasi</li><li>Ceritakan kepada orang yang dipercaya</li></ul>`
  },
  {
    id: 8, title: "Mengelola Emosi di Dunia Digital",
    kategori: "komunikasi", kategoriLabel: "Komunikasi",
    ringkasan: "Cara Islam mengajarkan kita menahan diri dari amarah, provokasi, dan perdebatan sia-sia di dunia online.",
    thumb: "https://placehold.co/600x350/e8f5e9/1b5e20?text=Kelola+Emosi",
    penulis: "Ken Gayuh", tanggal: "8 Juni 2025", durasi: "7 menit baca",
    konten: `<p>Dunia digital sering menjadi tempat di mana emosi mudah tersulut. Islam memberikan panduan luar biasa dalam mengelola emosi yang sangat relevan untuk kehidupan digital kita.</p><h2>Keutamaan Menahan Amarah</h2>`,
    dalil: [{label:"Hadist — HR. Bukhari",arabic:"لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",terjemah:"\"Orang yang kuat adalah yang mampu menahan dirinya ketika marah.\" — HR. Bukhari",source:"HR. Bukhari No. 6114"}],
    kontenLanjut: `<h2>Tips Mengelola Emosi Digital</h2><ul><li><strong>Baca ta'awudz</strong> — Ucapkan A'udzubillah saat mulai emosi</li><li><strong>Tunda respons</strong> — Jangan balas pesan saat emosi memuncak</li><li><strong>Berwudhu</strong> — Dianjurkan Rasulullah untuk meredakan amarah</li><li><strong>Pilih diam</strong> — Diam lebih baik daripada berkata buruk</li></ul>`
  },
  {
    id: 9, title: "Hijrah Digital: Transformasi Akhlak Online",
    kategori: "produktivitas", kategoriLabel: "Produktivitas",
    ringkasan: "Panduan bertransformasi dari pengguna media sosial yang buruk menjadi pengguna yang berakhlak mulia dan produktif.",
    thumb: "https://placehold.co/600x350/f9fbe7/827717?text=Hijrah+Digital",
    penulis: "Ken Gayuh", tanggal: "10 Juni 2025", durasi: "10 menit baca",
    konten: `<p>Hijrah digital bukan berarti meninggalkan teknologi, melainkan bertransformasi dalam cara menggunakannya — dari penggunaan yang lalai menuju yang bermakna dan berakhlak mulia.</p><h2>Landasan Perubahan Diri dalam Islam</h2>`,
    dalil: [{label:"Al-Qur'an — Ar-Ra'd: 11",arabic:"إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ",terjemah:"\"Allah tidak mengubah keadaan suatu kaum sebelum mereka mengubah diri mereka sendiri.\" — QS. Ar-Ra'd: 11",source:"QS. Ar-Ra'd (13): 11"}],
    kontenLanjut: `<h2>Langkah-langkah Hijrah Digital</h2><ul><li><strong>Audit digital</strong> — Evaluasi akun dan konten yang dikonsumsi</li><li><strong>Bersihkan following list</strong> — Unfollow yang tidak bermanfaat</li><li><strong>Isi dengan konten positif</strong> — Follow ulama dan edukasi Islami</li><li><strong>Tetapkan screen time</strong> — Batasi dengan jadwal jelas</li><li><strong>Istiqomah</strong> — Konsisten dengan perubahan</li></ul>`
  },
  {
    id: 10, title: "Bahaya FOMO dan Solusinya dalam Islam",
    kategori: "konten", kategoriLabel: "Konsumsi Konten",
    ringkasan: "Fenomena Fear of Missing Out di era digital dan bagaimana Islam mengajarkan qana'ah serta ketenangan hati.",
    thumb: "https://placehold.co/600x350/e8f5e9/388e3c?text=FOMO+vs+Qanaah",
    penulis: "Ken Gayuh", tanggal: "12 Juni 2025", durasi: "8 menit baca",
    konten: `<p>FOMO (Fear of Missing Out) adalah perasaan cemas takut ketinggalan sesuatu di media sosial. Islam memiliki jawaban yang indah untuk fenomena modern ini: Qana'ah.</p><h2>Panduan Rasulullah tentang Perbandingan Diri</h2>`,
    dalil: [{label:"Hadist — HR. Tirmidzi",arabic:"انْظُرُوا إِلَى مَنْ هُوَ أَسْفَلَ مِنْكُمْ وَلَا تَنْظُرُوا إِلَى مَنْ هُوَ فَوْقَكُمْ",terjemah:"\"Lihatlah yang berada di bawahmu dan jangan melihat yang di atasmu, agar tidak meremehkan nikmat Allah.\" — HR. Tirmidzi",source:"HR. Tirmidzi No. 2513"}],
    kontenLanjut: `<h2>Cara Mengobati FOMO dengan Islam</h2><ul><li><strong>Perbanyak syukur</strong> — Tulis 3 hal yang disyukuri setiap hari</li><li><strong>Kurangi scroll</strong> — Batasi waktu melihat feed orang lain</li><li><strong>Ingat medsos tidak nyata</strong> — Orang hanya posting yang terbaik</li><li><strong>Isi waktu dengan ibadah</strong> — Dzikir, Al-Qur'an, dan amal shaleh</li></ul>`
  },
  {
    id: 11, title: "Tanggung Jawab Digital sebagai Muslim",
    kategori: "integritas", kategoriLabel: "Integritas",
    ringkasan: "Kesadaran bahwa setiap aktivitas digital kita akan dipertanggungjawabkan di hadapan Allah di hari akhirat.",
    thumb: "https://placehold.co/600x350/c8e6c9/2e7d32?text=Tanggung+Jawab+Digital",
    penulis: "Ken Gayuh", tanggal: "15 Juni 2025", durasi: "9 menit baca",
    konten: `<p>Setiap perbuatan manusia akan dicatat dan dipertanggungjawabkan di hari kiamat. Prinsip ini berlaku penuh dalam konteks digital modern kita.</p><h2>Catatan Amal di Era Digital</h2>`,
    dalil: [{label:"Al-Qur'an — Az-Zalzalah: 7-8",arabic:"فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ",terjemah:"\"Barangsiapa mengerjakan kebaikan seberat zarrah akan melihat balasannya. Dan barangsiapa mengerjakan kejahatan seberat zarrah akan melihat balasannya.\" — QS. Az-Zalzalah: 7-8",source:"QS. Az-Zalzalah (99): 7-8"}],
    kontenLanjut: `<h2>Bentuk Tanggung Jawab Digital Muslim</h2><ul><li><strong>Atas konten yang dibuat</strong> — Setiap postingan akan dipertanggungjawabkan</li><li><strong>Atas konten yang disebarkan</strong> — Menyebarkan hoaks sama dengan ikut berdosa</li><li><strong>Atas waktu yang digunakan</strong> — Waktu yang terbuang adalah amanah yang disia-siakan</li></ul><p>Sebelum posting, tanya dirimu: "Apakah ini akan aku banggakan di hari akhirat?"</p>`
  }
];

// ===== NAVIGATION =====
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) { target.classList.add('active'); window.scrollTo({top:0,behavior:'smooth'}); }
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', (link.getAttribute('onclick')||'').includes("'"+page+"'"));
  });
  document.getElementById('navLinks').classList.remove('open');
  if (page === 'materi') renderMateri(materiData);
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
  const btn = document.getElementById('scrollTop');
  if (btn) btn.classList.toggle('visible', window.scrollY > 300);
});

// ===== RENDER MATERI =====
function renderMateri(data) {
  const grid = document.getElementById('materiGrid');
  if (!grid) return;
  grid.innerHTML = data.length === 0
    ? '<p style="color:var(--gray);text-align:center;padding:40px;grid-column:1/-1">Tidak ada materi yang ditemukan.</p>'
    : data.map(m => `
      <div class="materi-card" onclick="openDetail(${m.id})">
        <div class="materi-thumb">
          <img src="${m.thumb}" alt="${m.title}" loading="lazy"/>
          <span class="materi-cat">${m.kategoriLabel}</span>
        </div>
        <div class="materi-body">
          <h3>${m.title}</h3>
          <p>${m.ringkasan}</p>
          <div class="materi-meta">
            <span><i class="fas fa-user"></i> ${m.penulis}</span>
            <span><i class="fas fa-clock"></i> ${m.durasi}</span>
            <span class="read-more">Baca <i class="fas fa-arrow-right"></i></span>
          </div>
        </div>
      </div>`).join('');
}

let activeTag = 'semua';
function filterByTag(tag, btn) {
  activeTag = tag;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}
function filterMateri() { applyFilters(); }
function applyFilters() {
  const query = (document.getElementById('searchInput')?.value||'').toLowerCase();
  renderMateri(materiData.filter(m =>
    (activeTag==='semua'||m.kategori===activeTag) &&
    (!query||m.title.toLowerCase().includes(query)||m.ringkasan.toLowerCase().includes(query))
  ));
}

// ===== OPEN DETAIL =====
function openDetail(id) {
  const m = materiData.find(x => x.id === id);
  if (!m) return;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-detail').classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const dalilHTML = m.dalil.map(d => `
    <div class="dalil-box">
      <div class="dalil-label"><i class="fas fa-quran"></i> ${d.label}</div>
      <div class="dalil-arabic">${d.arabic}</div>
      <div class="dalil-trans">${d.terjemah}</div>
      <div class="dalil-source"><i class="fas fa-bookmark"></i> ${d.source}</div>
    </div>`).join('');

  document.getElementById('detailContent').innerHTML = `
    <img src="${m.thumb}" alt="${m.title}" class="detail-hero-img"/>
    <div class="detail-content">
      <span class="detail-tag">${m.kategoriLabel}</span>
      <h1>${m.title}</h1>
      <div class="detail-meta">
        <span><i class="fas fa-user"></i> ${m.penulis}</span>
        <span><i class="fas fa-calendar"></i> ${m.tanggal}</span>
        <span><i class="fas fa-clock"></i> ${m.durasi}</span>
      </div>
      <div class="detail-text">${m.konten}${dalilHTML}${m.kontenLanjut}</div>
    </div>`;

  document.getElementById('sidebarList').innerHTML = materiData
    .filter(x=>x.id!==id).slice(0,5)
    .map(x=>`<li onclick="openDetail(${x.id})">${x.title}</li>`).join('');

  document.getElementById('sidebarAyat').innerHTML = m.dalil.map(d=>`
    <div class="dalil-box">
      <div class="dalil-label">${d.label}</div>
      <div class="dalil-arabic" style="font-size:16px">${d.arabic}</div>
      <div class="dalil-source">${d.source}</div>
    </div>`).join('');
}

// ===== KUIS =====
const kuisData = [
  {soal:"Kamu melihat berita mengejutkan di grup WhatsApp keluarga. Apa yang sebaiknya kamu lakukan?",opsi:["Langsung forward ke grup lain","Cek kebenarannya dulu di sumber terpercaya","Abaikan saja","Percaya karena dari anggota keluarga"],jawaban:1,feedback:{benar:"Mashaa Allah! Tabayyun sebelum menyebar adalah perintah Al-Qur'an.",salah:"Islam memerintahkan tabayyun sebelum menyebarkan informasi."},dalil:"إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا",sumber:"QS. Al-Hujurat: 6"},
  {soal:"Teman memposting foto yang kurang baik di media sosial. Apa tindakanmu?",opsi:["Langsung komen negatif","Share ke teman lain sambil mengejek","Hubungi secara pribadi dengan sopan","Laporkan tanpa memberitahu dulu"],jawaban:2,feedback:{benar:"Luar biasa! Menasihati secara pribadi dengan hikmah adalah akhlak mulia.",salah:"Islam mengajarkan menasihati saudara secara rahasia dan penuh hikmah."},dalil:"ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ",sumber:"QS. An-Nahl: 125"},
  {soal:"Kamu sedang scrolling, lalu adzan Ashar berkumandang. Apa yang kamu lakukan?",opsi:["Lanjut scrolling, sholat nanti","Simpan HP dan segera berwudhu","Matikan suara adzan","Bilang nanti tapi terus scrolling"],jawaban:1,feedback:{benar:"Alhamdulillah! Mendahulukan sholat dari aktivitas dunia adalah tanda keimanan.",salah:"Sholat adalah tiang agama dan wajib didahulukan."},dalil:"حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَىٰ",sumber:"QS. Al-Baqarah: 238"},
  {soal:"Kamu tidak sengaja share berita hoaks. Setelah tahu itu hoaks, apa yang kamu lakukan?",opsi:["Diam saja, toh sudah terlanjur","Hapus dan segera post ralat/koreksi","Salahkan yang pertama share","Pura-pura tidak tahu"],jawaban:1,feedback:{benar:"Bagus! Berani meralat kesalahan adalah sikap amanah dan jujur.",salah:"Membiarkan hoaks beredar sama dengan ikut menyebarkan kebohongan."},dalil:"وَمَن تَابَ وَعَمِلَ صَالِحًا فَإِنَّهُ يَتُوبُ إِلَى اللَّهِ",sumber:"QS. Al-Furqan: 71"},
  {soal:"Ada orang yang mengirim foto pribadi temanmu tanpa izin ke grup. Bagaimana responmu?",opsi:["Ikut menyimpan dan menyebarkan","Diam saja","Tegur yang menyebar dan minta hapus","Komentari dengan candaan"],jawaban:2,feedback:{benar:"Tepat! Melindungi kehormatan sesama adalah bagian dari ukhuwah Islamiyah.",salah:"Islam sangat menjaga kehormatan. Menyebarkan foto tanpa izin adalah pelanggaran serius."},dalil:"وَلَا تَجَسَّسُوا وَلَا يَغْتَب بَّعْضُكُم بَعْضًا",sumber:"QS. Al-Hujurat: 12"},
  {soal:"Saat main game online, kamu kalah dan musuh mengejek. Apa reaksimu?",opsi:["Balas dengan kata-kata kasar","Lapor akunnya","Tenang, sabar, tidak membalas","Hack akunnya"],jawaban:2,feedback:{benar:"Subhanallah! Menahan amarah adalah akhlak tertinggi dalam Islam.",salah:"Orang kuat adalah yang mampu menahan amarahnya."},dalil:"وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ",sumber:"QS. Ali Imran: 134"},
  {soal:"Kamu menemukan konten meragukan tentang Islam di internet. Apa yang kamu lakukan?",opsi:["Langsung percaya dan share","Debat di kolom komentar","Cari tahu dari ulama atau sumber terpercaya","Abaikan"],jawaban:2,feedback:{benar:"Excellent! Bertanya kepada ahli adalah perintah Al-Qur'an.",salah:"Islam melarang mengikuti sesuatu tanpa ilmu. Rujuk kepada ulama."},dalil:"فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ",sumber:"QS. An-Nahl: 43"},
  {soal:"Berapa lama idealnya waktu bermain media sosial dalam sehari?",opsi:["Sepuasnya","Secukupnya, tidak mengganggu ibadah","Tidak boleh sama sekali","Minimal 5 jam"],jawaban:1,feedback:{benar:"Benar! Islam mengajarkan tawazun (keseimbangan).",salah:"Islam mengajarkan tawazun. Teknologi adalah alat bantu, bukan tujuan."},dalil:"وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ",sumber:"QS. Al-Qashash: 77"},
  {soal:"Kamu ingin menggunakan gambar dari internet untuk konten. Apa yang harus dilakukan?",opsi:["Langsung pakai saja","Gunakan gambar bebas hak cipta atau minta izin","Edit sedikit agar tidak ketahuan","Claim sebagai karya sendiri"],jawaban:1,feedback:{benar:"Tepat! Menghormati hak cipta adalah bagian dari amanah Islam.",salah:"Menggunakan karya orang tanpa izin adalah pelanggaran hak yang dilarang Islam."},dalil:"إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا",sumber:"QS. An-Nisa: 58"},
  {soal:"Kamu melihat seseorang di-bully secara online di kolom komentar. Apa tindakanmu?",opsi:["Ikut menghina","Diam dan scroll terus","Bela korban dengan baik dan laporkan","Screenshot untuk ditertawakan"],jawaban:2,feedback:{benar:"Mashaa Allah! Membela yang dizhalimi adalah kewajiban seorang muslim!",salah:"Islam mewajibkan kita membela yang dizhalimi. Diam saat melihat kezhaliman adalah persetujuan tidak langsung."},dalil:"وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ",sumber:"QS. Al-Maidah: 2"}
];

const hasilLevel = [
  {min:0,max:3,label:"Perlu Banyak Belajar",warna:"#c62828",bg:"#ffebee",desc:"Jangan sedih! Ini adalah awal perjalananmu. Pelajari materi di website ini dan terus tingkatkan akhlak digitalmu.",ayat:"وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",terjemah:'"Barangsiapa bertakwa kepada Allah, niscaya Dia akan mengadakan baginya jalan keluar." — QS. At-Thalaq: 2'},
  {min:4,max:6,label:"Cukup Baik",warna:"#e65100",bg:"#fff8e1",desc:"Akhlak digitalmu sudah cukup baik, tapi masih ada ruang berkembang. Baca lebih banyak materi!",ayat:"وَقُل رَّبِّ زِدْنِي عِلْمًا",terjemah:'"Ya Tuhanku, tambahkanlah ilmuku." — QS. Thaha: 114'},
  {min:7,max:8,label:"Baik Sekali",warna:"#2e7d32",bg:"#e8f5e9",desc:"Alhamdulillah! Akhlak digitalmu sangat baik. Teruslah istiqomah dan ajak orang lain ikut memperbaiki akhlak digitalnya.",ayat:"إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ",terjemah:'"Sesungguhnya aku diutus untuk menyempurnakan kemuliaan akhlak." — HR. Al-Baihaqi'},
  {min:9,max:10,label:"Akhlak Digital Teladan!",warna:"#1b5e20",bg:"#c8e6c9",desc:"Mashaa Allah! Sempurna! Kamu adalah teladan akhlak digital. Teruslah menjadi inspirasi bagi orang lain!",ayat:"وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",terjemah:'"Dan sesungguhnya engkau benar-benar berbudi pekerti yang agung." — QS. Al-Qalam: 4'}
];

let kuisIndex=0, kuisSkor=0, kuisJawab=false;

function startKuis() {
  kuisIndex=0; kuisSkor=0; kuisJawab=false;
  showScreen('kuis-soal'); renderSoal();
}
function showScreen(id) {
  document.querySelectorAll('.kuis-screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function renderSoal() {
  const soal=kuisData[kuisIndex], total=kuisData.length;
  document.getElementById('progressFill').style.width=(kuisIndex/total*100)+'%';
  document.getElementById('progressLabel').textContent=(kuisIndex+1)+' / '+total;
  const huruf=['A','B','C','D'];
  document.getElementById('kuisCard').innerHTML=`
    <div class="kuis-nomor">Soal ${kuisIndex+1} dari ${total}</div>
    <div class="kuis-pertanyaan">${soal.soal}</div>
    <div class="kuis-opsi">${soal.opsi.map((o,i)=>`<button class="kuis-opsi-btn" onclick="pilihJawaban(${i})"><span class="opsi-huruf">${huruf[i]}</span>${o}</button>`).join('')}</div>
    <div class="kuis-feedback" id="kuisFeedback"></div>
    <div class="kuis-next" id="kuisNext"><button class="btn-primary" onclick="nextSoal()">${kuisIndex+1<total?'Soal Berikutnya <i class="fas fa-arrow-right"></i>':'Lihat Hasil <i class="fas fa-trophy"></i>'}</button></div>`;
  kuisJawab=false;
}
function pilihJawaban(idx) {
  if(kuisJawab) return; kuisJawab=true;
  const soal=kuisData[kuisIndex];
  document.querySelectorAll('.kuis-opsi-btn').forEach((btn,i)=>{
    btn.classList.add('disabled');
    if(i===soal.jawaban) btn.classList.add('benar');
    else if(i===idx&&idx!==soal.jawaban) btn.classList.add('salah');
  });
  const benar=idx===soal.jawaban;
  if(benar) kuisSkor++;
  const fb=document.getElementById('kuisFeedback');
  fb.className='kuis-feedback show '+(benar?'benar':'salah');
  fb.innerHTML=`<strong>${benar?'✅ Benar!':'❌ Kurang Tepat'}</strong> — ${benar?soal.feedback.benar:soal.feedback.salah}<span class="dalil-kuis">${soal.dalil}</span><small style="color:var(--green-600);font-weight:600">${soal.sumber}</small>`;
  document.getElementById('kuisNext').classList.add('show');
}
function nextSoal() {
  kuisIndex++;
  if(kuisIndex<kuisData.length) renderSoal(); else showHasil();
}
function showHasil() {
  showScreen('kuis-hasil');
  const level=hasilLevel.find(l=>kuisSkor>=l.min&&kuisSkor<=l.max);
  document.getElementById('hasilCard').innerHTML=`
    <div class="hasil-skor">${kuisSkor}</div>
    <div class="hasil-dari">dari ${kuisData.length} soal</div>
    <div class="hasil-level" style="background:${level.bg};color:${level.warna}">${level.label}</div>
    <p class="hasil-desc">${level.desc}</p>
    <div class="hasil-ayat"><p class="arabic">${level.ayat}</p><p>${level.terjemah}</p></div>
    <div class="hasil-actions">
      <button class="btn-primary" onclick="startKuis()"><i class="fas fa-redo"></i> Ulangi Kuis</button>
      <button class="btn-secondary" onclick="navigate('materi')"><i class="fas fa-book-open"></i> Pelajari Materi</button>
    </div>`;
}

// ===== DARK MODE =====
function toggleDark() {
  document.body.classList.toggle('dark-mode');
  const icon=document.querySelector('.dark-toggle i');
  if(document.body.classList.contains('dark-mode')) {
    icon.className='fas fa-sun'; localStorage.setItem('darkMode','on');
  } else {
    icon.className='fas fa-moon'; localStorage.setItem('darkMode','off');
  }
}

// ===== SCROLL TO TOP =====
function scrollToTop() { window.scrollTo({top:0,behavior:'smooth'}); }

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderMateri(materiData);
  if(localStorage.getItem('darkMode')==='on') {
    document.body.classList.add('dark-mode');
    const icon=document.querySelector('.dark-toggle i');
    if(icon) icon.className='fas fa-sun';
  }
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
});
