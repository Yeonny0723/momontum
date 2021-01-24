const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

const nameKey = "registered name";

const paintName = (value) => {
  if (value) {
    greeting.innerText = `Hi, ${value}`;
  }
};

const getName = () => {
  const nameLS = localStorage.getItem(nameKey);
  paintName(nameLS);
};

const setName = (value) => {
  localStorage.setItem(nameKey, value);
};

const removeForm = () => {
  if (greeting.innerText !== "") {
    nameForm.remove();
  }
};

const handleNameSubmit = (e) => {
  e.preventDefault();
  const nameValue = nameInput.value;
  paintName(nameValue);
  setName(nameValue);
  removeForm();
};

function init() {
  nameForm.addEventListener("submit", handleNameSubmit);
  getName();
  removeForm();
}
init();
