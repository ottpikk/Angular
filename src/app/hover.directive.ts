import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sdaHover]'
})
export class HoverDirective {

  constructor(private ref: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter() {
this.renderer.setStyle(this.ref.nativeElement, 'background-color', 'lightgray');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.ref.nativeElement, 'background-color', 'white');
  }
}
