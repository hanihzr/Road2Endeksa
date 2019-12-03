import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[ndskaButton]'
})
export class ButtonDirective implements OnInit {
  @Input() color: string = '#2980b9';

  @HostBinding('style.background-color') _color: string = this.color;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this._color = this.color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0.8');
  }
  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1');
  }
}
