import { loadAndParseTodos, saveTodos } from "./localStorageUtils.js";
import { Todo } from "./types.js";

const todos: Todo[] = loadAndParseTodos();
render(todos);

const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

if (!(addTodoButton instanceof HTMLButtonElement)) {
  throw new Error("Elemnt #add-todo not fount");
}

if (!(todoList instanceof HTMLUListElement)) {
  throw new Error("Element #todo-list not found");
}

todoList.addEventListener("click", (event) => {
  const target = event.target;

  if (target instanceof HTMLInputElement && target.type === "checkbox") {
    const li = target.closest("li");
    const id = Number(li?.dataset.id);
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
      todo.done = target.checked;
      renderAndSave(todos);
    }
  }

  if (target instanceof HTMLButtonElement) {
    const li = target.closest("li");
    const id = Number(li?.dataset.id);

    const index = todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      todos.splice(index, 1);
      renderAndSave(todos);
    }
  }
});

addTodoButton.addEventListener("click", (event) => {
  const todoInput = document.getElementById("todo-input");

  if (!(todoInput instanceof HTMLInputElement)) {
    throw new Error("Elemnt #todo-input not fount");
  }

  const text = todoInput.value.trim();

  if (text === "") {
    return;
  }

  const todo: Todo = {
    id: Date.now(),
    text: text,
    done: false,
  };

  todos.push(todo);
  renderAndSave(todos);
  todoInput.value = "";
});

function render(todos: Todo[]): void {
  const todoList = document.getElementById("todo-list");

  if (!(todoList instanceof HTMLUListElement)) {
    return;
  }

  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.dataset.id = String(todo.id);
    li.style.textDecoration = todo.done ? "line-through" : "none";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    const text = document.createElement("span");
    text.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    //deleteButton.className = "delete-button";

    li.append(checkbox, text, deleteButton);
    todoList.append(li);
  });
}

function renderAndSave(todos: Todo[]) {
  saveTodos(todos);
  render(todos);
}
