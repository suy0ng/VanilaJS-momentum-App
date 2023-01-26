const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todolist = document.getElementById("todo-list");

const Todos =[]

function savedTodos() {
  localStorage.setItem("todos", JSON.stringify(Todos))
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function patinTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("spsan");
  const button = document.createElement("button");
  span.innerHTML = newTodo;
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todolist.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  Todos.push(newTodo)
  patinTodo(newTodo);
  savedTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
