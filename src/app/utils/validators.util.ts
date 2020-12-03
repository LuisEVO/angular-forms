import { FormControl, ValidationErrors } from '@angular/forms';
import * as moment from 'moment';

/*
const rangeWithParams = (min: number, max: number) => {
  return (control: FormControl): ValidationErrors => {
    const value = control.value;
    const isValid = value && value >= min && value <= max;
    return isValid ? null : { range: `El valor debe estar entre ${min} y ${max}` };
  };
};

const rangeWithoudParams = (control: FormControl): ValidationErrors => {
  const value = control.value;
  const isValid = value && value >= 18 && value <= 65;
  return isValid ? null : { range: true };
};
*/

export class AppValidators {
  static rangeWithParams(min: number, max: number): (control: FormControl) => ValidationErrors {
    return (control: FormControl): ValidationErrors => {
      const value = control.value;
      const isValid = value && value >= min && value <= max;
      return isValid ? null : { range: `El valor debe estar entre ${min} y ${max}` };
    };
  }

  static rangeWithoudParams = (control: FormControl): ValidationErrors => {
    const value = control.value;
    const isValid = value && value >= 18 && value <= 65;
    return isValid ? null : { range: true };
  }

  static validDate = (control: FormControl): ValidationErrors => {
    const value = control.value;
    const [ year, month, date ] = value.split('-');
    const isValid = value && moment({ date, month: month - 1, year }).isValid();
    return isValid ? null : { validDate: true };
  }

  static minDate = (control: FormControl): ValidationErrors => {
    return { minDate: true };
  }
}
