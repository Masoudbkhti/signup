const usernameInput = document.querySelector("#username");
const usernameLog = document.querySelector("#username-log");
const emailInput = document.querySelector("#email");
const emailLog = document.querySelector("#email-log");
const passwordInput = document.querySelector("#password");
const passwordLog = document.querySelector("#password-log");

// Username Validation

const validateUsername = (name) => {
  const username = name.target.value;
  const validPattern = /^[A-Za-z\s]+$/;

  if ((username.length < 15) & !validPattern.test(username)) {
    usernameLog.innerText =
      "Username must be at least 15 characters and contain only valid English letters.";
    usernameInput.style.border = "2px solid red";
  } else if (!validPattern.test(username)) {
    usernameLog.innerText = "Username must contain valid English letters.";
    usernameInput.style.border = "2px solid red";
  } else if (username.length < 15) {
    usernameLog.innerText = "Username must be at least 15 characters.";
    usernameInput.style.border = "2px solid red";
  } else {
    usernameLog.innerText = "";
    usernameInput.style.border = "";
  }
};

document.getElementById("username").addEventListener("input", validateUsername);

// Email Validation

const validateEmail = (emailAddress) => {
  const email = emailAddress.target.value;

  const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!validRegex.test(email)) {
    emailLog.innerText = "You must insert a valid email address.";
    emailInput.style.border = "2px solid red";
  } else {
    emailLog.innerText = "";
    emailInput.style.border = "";
  }
};

document.getElementById("email").addEventListener("input", validateEmail);

// Password Validation

const validatePassword = (pass) => {
  const password = pass.target.value;
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@]{8,}$/;
  if (!validPassword.test(password)) {
    passwordLog.innerText =
      "Password must contain at least 8 characters with at least one lowercase letter, one uppercase letter, and one digit.";
    passwordInput.style.border = "2px solid red";
  } else {
    passwordLog.innerText = "";
    passwordInput.style.border = "";
  }
};

document.getElementById("password").addEventListener("input", validatePassword);
