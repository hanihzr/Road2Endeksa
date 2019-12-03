import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[ndskaButton]'
})
export class ButtonDirective {
  @Input() color: string = '#2980b9';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this._color = this.color;
  }

  @HostBinding('style.background-color') _color: string = this.color;

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0.8');
  }
  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1');
  }
}
