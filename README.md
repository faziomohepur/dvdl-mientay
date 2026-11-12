# Dịch Vụ Du Lịch Miền Tây

Website giới thiệu nhà xe dịch vụ – xe hợp đồng 4 – 7 chỗ tại Rạch Giá – An Giang. Hotline: **0775 856 456** – Zalo: **0328 18 10 85**.

## Nội dung trang
- Thanh menu dính trên đầu trang (logo, menu, hotline – hiệu ứng nổi lên khi rê chuột)
- Form đặt xe online (Netlify Forms)
- Các tuyến xe: tour du lịch nhiều ngày (7 địa danh) và hợp đồng trong ngày kèm giá
- Loại phương tiện: 3 xe động cơ + 3 xe điện, hiệu ứng xe chạy ra rồi dừng lại trên vạch kẻ đường
- Bảng giá công khai (nội ô Rạch Giá < 20km: 4 chỗ 13.000đ/km, 7 chỗ 15.000đ/km)
- Đánh giá khách hàng
- Chân trang theo chuẩn website chạy Google Ads + trang Chính sách (`/chinh-sach`)
- 2 nút Gọi / Zalo dính giữa cuối màn hình

## Công nghệ
- HTML, CSS, JavaScript thuần – không cần bước build
- Netlify Forms nhận yêu cầu đặt xe (xem trong Netlify → Forms → `dat-xe`)
- Hình ảnh lưu cục bộ trong `assets/img/` (không dùng CDN ngoài)

## Chạy thử trên máy
Mở `index.html` bằng trình duyệt, hoặc chạy `netlify dev` để thử cả form.

## Cần bổ sung
- Các mục đang để `...` ở chân trang và trang chính sách: địa chỉ, mã số thuế/GPKD, người đại diện, email, chính sách huỷ, số tài khoản.
- Thay đánh giá mẫu bằng đánh giá thật của khách; thay ảnh minh hoạ bằng ảnh chụp xe thật của nhà xe (giữ nguyên tên file).
- Gắn tên miền phụ `*.tmc.io.vn` trong Netlify → Domain management.
- Bật thông báo email khi có đơn đặt xe: Netlify → Forms → Form notifications.

Yêu cầu gốc: `docs/YEU-CAU.md`.
