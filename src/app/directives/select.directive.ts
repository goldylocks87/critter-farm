import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {

  @HostBinding('class.isSelected') isSelected = false; // adds or removes the 'isSelected' class

  @HostListener('click') toggleOpen() {
    this.isSelected = !this.isSelected;
  }
}
