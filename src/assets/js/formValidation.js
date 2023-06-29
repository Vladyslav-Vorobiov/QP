const formEl = document.querySelector(".form");
const inputNameEl = document.getElementById("formInputName");
const inputEmailEl = document.getElementById("formInputEmail");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

function setError(element, message) {
  const errorEl = element.nextElementSibling;
  errorEl.innerText = message;
  element.classList.add("error");
  element.classList.remove("success");
}

function setSuccess(element) {
  const errorEl = element.nextElementSibling;
  errorEl.innerText = "";
  element.classList.add("success");
  element.classList.remove("error");
}

function isValidEmail(email) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
}

function validateInputs() {
  const nameValue = inputNameEl.value.trim();
  const emailValue = inputEmailEl.value.trim();

  if (nameValue === "") {
    setError(inputNameEl, "Name is required");
  } else if (nameValue.length < 2 || nameValue.length > 20) {
    setError(inputNameEl, "From 2 to 20 chars");
  } else {
    setSuccess(inputNameEl);
  }

  if (emailValue === "") {
    setError(inputEmailEl, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(inputEmailEl, "Incorrect email type");
  } else {
    setSuccess(inputEmailEl);
  }
}
