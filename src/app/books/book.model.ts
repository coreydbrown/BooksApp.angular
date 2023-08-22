export class Book {
  public title: string;
  public author: string;
  public description: string;
  public imagePath: string;

  constructor(title: string, author: string, description: string, imagePath: string) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.imagePath = imagePath;
  }
}
