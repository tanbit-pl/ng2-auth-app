import {Component} from '@angular/core';
import {AuthService} from "./shared/auth.service";

@Component({
  selector: 'app-root',
  template: `
    <md-progress-bar *ngIf="showProgress" mode="indeterminate" class="appProgressBar"></md-progress-bar>
    <div style="height: 2px" *ngIf="!showProgress"></div>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-1">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
`
})
export class AppComponent {

  protected showProgress: boolean;

  constructor(private authService: AuthService) {
    authService.loginInProgress.subscribe(state => {
      if (this.showProgress != state) {
        this.showProgress = state;
      }
    });
  }

}
