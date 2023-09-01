import {Component, OnInit} from '@angular/core';
import {Book} from "../book.model";
import {BooksService} from "../books.service";
import {Quote} from "../../quotes/quote.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
  book: Book;
  id: number;

  constructor(private booksService: BooksService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"]
      this.book = this.booksService.getBook(this.id);
    })
  }

  onAddQuoteToFavQuotes(quote: Quote) {
    this.booksService.addQuoteToFavQuotes(quote);
  }
}
