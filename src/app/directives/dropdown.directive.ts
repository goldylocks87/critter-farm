import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})
export class DropdownDirective {

  @HostBinding('class.show') isOpen = false; // adds or removes the 'show' class

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
