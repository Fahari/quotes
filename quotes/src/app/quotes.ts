export class Quotes {
  public showAuthor:boolean;
  constructor (public id:number,public name:string,public author:string,public Datex:Date){
    this.showAuthor=false
  }

}
