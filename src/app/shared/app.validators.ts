import {Validators, ValidatorFn, FormGroup, AbstractControl} from "@angular/forms";

export class AppValidators {

  static invalid(form: FormGroup, name: string): boolean {
    let ctrl: AbstractControl = form.controls[name];
    return ctrl.invalid && ctrl.touched;
  }

  static invalidKey(form: FormGroup, name: string, key: string): boolean {
    if (AppValidators.invalid(form, name)) {
      return form.controls[name].errors[key];
    }
    return false;
  }


  static email(): ValidatorFn {
    return Validators.compose([
      Validators.required,
      Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]);
  }

  static password(): ValidatorFn {
    return Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ]);
  }

}
