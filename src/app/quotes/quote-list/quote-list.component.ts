import {Component, OnInit} from '@angular/core';
import {Quote} from "../quote.model";
import {QuotesService} from "../quotes.service";

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit{
  quotes: Quote[];

  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.quotes = this.quotesService.getQuotes()
  }
}
