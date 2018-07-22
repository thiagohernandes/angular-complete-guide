import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appHoleDirective]'
})
export class HoleDirective {

  @HostBinding('style.backgroundColor') c_colorrr = 'red';

  @HostListener('mouseenter') c_onEnterrr() {
   this.c_colorrr = 'blue';
  }

  @HostListener('mouseleave') c_onLeaveee() {
   this.c_colorrr = 'yellow';
  }

}
