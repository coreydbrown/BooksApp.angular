import {RouterModule, Routes} from "@angular/router";
import {BooksComponent} from "./books/books.component";
import {QuotesComponent} from "./quotes/quotes.component";
import {NgModule} from "@angular/core";
import {BookDetailsComponent} from "./books/book-details/book-details.component";
import {BookStartComponent} from "./books/book-start/book-start.component";
import {BookEditComponent} from "./books/book-edit/book-edit.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: "full"},
  {path: 'books', component: BooksComponent, children: [
      {path: '', component: BookStartComponent},
      {path: 'new', component: BookEditComponent},
      {path: ':id', component: BookDetailsComponent},
      {path: ':id/edit', component: BookEditComponent},
    ]
  },
  {path: 'quotes', component: QuotesComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
