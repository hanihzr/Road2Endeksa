import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'ndska-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{ provide: NG_VALIDATORS, useExisting: InputComponent, multi: true }]
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() type: string = 'text';

  @Input() required: boolean = false;

  validators = [];

  inputForm: FormGroup;

  @Output() changedValue = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    if (this.required) {
      this.validators.push(Validators.required);
    }
    if (this.type === 'email') {
      this.validators.push(Validators.email);
    }
    this.inputForm = new FormGroup({
      nativeInput: new FormControl(this.value, Validators.compose(this.validators))
    });
  }

  get nativeInput() {
    return this.inputForm.get('nativeInput');
  }

  valueChanged(newValue: string) {
    this.changedValue.emit(newValue);
  }
}
