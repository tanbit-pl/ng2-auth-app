import {Observable, Subject, ReplaySubject} from "rxjs/Rx";
import {EventEmitter, Injectable} from "@angular/core";


export interface EmailPasswordCredentials {
  email: string;
  password: string;
}

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

  signIn(credentials: EmailPasswordCredentials) {
  }

  signUp(credentials: SignUpCredentials) {
  }

  signInWithGoogleAccount() {
  }

  logout() {
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
