import {  Directive, OnInit, HostListener }  from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective{
@HostListener('class.open') isOpen=false;
@HostListener('click')  toggleOpen(){
    this.isOpen=!this.isOpen;
}
}