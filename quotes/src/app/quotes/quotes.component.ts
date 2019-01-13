import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotess=[
    new Quotes(1,'Most people are other people. Their thoughts are someone else’s opinions, their lives a mimicry, their passions a quotation.'),
    new Quotes(2,'To forgive is to set a prisoner free and discover that the prisoner was you.'),
    new Quotes(3,'Money and success don’t change people; they merely amplify what is already there.'),
    new Quotes(4,'Everyone thinks of changing the world, but no one thinks of changing himself.'),
  ]
  constructor() { }

  ngOnInit() {
  }

}