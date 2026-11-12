// Dịch Vụ Du Lịch Miền Tây – tương tác trang
(function () {
  const head = document.querySelector('.site-head');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  // Bóng đổ cho thanh menu khi cuộn
  const onScroll = () => head.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menu di động
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  // Nút "Đặt xe" điền sẵn điểm đến / loại xe vào form
  const form = document.querySelector('.booking-form');
  const dest = document.getElementById('diem-den');
  const car = document.getElementById('loai-xe');
  document.querySelectorAll('.link-book').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.dest && dest) dest.value = btn.dataset.dest;
      if (btn.dataset.car && car) car.value = btn.dataset.car;
      if (form) {
        form.classList.remove('flash');
        void form.offsetWidth;
        form.classList.add('flash');
      }
    });
  });

  // Ngày đi tối thiểu là hôm nay
  const date = form && form.querySelector('input[type="date"]');
  if (date) {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    date.min = d.toISOString().slice(0, 10);
  }

  // Hiệu ứng xuất hiện khi cuộn + xe chạy trên thiết bị cảm ứng
  const touch = window.matchMedia('(hover: none)').matches;
  const targets = document.querySelectorAll('.tour-card, .day-card, .car-card, .price-card, .review, .section-head');
  targets.forEach(el => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        if (touch && e.target.classList.contains('car-card')) e.target.classList.add('drive');
        io.unobserve(e.target);
      });
    }, { threshold: 0.15 });
    targets.forEach(el => io.observe(el));
  } else {
    targets.forEach(el => el.classList.add('in'));
  }

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

  // Chặn chuột phải
  document.addEventListener('contextmenu', event => event.preventDefault());

  // Chặn các phím tắt F12, Ctrl+U, Ctrl+Shift+I
  document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();
    }
  });
         /* End Anti Copy Source  */