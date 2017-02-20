import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./shared/header.component";
import {SignInReactiveComponent} from "./unprotected/signin.reactive.component";
import {SignUpReactiveComponent} from "./unprotected/signup.reactive.component";
import {FriendsComponent} from "./protected/friends.component";
import {AuthGuard} from "./shared/auth.guard";
import {AuthService} from "./shared/auth.service";
import {routing} from "./app.routing";
import {PublicComponent} from "./unprotected/public.component";
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {RoutingService} from "./shared/routing.service";
import {LoginComponent} from "./unprotected/login.component";

export const firebaseConfig = {
  apiKey: "AIzaSyAQDPKJSkS6lEY_QzStmEW8YL-NSsuCMPk",
  authDomain: "ng-auth-app.firebaseapp.com",
  databaseURL: "https://ng-auth-app.firebaseio.com",
  storageBucket: "ng-auth-app.appspot.com",
  messagingSenderId: "584590812607"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignInReactiveComponent,
    SignUpReactiveComponent,
    PublicComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthService,
    RoutingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
