const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const mobileInput = document.getElementById("mobile");
const form = document.getElementById("registerForm");
const message = document.getElementById("message");

function validatePassword(password) {
  const upper = /[A-Z]/.test(password);
  const lower = /[a-z]/.test(password);
  const number = /[0-9]/.test(password);
  const special = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const length = password.length >= 8;
  return upper && lower && number && special && length;
}

passwordInput.addEventListener("input", () => {
  if (validatePassword(passwordInput.value)) {
    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");
  } else {
    passwordInput.classList.remove("valid");
    passwordInput.classList.add("invalid");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  if (nameInput.value.trim().length < 3) {
    nameInput.classList.add("invalid");
    valid = false;
  } else {
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add("invalid");
    valid = false;
  } else {
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
  }

  const mobilePattern = /^[0-9]{10}$/;
  if (!mobilePattern.test(mobileInput.value)) {
    mobileInput.classList.add("invalid");
    valid = false;
  } else {
    mobileInput.classList.remove("invalid");
    mobileInput.classList.add("valid");
  }

  if (!validatePassword(passwordInput.value)) {
    passwordInput.classList.add("invalid");
    valid = false;
  }

  if (valid) {
    message.style.display = "block";
    form.reset();
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
      input.classList.remove("valid", "invalid");
    });
  } else {
    message.style.display = "none";
  }
});
