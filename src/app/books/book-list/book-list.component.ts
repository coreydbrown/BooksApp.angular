import { Component } from '@angular/core';
import {Book} from "../book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [
    new Book("Salem's Lot", "Stephen King", "An awesome vampire book", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327891565i/11590.jpg"),
    new Book("Salem's Lot", "Stephen King", "An awesome vampire book", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327891565i/11590.jpg")
  ]
}
