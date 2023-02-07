const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todolist = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let Todos = [];

function savedTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(Todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  Todos = Todos.filter((toDo) => parseInt(toDo.id) !== parseInt(li.id));
  savedTodo();
}

function patinTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("spsan");
  const button = document.createElement("button");
  span.innerHTML = newTodo.text;
  button.innerText = "  ❌  ";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todolist.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  Todos.push(newTodoObj);
  patinTodo(newTodoObj);
  savedTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  Todos = parsedTodos;
  parsedTodos.forEach(patinTodo);
}
