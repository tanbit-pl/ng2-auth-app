import {Component} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {FormBuilder} from "@angular/forms";
import {MdIconRegistry} from "@angular/material";

import {AuthService} from "../shared/auth.service";
import {AppValidators} from "../shared/app.validators";
import {FormReactiveComponent} from "../shared/form.reactive.component";

@Component({
  selector: 'sign-in-form',
  template: `
        <form [formGroup]="form" (ngSubmit)="onSignIn()" class="full-width">
          <div class="hr-small"></div>
          <md-input-container class="full-width">
            <input mdInput formControlName="email" name="email" placeholder="E-mail" />
            <md-hint *ngIf="invalid('email')" class="invalid">e-mail is invalid</md-hint>  
          </md-input-container>
          <div class="hr-small" ></div>
          <md-input-container class="full-width" >
            <input mdInput formControlName="password" name="password" type="password" placeholder="Password" />
            <md-hint *ngIf="invalid('password')" class="invalid">password is too short</md-hint>  
          </md-input-container>
          <div class="hr" ></div>
          <button md-raised-button type="submit" [disabled]="!form.valid">Sign In</button>
          <button md-raised-button type="button" (click)="onSignInWithGoogleAccount()"><md-icon svgIcon="auth-google"></md-icon> Sign In with Google</button>
        </form>
    `
})
export class SignInReactiveComponent extends FormReactiveComponent {

  constructor(private fb: FormBuilder, private authService: AuthService, sanitizer: DomSanitizer, iconRegistry: MdIconRegistry) {
    super();
    iconRegistry.addSvgIcon('auth-google', sanitizer.bypassSecurityTrustResourceUrl('assets/auth_google.svg'));
  }

  ngOnInit(): any {
    this.form = this.fb.group({
      email: ['', AppValidators.email()],
      password: ['', AppValidators.password()]
    });
  }

  onSignIn() {
    this.authService.signIn(this.form.value);
  }

  onSignInWithGoogleAccount() {
    this.authService.signInWithGoogleAccount();
  }
}
