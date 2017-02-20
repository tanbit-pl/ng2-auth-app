import {Component} from "@angular/core";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'page-login',
  template: `
    <h3 id="signInAdvice">Please sign in to use all application features</h3>
    <md-tab-group>
      <md-tab label="Sign in">
        <sign-in-form ></sign-in-form>
      </md-tab>
      <md-tab label="Sign up">
        <sign-up-form></sign-up-form>
      </md-tab>
    </md-tab-group>
    <br />
    <div *ngIf="isErrorMsg()" class="alert alert-danger" role="alert">
      <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
      <span class="sr-only">Error:</span>
      {{authErrorMessage}}
      <a (click)="closeErrorMessage()" class="close" data-dismiss="alert" aria-label="close" title="close">×</a>
    </div>
    `
})
export class LoginComponent {

  protected loginAction: boolean = false;
  protected authErrorMessage: string;

  constructor(private authService: AuthService) {
    authService.loginInProgress.subscribe(state => {
      if (this.loginAction != state) {
        this.loginAction = state;
        if (this.loginAction) {
          this.closeErrorMessage();
        }
      }
    });
    this.authService.signInFail.subscribe(msg => this.authErrorMessage = msg);
  }

  isErrorMsg() {
    return this.authErrorMessage && this.authErrorMessage.length > 0;
  }

  closeErrorMessage() {
    this.authErrorMessage = '';
  }
}
