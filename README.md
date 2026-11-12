# Website Profil & Portofolio (Tema Terang)

Website profil modern, responsif, dan siap publik dengan tema terang (*clean light theme*) yang dibangun menggunakan **HTML5, CSS3 murni, dan JavaScript (Vanilla JS)**.

---

## 🌟 Fitur Utama
- **Dukungan Dua Tema (Terang & Gelap)**: Pengguna dapat mengganti tema kapan saja melalui tombol di pojok kanan atas, dengan tema terang (*light mode*) sebagai default.
- **Warna Ikon & Tombol Berbalik Otomatis**: Tombol dan ikon tema akan secara otomatis membalik warnanya (hitam di tema terang, putih di tema gelap).
- **Desain Responsif**: Tampilan rapi dan optimal di layar smartphone, tablet, maupun komputer desktop.
- **Interaktivitas JavaScript**:
  - *Dynamic Greetings*: Sapaan pembuka otomatis menyesuaikan waktu lokal (Pagi, Siang, Sore, Malam).
  - *Filter Portofolio*: Menyaring proyek berdasarkan kategori secara instan tanpa reload.
  - *Validasi Form Kontak*: Pengecekan input nama, email, dan pesan langsung dari browser.
  - *ScrollSpy & Navigasi Mulus*: Indikator navbar aktif secara otomatis mengikuti posisi layar pengguna saat menggulir (*scroll*).
- **Siap Publik & SEO**: Dilengkapi meta tag OpenGraph dan deskripsi untuk kemudahan berbagi di media sosial.

---

## 📁 Struktur Berkas

```
profil-web/
├── index.html             # Struktur halaman, konten profil, proyek, dan formulir
├── style.css              # Desain tema terang, variabel warna, layout responsif
├── script.js              # Logika interaktif JS (menu, greeting, filter, toast, form)
├── profile.jpeg           # Foto profil pengguna
├── binary-transition.svg  # Gambar vektor dekorasi biner transisi (bebas lag)
└── README.md              # Panduan penggunaan dan publikasi
```

---

## 🚀 Cara Menjalankan Secara Lokal

1. **Buka Langsung di Browser**:
   - Buka folder `profil-web` di File Explorer Anda.
   - Klik ganda pada berkas `index.html`. Halaman web akan langsung terbuka di browser Anda (Chrome, Edge, Firefox, dll).

2. **Atau Menggunakan Live Server / Python**:
   Jika Anda memiliki Python, buka terminal di folder ini dan jalankan:
   ```bash
   python -m http.server 3000
   ```
   Lalu buka `http://localhost:3000` di browser.

---

## ✏️ Cara Mengubah Konten Anda

Semua konten dapat diubah dengan mudah di berkas `index.html`:
- **Foto Profil**: Ganti atribut `src` pada tag `<img>` di bagian `#hero` (`id="profile-img"`) dengan foto Anda sendiri.
- **Nama & Bio**: Ubah teks di dalam elemen `<h1>` dan `<p class="hero-subtitle">`.
- **Media Sosial & Email**: Ubah tautan akun GitHub, LinkedIn, Twitter/X di bagian `#contact` dan ubah atribut `data-email` pada tombol salin email.
- **Daftar Karya/Portofolio**: Tambahkan atau ubah elemen `<article class="project-card">` sesuai karya yang ingin Anda tampilkan.

---

## 🌐 Cara Mempublikasikan ke Publik (Gratis)

Web ini statis sehingga dapat dihosting gratis di berbagai penyedia layanan:
1. **GitHub Pages**:
   - Buat repositori baru di GitHub (misal: `portofolio-saya`).
   - Unggah berkas `index.html`, `style.css`, dan `script.js`.
   - Buka menu **Settings > Pages** di GitHub, pilih branch `main`, lalu simpan. Website Anda akan aktif secara publik di alamat `https://username.github.io/portofolio-saya`.
2. **Vercel / Netlify**:
   - Kunjungi [Vercel](https://vercel.com) atau [Netlify](https://netlify.com).
   - Cukup *drag and drop* folder `profil-web` ini untuk langsung mendapatkan domain publik gratis dengan HTTPS (SSL).
