


import {NgModule, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnlyCharacter]'
})
export class OnlyCharactersDirective {
  @Input() spaceAllow: boolean; 
  private regex: RegExp = new RegExp(/^[a-zA-Z]+$/);
  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home','ArrowLeft','ArrowRight'];

  constructor(private el: ElementRef) {
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.which === 32 && event.target['selectionStart'] === 0) { // not allowing space from the starting      
      return false;
    }
    if(this.spaceAllow){ //for allowing space in between
      this.regex = new RegExp(/^[a-zA-Z ]+$/);
    }
  
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

}

@NgModule({
  imports: [
  ],
  declarations: [OnlyCharactersDirective],
  exports: [OnlyCharactersDirective]
})
export class CharactersDirectiveModule { }
