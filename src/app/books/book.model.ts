import {Quote} from "../quotes/quote.model";

export class Book {
  public title: string;
  public author: string;
  public description: string;
  public imagePath: string;
  public quotes: Quote[];

  constructor(title: string, author: string, description: string, imagePath: string, quotes: Quote[]) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.imagePath = imagePath;
    this.quotes = quotes;
  }
}
