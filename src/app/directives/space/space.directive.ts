import { Directive, ElementRef, HostListener, NgModule } from '@angular/core';

@Directive({
  selector: '[appSpace]'
})
export class SpaceDirective {
  constructor(private _el: ElementRef) {}
  @HostListener('keydown', ['$event']) keydown(e) {
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }
}

@NgModule({
  imports: [
  ],
  declarations: [SpaceDirective],
  exports: [SpaceDirective]
})
export class SpaceDirectiveModule { }
