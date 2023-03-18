import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private item:ElementRef) {
    let dom = item.nativeElement;  //DOM = Document Object Model
    dom.style.backgroundColor = "orange";
    dom.innerHTML = "Custom Directive";
  }

}
