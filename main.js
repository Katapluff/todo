// ! Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// ! Eventlisteners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// ! Functions

function addTodo(e) {
  // sorgt das die Seite nicht mehr beim klicken neu lädt.
  e.preventDefault();

  // erstellt eine Div mit der klasse 'todo'
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // erstellt eine klasse und fügt zusätzlich einen text in der LI hinzu
  const newTodo = document.createElement("li");
  // * einen klasse erstellt für die LI
  newTodo.classList.add("todo-item");
  // * fügt das Value des Inputs hinzu als Text.
  newTodo.innerText = todoInput.value;
  // * schiebt die LI in die DIV hinein.
  todoDiv.appendChild(newTodo);

  // Check Mark
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // schiebt die Div in die UL hinein.
  todoList.appendChild(todoDiv);

  // Input Feld Leeren;

  todoInput.value = "";
}
// Delete Function
function deleteCheck(e) {
  const item = e.target;

  // Remove item

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //todo.remove();

    // * Animation zum entfernen

    todo.classList.add("fall");

    // * transitionend remove
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // check animation
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
