import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {RoutingService} from "./routing.service";

@Component({
  selector: 'app-header',
  styles: ['.active { font-weight: bold ; color:#228 !important;}'],
  template: `
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li *ngIf="!isAuth()"><a [routerLink]="['login']" routerLinkActive="active">Login</a></li>
                        <li><a [routerLink]="['public']" routerLinkActive="active">Public</a></li>
                        <li *ngIf="isAuth()" ><a [routerLink]="['friends']" routerLinkActive="active">Friends</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
                        <li><a>{{email}}</a></li>
                        <li><a (click)="onLogout()" style="cursor: pointer;">Logout</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    `
})
export class HeaderComponent {
  authenticated = false;
  email: string;

  constructor(private routingService: RoutingService, private authService: AuthService) {
    this.authService.isAuthenticated().subscribe(state => {
      this.authenticated = state.authenticated;
      this.email = state.email;
      this.route(this.authenticated);
    });
  }

  private route(status: boolean): Promise<boolean> {
    if (status) {
      return this.routingService.friendsPage();
    } else {
      return this.routingService.loginPage();
    }
  }

  isAuth() {
    return this.authenticated;
  }

  onLogout() {
    this.authService.logout();
  }
}
