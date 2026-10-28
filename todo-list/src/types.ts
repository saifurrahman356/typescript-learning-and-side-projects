export interface Book {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  image: string;
  url: string;
}

export interface SearchResult {
  status: string;
  total: string;
  books: Book[];
}

export type BoxColor = "white" | "lightblue" | "lightgreen";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
