import { Book, SearchResult } from "./types.js";

export function isBook(value: unknown): value is Book {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const book = value as Record<string, unknown>;

  return (
    typeof book.id === "string" &&
    typeof book.title === "string" &&
    typeof book.subtitle === "string" &&
    typeof book.authors === "string" &&
    typeof book.image === "string" &&
    typeof book.url === "string"
  );
}

export function isSearchResult(value: unknown): value is SearchResult {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const result = value as Record<string, unknown>;

  return (
    typeof result.status === "string" &&
    typeof result.total === "string" &&
    Array.isArray(result.books) &&
    result.books.every(isBook)
  );
}

export async function fetchBooks(query: string): Promise<Book[]> {
  const url = `https://www.dbooks.org/api/search/${encodeURIComponent(query)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data: unknown = await response.json();

  if (!isSearchResult(data)) {
    throw new Error("Invalid search result data");
  }

  return data.books;
}
