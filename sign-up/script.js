const createBtn = document.querySelector(".create-account-btn");
createBtn.addEventListener("click", validatePasswords);
const invalidLabel = document.createElement("label");

function validatePasswords() {
  const passwordInput = document.querySelector("#password-input");
  const confirmPasswordInput = document.querySelector(
    "#confirm-password-input"
  );
  const formGroup = passwordInput.parentNode;

  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;

  if (passwordValue !== confirmPasswordValue) {
    passwordInput.className = "invalid-password";
    confirmPasswordInput.className = "invalid-password";

    invalidLabel.className = "error-not-matching";
    invalidLabel.htmlFor = "password-input";
    invalidLabel.textContent = "* Passwords do not match.";
    formGroup.appendChild(invalidLabel);
  }
}
