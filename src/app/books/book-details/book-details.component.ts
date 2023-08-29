import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../book.model";
import {BooksService} from "../books.service";
import {Quote} from "../../quotes/quote.model";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
  @Input("selectedBook") book: Book;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
  }

  onAddQuoteToFavQuotes(quote: Quote) {
    this.booksService.addQuoteToFavQuotes(quote);
  }
}
