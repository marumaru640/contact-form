const form = document.querySelector("form");
const queryTypeInputs = document.querySelectorAll('input[name="query-type"]');
const queryTypeContainer = document.querySelector(".query-type-container");
const consentCheckBox = document.getElementById("consent");
const consentContainer = document.querySelector(".checkbox-container");
const successMessage = document.querySelector(".success-message");

const validateField = (inputEl, containerEl) => {
  const isEmpty = inputEl.value.trim() === "";
  containerEl.classList.toggle("error", isEmpty);
  return !isEmpty;
};

const validateQueryType = () => {
  const isChecked = Array.from(queryTypeInputs).some((input) => input.checked);
  queryTypeContainer.classList.toggle("error", !isChecked);
  return isChecked;
};

const validateConsent = () => {
  const isChecked = consentCheckBox.checked;
  consentContainer.classList.toggle("error", !isChecked);
  return isChecked;
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const isFirstNameValid = validateField(
    document.getElementById("first-name-input"),
    document.querySelector(".first-name-container")
  );

  const isLastNameValid = validateField(
    document.getElementById("last-name-input"),
    document.querySelector(".last-name-container")
  );

  const isEmailValid = validateField(
    document.getElementById("email-input"),
    document.querySelector(".email-container")
  );

  const isQueryTypeValid = validateQueryType();

  const isMessageValid = validateField(
    document.getElementById("message"),
    document.querySelector(".message-container")
  );

  const isConsentValid = validateConsent();

  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isQueryTypeValid &&
    isMessageValid &&
    isConsentValid
  ) {
    successMessage.classList.remove("hidden");
    form.reset();
  }

  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 5000);
};

form.addEventListener("submit", handleFormSubmit);
