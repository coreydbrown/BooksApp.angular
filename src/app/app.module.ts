import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteListComponent } from './quotes/quote-list/quote-list.component';
import { QuoteItemComponent } from './quotes/quote-list/quote-item/quote-item.component';
import {QuotesService} from "./quotes/quotes.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailsComponent,
    QuotesComponent,
    QuoteListComponent,
    QuoteItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
