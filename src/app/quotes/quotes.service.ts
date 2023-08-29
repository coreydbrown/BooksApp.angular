import {Quote} from "./quote.model";

export class QuotesService {
  private quotes: Quote[] = []

  getQuotes() {
    return this.quotes;
  }

  addQuote(quote: Quote) {
    this.quotes.push(quote);
  }
}
