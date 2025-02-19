document.querySelector(".register-btn").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Redirecting to the registration page...");
    window.location.href = "register.html"; // Điều hướng sang trang đăng ký (cần tạo thêm file register.html)
});
