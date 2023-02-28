const throttle = require('lodash.throttle');
const emailLabel = document.querySelector('input[name=email]');
const messageLabel = document.querySelector('textarea[name=message]');
const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state"
const formObj = {};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', throttle(onFormSubmit, 500));

populate();

function onFormInput(event) {
  formObj[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formObj));
}

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formObj);
}

function populate() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData.email) {
    formObj.email = savedData.email;
    emailLabel.value = savedData.email;
  }

  if (savedData.message) {
    formObj.message = savedData.message;
    messageLabel.value = savedData.message;
  }
}
