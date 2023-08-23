import {Component, EventEmitter, Output} from '@angular/core';
import {Book} from "../book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [
    new Book("Salem's Lot", "Stephen King", "An awesome vampire book", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327891565i/11590.jpg"),
    new Book("The Stand", "Stephen King", "An awesome apocalyptic book", "https://m.media-amazon.com/images/I/81c8No6mSPL._AC_UF1000,1000_QL80_.jpg")
  ]
  @Output() selectBook = new EventEmitter<Book>();

  onBookSelected(book: Book) {
    this.selectBook.emit(book);
  }
}
