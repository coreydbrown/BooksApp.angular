import {Quote} from "./quote.model";

export class QuotesService {
  private quotes: Quote[] = [
    new Quote("1_book", "1_author", "1_quote_content"),
    new Quote("2_book", "2_author", "2_quote_content")
  ]

  getQuotes() {
    return this.quotes.slice();
  }
}
