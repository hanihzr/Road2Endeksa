import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ndska-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  valueChanged(event) {
    console.log(event);
  }
}
