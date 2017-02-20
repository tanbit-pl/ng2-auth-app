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
import {RoutingService} from "./shared/routing.service";
import {LoginComponent} from "./unprotected/login.component";

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
