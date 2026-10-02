/* =========================================
   FILE: js/main.js
   HỆ THỐNG LÕI CỦA LÂM SÀNG PRO
   ========================================= */

// 0. Tự động chèn Meta Tags cho chế độ Web App Standalone (ẩn thanh URL Safari iOS)
(function initPWAHead() {
  const metaTags = [
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'Lâm Sàng Pro' },
    { name: 'mobile-web-app-capable', content: 'yes' }
  ];

  metaTags.forEach(tagData => {
    if (!document.querySelector(`meta[name="${tagData.name}"]`)) {
      const meta = document.createElement('meta');
      meta.name = tagData.name;
      meta.content = tagData.content;
      document.head.appendChild(meta);
    }
  });
})();

// 1. HÀM LỘT BỎ DẤU TIẾNG VIỆT (Dùng cho tìm kiếm)
function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

// 2. HÀM TÌM KIẾM MODULE TRANG CHỦ
function filterModules() {
    let searchInput = document.getElementById('searchInput');
    if (!searchInput) return; 

    let filterRaw = searchInput.value.toLowerCase();
    let filterNoTone = removeVietnameseTones(filterRaw);
    
    let cards = document.getElementsByClassName('module-card');
    
    for (let i = 0; i < cards.length; i++) {
        let titleRaw = cards[i].querySelector('.module-title').innerText.toLowerCase();
        let descRaw = cards[i].querySelector('.module-desc').innerText.toLowerCase();
        
        let titleNoTone = removeVietnameseTones(titleRaw);
        let descNoTone = removeVietnameseTones(descRaw);
        
        if (titleRaw.includes(filterRaw) || descRaw.includes(filterRaw) || 
            titleNoTone.includes(filterNoTone) || descNoTone.includes(filterNoTone)) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// 3. HÀM CHÈN UI CHUNG & NÚT BACK THÔNG MINH
function loadCommonUI() {
    const uiContainer = document.getElementById('common-ui');
    if (!uiContainer) return;

    // Đọc thuộc tính data-back-url. Nếu không có, mặc định về ../index.html
    const customBackUrl = uiContainer.getAttribute('data-back-url');
    const finalBackUrl = customBackUrl ? customBackUrl : '../index.html';

    const navbarHTML = `
        <nav class="navbar navbar-custom fixed-top">
            <div class="container-fluid px-2">
                <!-- Nút Back động -->
                <button class="btn-icon" type="button" onclick="window.location.href='${finalBackUrl}'">
                    <i class="bi bi-arrow-left"></i>
                </button>
                <a class="navbar-brand mx-auto" href="../index.html">
                    <i class="bi bi-heart-pulse-fill"></i> Lâm Sàng Pro
                </a>
                <button class="btn-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu">
                    <i class="bi bi-list"></i>
                </button>
            </div>
        </nav>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="sidebarMenu">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title fw-bold text-primary">Danh mục</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="list-group list-group-flush">
                    <a href="../index.html" class="list-group-item list-group-item-action py-3"><i class="bi bi-house me-2"></i> Trang chủ</a>
                    <a href="tracuu_thuoc.html" class="list-group-item list-group-item-action py-3"><i class="bi bi-capsule me-2"></i> Tra cứu Thuốc</a>
                </div>
            </div>
        </div>
    `;

    uiContainer.innerHTML = navbarHTML;
}

// 4. HÀM KHỞI TẠO NÚT BACK TO TOP
function initBackToTop() {
    if (!document.getElementById('back-to-top')) {
        const btn = document.createElement('button');
        btn.id = 'back-to-top';
        btn.setAttribute('type', 'button');
        btn.setAttribute('aria-label', 'Về đầu trang');
        btn.innerHTML = '<i class="bi bi-arrow-up"></i>'; 
        document.body.appendChild(btn);

        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 250) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        });
    }
}

/* =================================================================
   5. TÍNH NĂNG MỚI: TỰ ĐỘNG LƯU & KHÔI PHỤC VỊ TRÍ CUỘN TRANG (NATIVE APP FEEL)
   ================================================================= */

// 1. Khi chuẩn bị rời khỏi trang (bấm link, back...), lưu vị trí cuộn hiện tại
window.addEventListener('beforeunload', function() {
    sessionStorage.setItem('scrollPosition_' + window.location.pathname, window.scrollY);
});

// 2. Khởi chạy khôi phục vị trí khi load xong DOM
document.addEventListener("DOMContentLoaded", function() {
    // Gọi hàm load Menu chung
    if (typeof loadCommonUI === "function") loadCommonUI();
    
    // Gọi hàm khởi tạo Back to top
    if (typeof initBackToTop === "function") initBackToTop();

    // Đọc vị trí đã lưu của trang hiện tại
    let savedScrollPos = sessionStorage.getItem('scrollPosition_' + window.location.pathname);
    
    if (savedScrollPos !== null) {
        // Dùng setTimeout nhỏ để đợi trình duyệt render xong giao diện (khoảng 50ms)
        setTimeout(function() {
            window.scrollTo({
                top: parseInt(savedScrollPos),
                behavior: 'instant' // QUAN TRỌNG: Dùng 'instant' (hoặc 'auto') để nhảy thẳng tới vị trí, KHÔNG dùng 'smooth' gây nhức mắt lúc mới mở trang
            });
        }, 50);
    }
});
