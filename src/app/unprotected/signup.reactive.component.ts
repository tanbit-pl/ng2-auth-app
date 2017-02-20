import {Component} from "@angular/core";
import {FormBuilder, Validators, FormControl} from "@angular/forms";

import {AuthService} from "../shared/auth.service";
import {AppValidators} from "../shared/app.validators";
import {FormReactiveComponent} from "../shared/form.reactive.component";

@Component({
  selector: 'sign-up-form',
  template: `
        <form [formGroup]="form" (ngSubmit)="onSignUp()" class="full-width">
          <div class="hr-small"></div>
          <md-input-container class="full-width">
            <input mdInput formControlName="email" name="email" placeholder="E-mail" />
            <md-hint *ngIf="invalid('email')" align="start" class="invalid">e-mail is invalid</md-hint>  
          </md-input-container>
          <div class="hr-small"></div>
          <md-input-container class="full-width" >
            <input mdInput formControlName="password" name="password" type="password" placeholder="Password" />
            <md-hint *ngIf="invalid('password')" align="start" class="invalid">password is too short</md-hint>  
          </md-input-container>
          <div class="hr-small"></div>
          <md-input-container class="full-width" >
            <input mdInput formControlName="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" />
            <md-hint *ngIf="invalid('confirmPassword')" class="invalid">{{confirmPasswordErrorMessage()}}</md-hint>
          </md-input-container>
          <div class="hr"></div>                   
          <button md-raised-button type="submit" [disabled]="!form.valid" >Sign Up</button>
        </form>
    `
})
export class SignUpReactiveComponent extends FormReactiveComponent {

  constructor(private fb: FormBuilder, private authService: AuthService) {
    super();
  }

  ngOnInit(): any {
    this.form = this.fb.group({
      email: ['', AppValidators.email()],
      password: ['', AppValidators.password()],
      confirmPassword: ['', Validators.compose([AppValidators.password(), this.isPasswordEqual.bind(this)])]
    });
  }

  onSignUp() {
    this.authService.signUp(this.form.value);
  }

  isPasswordEqual(control: FormControl): {[s: string]: boolean} {
    if (!this.form) {
      return {passwordsNotMatch: true};
    }
    if (control.value !== this.form.controls['password'].value) {
      return {passwordsNotMatch: true};
    }
  }

  confirmPasswordErrorMessage(): string {
    if (this.form.controls['confirmPassword'].errors['passwordsNotMatch']) {
      return 'passwords do not match';
    } else {
      return 'password is too short'
    }
  }
}
