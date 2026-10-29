import type {
  ApiResponse,
  Book,
  BookCreatePayload,
  BookPreview,
  EntityId,
} from "./types.js";

export async function fetchBooks(): Promise<ApiResponse<BookPreview[]>> {
  return Promise.resolve({
    status: 200,
    message: "Success",
    data: [
      {
        id: "1",
        title: "Clean Code",
        author: "Robert C. Martin",
      },
    ],
  });
}

export async function fetchBook(id: EntityId): Promise<ApiResponse<Book>> {
  return Promise.resolve({
    status: 200,
    message: "Success",
    data: {
      id: id,
      title: "Clean Code",
      author: "Robert C. Martin",
      createdAt: new Date(),
      updatedAt: new Date(),
      publisher: "O really",
      isbn: "",
      isAvailable: true,
    },
  });
}

export async function createBook(
  _payload: BookCreatePayload,
): Promise<ApiResponse<Book>> {
  return Promise.resolve({
    status: 200,
    message: "Success",
    data: {
      id: 1,
      title: "Clean Code",
      author: "Robert C. Martin",
      createdAt: new Date(),
      updatedAt: new Date(),
      publisher: "O really",
      isbn: "",
      isAvailable: true,
    },
  });
}
