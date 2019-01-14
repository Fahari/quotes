import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elem:ElementRef) {
    console.log(elem)
    this.elem.nativeElement.style.boxShadow='1px 80px 10px 20px lightgreen';
  }
}
