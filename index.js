// DOM Elements
const userForm = document.getElementById("userForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const roleSelect = document.getElementById("role");
const successMessage = document.getElementById("successMessage");
const themeToggle = document.getElementById("themeToggle");
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

// Event Listeners
userForm.addEventListener("submit", handleFormSubmit);
themeToggle.addEventListener("click", toggleTheme);
incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);

// Input validation listeners
usernameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
roleSelect.addEventListener("change", validateRole);

// Counter value
let counterValue = 0;

// Form validation functions
function validateUsername() {
  const username = usernameInput.value.trim();
  const error = document.getElementById("username-error");

  if (username.length < 3) {
    error.style.display = "block";
    return false;
  } else {
    error.style.display = "none";
    return true;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const error = document.getElementById("email-error");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    error.style.display = "block";
    return false;
  } else {
    error.style.display = "none";
    return true;
  }
}

function validatePassword() {
  const password = passwordInput.value;
  const error = document.getElementById("password-error");

  if (password.length < 6) {
    error.style.display = "block";
    return false;
  } else {
    error.style.display = "none";
    return true;
  }
}

function validateRole() {
  const role = roleSelect.value;
  const error = document.getElementById("role-error");

  if (role === "") {
    error.style.display = "block";
    return false;
  } else {
    error.style.display = "none";
    return true;
  }
}

// Form submission handler
function handleFormSubmit(event) {
  event.preventDefault();

  // Validate all fields
  const isUsernameValid = validateUsername();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isRoleValid = validateRole();

  // If all validations pass
  if (isUsernameValid && isEmailValid && isPasswordValid && isRoleValid) {
    // Show success message
    successMessage.style.display = "block";

    // Reset form after 3 seconds
    setTimeout(() => {
      userForm.reset();
      successMessage.style.display = "none";
    }, 3000);
  }
}

// Theme toggle function
function toggleTheme() {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeToggle.textContent = "Toggle Light Mode";
  } else {
    themeToggle.textContent = "Toggle Dark Mode";
  }
}

// Counter functions
function incrementCounter() {
  counterValue++;
  updateCounterDisplay();
}

function decrementCounter() {
  counterValue--;
  updateCounterDisplay();
}

function updateCounterDisplay() {
  counterDisplay.textContent = counterValue;

  // Add a little animation effect
  counterDisplay.style.transform = "scale(1.2)";
  setTimeout(() => {
    counterDisplay.style.transform = "scale(1)";
  }, 100);
}
