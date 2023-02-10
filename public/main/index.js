const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const registerName = document.getElementById("register-name");
const registerNmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

async function sendData(url, data, method, json) {
  let myHeaders = {
    "Allow-Control-Allow-Origin": "*",
  };

  if (json) {
    myHeaders["Content-Type"] = "application/json";
  }

  let req = await fetch(url, {
    method: method,
    headers: myHeaders,
    body: JSON.stringify(data),
  });

  let res = await req.json();
  console.log(res);
  if (res.message == true) {
    window.location.href = "http://localhost:3000/home";
  }
}

function submitUser(e) {
  e.preventDefault();
  const name = registerName.value;
  const email = registerNmail.value;
  const password = registerPassword.value;

  const user = {
    name,
    email,
    password,
  };

  sendData("http://localhost:3000/registerUser", user, "POST", true);
}

function submitLogin(e) {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;

  const user = {
    email,
    password,
  };

  sendData("http://localhost:3000/loginUser", user, "POST", true);
}

registerBtn.addEventListener("click", submitUser);
loginBtn.addEventListener("click", submitLogin);

async function sendData2(url, data, method, json) {
  let myHeaders = {
    "Allow-Control-Allow-Origin": "*",
  };

  if (json) {
    myHeaders["Content-Type"] = "application/json";
  }

  let req = await fetch(url, {
    method: method,
    headers: myHeaders,
    body: JSON.stringify(data),
  });
}
