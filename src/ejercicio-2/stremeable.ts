

export interface Streamable<T> {
  addMedia(media: T): void;
  getName(): string;
  getDate(): string;
  getCE(): number;
}
