export type EntityId = number | string;
export type Timestmped = {
  createdAt: Date;
  updatedAt: Date;
};
export type HasId = {
  id: EntityId;
};

export type Book = HasId &
  Timestmped & {
    title: string;
    isbn: string;
    author: string;
    publisher: string;
    isAvailable: boolean;
  };

export type IsbnParts = [number, string, string];

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export type BookCreatePayload = Omit<Book, "id" | "createdAt" | "updatedAt">;
export type BookUpdatePayload = Partial<BookCreatePayload>;
export type BookPreview = Pick<Book, "id" | "title" | "author">;
