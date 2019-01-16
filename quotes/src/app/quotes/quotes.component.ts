import { Component, OnInit, } from '@angular/core';
import {Quotes} from '../quotes'


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotess=[
    new Quotes(1,'Most people are other people. Their thoughts are someone elses opinions, their lives a mimicry, their passions a quotation.','- Oscar Wilde',new Date(2018,1,1)),
    new Quotes(2,'To forgive is to set a prisoner free and discover that the prisoner was you.','-Lewis B. Smedes',new Date(2018,1,3)),
    new Quotes(3,'Money and success don’t change people; they merely amplify what is already there.','-Will Smith',new Date(2018,1,6)),
    new Quotes(4,'Everyone thinks of changing the world, but no one thinks of changing himself.','– Leo Tolstoy',new Date(2018,1,9)),
  ]



  addNewQuotes(quote){
        let quoteLength = this.quotess.length;
        quote.id=quoteLength+1;
        this.quotess.push(quote);

    }

  deletedQuote(toDelete,index){

              this.quotess.splice(index,1);

            }

  toogleDetails(index){
          this.quotess[index].showAuthor = !this.quotess[index].showAuthor;
      }

  constructor() { }

  ngOnInit() {
  }

}
