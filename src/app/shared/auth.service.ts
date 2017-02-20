import {Observable, Subject, ReplaySubject} from "rxjs/Rx";
import {EventEmitter, Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {EmailPasswordCredentials} from "angularfire2/auth";

const GOOGLE_LOGIN = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

export interface SignUpCredentials extends EmailPasswordCredentials {
  confirmPassword: string;
}

export interface AuthState {
  authenticated: boolean,
  email: string,
  roles: string[]
}

@Injectable()
export class AuthService {

  authState: Subject<AuthState> = new ReplaySubject<AuthState>();
  loginInProgress: EventEmitter<boolean> = new EventEmitter<boolean>();
  signInFail: EventEmitter<string> = new EventEmitter<string>();

  constructor(private angularFire: AngularFire) {
    this.angularFire.auth.subscribe(auth => {
      let state: AuthState = {
        authenticated: false,
        email: '',
        roles: []
      };
      if (auth != null) {
        state.authenticated = true;
        state.roles = ['user'];
        state.email = auth.auth.email;
      }
      this.authState.next(state);
    });
  }

  signIn(credentials: EmailPasswordCredentials) {
    this.loginInProgress.emit(true);

    this.angularFire.auth
      .login(credentials)
      .then(() => this.loginInProgress.emit(false))
      .catch(this.onError());
  }

  signUp(credentials: SignUpCredentials) {
    this.loginInProgress.emit(true);

    this.angularFire.auth
      .createUser(credentials)
      .then((rs) => this.signIn(credentials))
      .catch(this.onError());
  }

  signInWithGoogleAccount() {
    this.loginInProgress.emit(true);

    return this.angularFire.auth
      .login(GOOGLE_LOGIN)
      .then(() => this.loginInProgress.emit(false))
      .catch(this.onError());
  }

  logout() {
    return this.angularFire.auth.logout();
  }

  isAuthenticated(): Observable<AuthState> {
    return this.authState.asObservable();
  }

  private onError(): (e: Error) => void {
    return (e) => {
      this.loginInProgress.emit(false);
      this.signInFail.emit(e.message);
      console.log(e);
    }
  }

}
