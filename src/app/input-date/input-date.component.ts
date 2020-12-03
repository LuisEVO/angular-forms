import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppValidators } from '../utils/validators.util';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [
    /*
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true
    },
    */
    {
      provide: NG_VALIDATORS,
      useValue: AppValidators.validDate,
      multi: true
    }
  ]
})
export class InputDateComponent implements ControlValueAccessor {
  value: string;
  isDisabled: boolean;
  onTouch: () => void;
  onChange: (value: string) => void;

  day: number;
  month: number;
  year: number;

  constructor(public control: NgControl) {
    this.control.valueAccessor = this;
  }

  updateValue(): void {
    this.value = `${this.year}-${this.month}-${this.day}`;
    this.onChange(this.value);
    this.onTouch();
  }

  writeValue(value: string): void {
    this.value = value;
    const [year, month, day] = value.split('-');
    this.day = +day;
    this.month = +month;
    this.year = +year;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
