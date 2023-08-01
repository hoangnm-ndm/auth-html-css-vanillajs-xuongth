function login(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const loginData = {
    email,
    password,
  };
  fetch("http://localhost:8000/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // authorization: "Bearer token",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Xu ly logic neu can!
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", JSON.stringify(data.accessToken));
        alert(data.message);
      }
    })
    .catch(() => alert("Đăng nhập thất bại!"));
}

const formLogin = document.getElementById("login-form");
if (formLogin) {
  formLogin.addEventListener("submit", login);
}
