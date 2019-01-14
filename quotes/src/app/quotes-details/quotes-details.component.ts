import { Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quote:Quotes;
  @Output() toDelete= new EventEmitter<boolean>();

  quoteDelete(del:boolean){
    this.toDelete.emit(del);
  }
upVote=0;
downVote=0;
upvote(){
  this.upVote=this.upVote +1;
}
downvote(){
  this.downVote=this.downVote +1;
}
  constructor() { }

  ngOnInit() {
  }

}
