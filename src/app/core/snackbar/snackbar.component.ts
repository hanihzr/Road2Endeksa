import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'ndska-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  displayMessage: string;

  @Input() snackbarColor: string = '#2c3e50';

  @ViewChild('snackbar', { static: false }) snackbar: ElementRef;

  @Input() set message(value: string) {
    this.displayMessage = value;
    if (value) {
      this.show();
    }
  }

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  show() {
    this.renderer.addClass(this.snackbar.nativeElement, 'show');

    setTimeout(() => {
      this.renderer.removeClass(this.snackbar.nativeElement, 'show');
    }, 3400);
  }
}
