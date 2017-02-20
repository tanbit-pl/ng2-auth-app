import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Injectable()
export class RoutingService {

  constructor(private router: Router, private titleService: Title) {
  }

  public loginPage(): Promise<boolean> {
    return this.router
      .navigate(['/login'])
      .then(() => this.titleService.setTitle('AuthApp login'));
  }

  public friendsPage(): Promise<boolean> {
    return this.router
      .navigate(['/friends'])
      .then(() => this.titleService.setTitle('AuthApp friends'));
  }

}
