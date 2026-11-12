/**
 * ========================================================
 * SCRIPT INTERAKTIF WEBSITE PROFIL (TEMA TERANG)
 * ========================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 0. Sistem Pengatur Tema (Terang & Gelap) ---
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIconWrap = document.getElementById('theme-icon-wrap');
  const themeText = document.getElementById('theme-text');

  // Ikon SVG untuk Bulan (Mode Terang -> menuju Gelap) dan Matahari (Mode Gelap -> menuju Terang)
  const moonIconSvg = `<svg class="theme-svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  const sunIconSvg = `<svg class="theme-svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

  // Default tema mutlak: 'light' (tema terang)
  const savedTheme = localStorage.getItem('theme') || 'light';

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      // Pada mode gelap: tombol & ikon berbalik warna menjadi putih dengan teks/ikon hitam
      if (themeIconWrap) themeIconWrap.innerHTML = sunIconSvg;
      if (themeText) themeText.textContent = 'Terang';
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('title', 'Beralih ke Tema Terang');
        themeToggleBtn.setAttribute('aria-label', 'Beralih ke Tema Terang');
      }
    } else {
      // Pada mode terang: tombol & ikon berbalik warna menjadi hitam dengan teks/ikon putih
      if (themeIconWrap) themeIconWrap.innerHTML = moonIconSvg;
      if (themeText) themeText.textContent = 'Gelap';
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('title', 'Beralih ke Tema Gelap');
        themeToggleBtn.setAttribute('aria-label', 'Beralih ke Tema Gelap');
      }
    }
  };

  // Terapkan tema (default 'light')
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      // Putar ikon saat ditoggle
      if (themeIconWrap) {
        themeIconWrap.classList.remove('rotate-toggle');
        void themeIconWrap.offsetWidth; // Trigger reflow agar animasi berulang
        themeIconWrap.classList.add('rotate-toggle');
      }

      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    });
  }

  // --- 1. Salam Dinamis Berdasarkan Waktu Lokal ---
  const initDynamicGreeting = () => {
    const greetingElement = document.getElementById('dynamic-greeting');
    if (!greetingElement) return;

    const currentHour = new Date().getHours();
    let greeting = 'Selamat Datang';

    if (currentHour >= 4 && currentHour < 11) {
      greeting = 'Selamat Pagi';
    } else if (currentHour >= 11 && currentHour < 15) {
      greeting = 'Selamat Siang';
    } else if (currentHour >= 15 && currentHour < 18) {
      greeting = 'Selamat Sore';
    } else {
      greeting = 'Selamat Malam';
    }

    greetingElement.textContent = greeting;
  };

  // --- 2. Navigasi & Mobile Menu Toggle ---
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Tutup menu saat salah satu link diklik (khusus mobile)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });

    // Tutup menu jika klik di luar navbar
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
      }
    });
  }

  // --- 3. Navbar Efek Scroll & ScrollSpy (Indikator Menu Aktif) ---
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Tambah bayangan navbar saat scroll ke bawah
    if (scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scrollspy: update menu aktif sesuai posisi layar
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // --- 4. Filter Kategori Portofolio / Proyek ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Atur tombol aktif
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- 6. Validasi & Pengiriman Formulir Kontak ---
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitBtn = document.getElementById('submit-btn');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const clearErrors = () => {
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    nameInput.classList.remove('invalid');
    emailInput.classList.remove('invalid');
    messageInput.classList.remove('invalid');
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;

      // Validasi Nama
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameError.textContent = 'Harap masukkan nama lengkap Anda (minimal 2 karakter).';
        nameInput.classList.add('invalid');
        isValid = false;
      }

      // Validasi Email
      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Harap masukkan alamat email yang valid.';
        emailInput.classList.add('invalid');
        isValid = false;
      }

      // Validasi Pesan
      if (!messageInput.value.trim() || messageInput.value.trim().length < 8) {
        messageError.textContent = 'Harap tuliskan pesan Anda minimal 8 karakter.';
        messageInput.classList.add('invalid');
        isValid = false;
      }

      if (isValid) {
        const originalContent = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Mengirim Pesan...</span>`;

        // Simulasi pengiriman data
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalContent;

          showToast('Terima kasih! Pesan Anda telah terkirim.', 'success');
          contactForm.reset();
        }, 1000);
      }
    });
  }

  // --- 7. Tombol Scroll ke Atas (Back to Top) ---
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 8. Tahun Otomatis di Footer ---
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Inisialisasi Salam
  initDynamicGreeting();
});

// --- Fungsi Notifikasi Toast Sederhana ---
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icon = type === 'success' ? '✅' : 'ℹ️';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

  container.appendChild(toast);

  // Animasi Masuk
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Otomatis Hilang setelah 3.5 detik
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}
