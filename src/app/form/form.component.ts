import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppValidators } from '../utils/validators.util';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('Luis', Validators.required),
      lastName: new FormControl('Vilcarromero', [ Validators.required, Validators.minLength(4) ]),
      // age: new FormControl(null, rangeWithoudParams),
      age: new FormControl(null, AppValidators.rangeWithParams(15, 60)),
      gender: new FormControl(null),
      date: new FormControl({ value: '2020-12-03', disabled: true }, AppValidators.minDate)
    });
  }
}
