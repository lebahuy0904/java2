
"use strict";

// Lấy tất cả hình ảnh trong thư viện.
const images = document.querySelectorAll(".gallery img");
const preview = document.getElementById("preview");

// Hàm hiển thị ảnh được chọn.
function showImage(event) {
  const image = event.currentTarget;

  console.log("Sự kiện kích hoạt:", event.type);
  console.log("Ảnh đang chọn:", image.alt);

  preview.replaceChildren();

  const largeImage = document.createElement("img");
  largeImage.src = image.src;
  largeImage.alt = image.alt;

  preview.appendChild(largeImage);
}

// Hàm khôi phục nội dung xem trước.
function hideImage() {
  preview.replaceChildren();

  const message = document.createElement("p");
  message.textContent =
    "Di chuột hoặc nhấn Tab đến một bức ảnh để xem ảnh tại đây.";

  preview.appendChild(message);
}

// Gắn sự kiện cho từng hình ảnh bằng vòng lặp for.
for (let i = 0; i < images.length; i++) {
  const image = images[i];

  // Cho phép tương tác bằng chuột.
  image.addEventListener("mouseover", showImage);
  image.addEventListener("mouseleave", hideImage);

  // Cho phép tương tác bằng bàn phím.
  image.addEventListener("focus", showImage);
  image.addEventListener("blur", hideImage);

  // Đảm bảo từng ảnh có thể nhận focus.
  image.setAttribute("tabindex", "0");

  console.log("Đã thiết lập sự kiện cho ảnh số", i + 1);
}

// Xử lý sự kiện khi trang được tải xong.
window.addEventListener("load", function () {
  console.log("Thư viện ảnh đã tải hoàn tất.");
  console.log("Tổng số ảnh:", images.length);
});
