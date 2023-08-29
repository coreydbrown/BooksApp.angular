export class Quote {
  public book: string;
  public author: string;
  public content: string;

  constructor(book: string, author: string, content: string) {
    this.book = book;
    this.author = author;
    this.content = content;
  }
}
