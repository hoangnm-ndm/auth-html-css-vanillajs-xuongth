function register(event) {
  event.preventDefault();
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const registerData = {
    userName,
    email,
    password,
    confirmPassword,
  };
  fetch("http://localhost:8000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Xu ly logic neu can!
      console.log(data);
      alert(data.message, data.user.email);
      window.location.href = "http://127.0.0.1:5501/login.html";
    })
    .catch((error) => {
      alert("Đăng ký thất bại!");
      console.log(error);
    });
}

const formRegister = document.getElementById("register-from");
if (formRegister) {
  formRegister.addEventListener("submit", register);
}
