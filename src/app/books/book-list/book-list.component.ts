import {Component, OnInit} from '@angular/core';
import {Book} from "../book.model";
import {BooksService} from "../books.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }

  onNewBook() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
