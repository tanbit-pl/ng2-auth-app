import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  authenticated = false;

  constructor(private authService: AuthService) {
    this.authService.isAuthenticated().subscribe(state => this.authenticated = state.authenticated);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.authenticated;
  }
}
