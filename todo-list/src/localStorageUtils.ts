import { Todo } from "./types";

function loadTodos(): unknown {
  const savedTodos = localStorage.getItem("todos");

  if (savedTodos === null) {
    return [];
  }

  let parsedTodos: unknown = [];

  try {
    parsedTodos = JSON.parse(savedTodos) as unknown;
  } catch {
    parsedTodos = [];
  }

  return parsedTodos;
}

export function loadAndParseTodos(): Todo[] {
  const parsedTodos = loadTodos();

  return Array.isArray(parsedTodos) ? parsedTodos.filter(isTodo) : [];
}

export function saveTodos(todos: Todo[]): void {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function isTodo(value: unknown): value is Todo {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  if (!("id" in value) || !("text" in value) || !("done" in value)) {
    return false;
  }

  return (
    typeof value.id === "number" &&
    typeof value.done === "boolean" &&
    typeof value.text === "string"
  );
}
