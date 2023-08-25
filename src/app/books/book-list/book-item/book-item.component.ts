import {Component, Input} from '@angular/core';
import {Book} from "../../book.model";
import {BooksService} from "../../books.service";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() book: Book;

  constructor(private booksService: BooksService) {}

  onSelected() {
    this.booksService.bookSelected.emit(this.book);
  }
}
