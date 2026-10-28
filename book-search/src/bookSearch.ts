import { fetchBooks } from "./books.js";
import { Book } from "./types.js";

const form = document.getElementById("search-form");
const list = document.getElementById("book-list");

let books: Book[] = [];

if (!(form instanceof HTMLFormElement)) {
  throw new Error("Element #search-form not found");
}

if (!(list instanceof HTMLUListElement)) {
  throw new Error("Element #book-list not found");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = readQuery(form);

  try {
    books = await fetchBooks(query);
    render(books);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    list.textContent = `Could not load books: ${message}`;
  }
});

function readQuery(form: HTMLFormElement): string {
  const query = new FormData(form).get("query");
  return typeof query === "string" ? query.trim().toLocaleLowerCase() : "";
}

const render = (results: Book[]): void => {
  const formattedResults = results.map((book) => {
    const item = document.createElement("li");

    item.append(` ${book.title} by ${book.authors}`);
    return item;
  });

  list.replaceChildren(...formattedResults);
};

try {
  books = await fetchBooks(readQuery(form));
  render(books);
} catch (error) {
  const message = error instanceof Error ? error.message : "Unknown error";
  list.textContent = `Could not load books: ${message}`;
}
