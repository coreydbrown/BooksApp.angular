import {Component, Input} from '@angular/core';
import {Quote} from "../../quote.model";

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent {
  @Input() quote: Quote;
}
