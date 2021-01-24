const toDoForm = document.getElementById("toDoForm");
const toDoInput = document.getElementById("toDoInput");
const toDoList = document.getElementById("toDoList");

const toDoKey = "To Dos";

let toDos = [];

const getToDo = () => {
  var stringifiedtoDos = JSON.parse(localStorage.getItem(toDoKey));
  if (stringifiedtoDos !== null) {
    stringifiedtoDos.forEach((toDo) => {
      paintToDoList(toDo.text, toDo.id);
      const toDoObj = {
        text: toDo.text,
        id: toDo.id,
      };
      toDos.push(toDoObj);
    });
  }
};

const setToDo = (toDos) => {
  localStorage.setItem(toDoKey, JSON.stringify(toDos));
};

const handleCompleteBtn = (e) => {
  const clickedToDo = e.target.parentNode;
  const ID = clickedToDo.id;
  clickedToDo.remove();
  const filteredtoDos = toDos.filter((toDo) => {
    return `${toDo.id}` !== `${ID}`;
  });
  toDos = filteredtoDos;
  setToDo(toDos);
};

const unclickStar = (e) => {
  const clickedBtn = e.target;
  clickedBtn.innerHTML = "🤍";
  clickedBtn.addEventListener("click", handleStar);
};

const handleStar = (e) => {
  const clickedBtn = e.target;
  clickedBtn.innerHTML = "💛";
  toDoList.insertBefore(clickedBtn.parentNode, toDoList.firstElementChild);
  clickedBtn.removeEventListener("click", handleStar);
  clickedBtn.addEventListener("click", unclickStar);
};

const paintToDoList = (value, ID) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  const star = document.createElement("button");
  const span = document.createElement("span");
  button.innerHTML = "🔘";
  star.innerHTML = "🤍";
  span.innerText = value;
  li.appendChild(button);
  li.appendChild(span);
  li.appendChild(star);
  toDoList.appendChild(li);
  button.id = ID;
  star.id = ID;
  li.id = ID;
  button.addEventListener("click", handleCompleteBtn);
  star.addEventListener("click", handleStar);
};

const handleToDoSubmit = (e) => {
  e.preventDefault();
  const value = toDoInput.value;
  const ID = Date.now();
  paintToDoList(value, ID);
  toDoInput.value = "";
  const toDoObj = {
    text: value,
    id: ID,
  };
  toDos.push(toDoObj);
  setToDo(toDos);
};

function init() {
  getToDo();
  toDoForm.addEventListener("submit", handleToDoSubmit);
}
init();
