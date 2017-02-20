import {RouterModule, Routes} from "@angular/router";

import {PublicComponent} from "./unprotected/public.component";
import {FriendsComponent} from "./protected/friends.component";
import {AuthGuard} from "./shared/auth.guard";
import {LoginComponent} from "./unprotected/login.component";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/friends', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'public', component: PublicComponent},
  {path: 'friends', component: FriendsComponent, canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
