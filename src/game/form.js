const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const fileInput = document.getElementById('file-input');
const agreementInput = document.getElementById('agreement');
const fileTextBlock = document.getElementById('file-text');
const formFileBlock = document.getElementById('form-file');

let name = '';
let email = '';
let agreement = false;
let file = null;

const checkEmailValid = () => (/\w{3,}@\w{3,}\.\w{2,3}/gi).test(email);
const checkNameInput = () => name ? nameInput.classList.remove('game__input_error') : nameInput.classList.add('game__input_error');
const checkEmailInput = () => (email && checkEmailValid()) ? emailInput.classList.remove('game__input_error') : emailInput.classList.add('game__input_error');
const checkFileInput = () => file ? formFileBlock.classList.remove('game__form-file_error') : formFileBlock.classList.add('game__form-file_error');

const changeName = (e) => {
  name = e.currentTarget.value;
  checkNameInput();
}

const changeEmail = (e) => {
  email = e.currentTarget.value;
  checkEmailInput();
}

const changeFile = (e) => {
  if (e.currentTarget.files[0]) {
    file = e.currentTarget.files[0];
    fileTextBlock.innerText = `${e.currentTarget.files[0].name}`;
  } else {
    file = null;
    fileTextBlock.innerText = `Прикрепить скриншот`;
  }
  checkFileInput();
}

const changeAgreement = (e) => {
  agreement = e.currentTarget.checked;
}

const submitForm = (e) => {
  e.preventDefault();
  if (name && email && agreement && file) {
    alert(`Прикреплённый файл - ${file.name}`);
  }
}

form.addEventListener('submit', submitForm);
nameInput.addEventListener('input', changeName);
emailInput.addEventListener('input', changeEmail);
fileInput.addEventListener('change', changeFile);
agreementInput.addEventListener('change', changeAgreement);