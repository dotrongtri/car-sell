// Toggle Compact Navbar on Scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("compact"); // Thêm kiểu compact khi cuộn
    } else {
      header.classList.remove("compact"); // Xóa kiểu compact khi ở đầu trang
    }
  });
  
  // Handle Contact Form Submission
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của biểu mẫu
  
      // Lấy giá trị từ các trường
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Hiển thị thông báo cho người dùng
      alert(
        `Cảm ơn ${name}! Chúng tôi đã nhận được tin nhắn của bạn.\nEmail: ${email}\nNội dung: ${message}`
      );
  
      // Reset biểu mẫu
      this.reset();
    });
  