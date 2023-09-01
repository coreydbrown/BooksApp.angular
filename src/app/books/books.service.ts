import {Book} from "./book.model";
import {Injectable} from "@angular/core";
import {Quote} from "../quotes/quote.model";
import {QuotesService} from "../quotes/quotes.service";

@Injectable()
export class BooksService {
  private books: Book[] = [
    new Book(
      "Salem's Lot",
      "Stephen King",
      "An awesome vampire book",
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327891565i/11590.jpg",
      [
        new Quote("Salem's Lot", "Stephen King", "this is quote #1"),
        new Quote("Salem's Lot", "Stephen King", "this is quote #2")
      ]),
    new Book(
      "The Stand",
      "Stephen King",
      "An awesome apocalyptic book",
      "https://m.media-amazon.com/images/I/81c8No6mSPL._AC_UF1000,1000_QL80_.jpg",
      [
        new Quote("The Stand", "Stephen King", "this is quote #1"),
        new Quote("The Stand", "Stephen King", "this is quote #2")
      ])
  ]

  constructor(private quotesService: QuotesService) {}

  getBook(index: number) {
    return this.books[index];
  }

  getBooks() {
    return this.books.slice();
  }

  addQuoteToFavQuotes(quote: Quote) {
    this.quotesService.addQuote(quote);
  }
}
