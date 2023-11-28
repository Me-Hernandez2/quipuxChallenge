import { Route } from '@angular/router';
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {authGuardGuard} from "./shared/guard/auth-guard.guard";

export const appRoutes: Route[] = [
  {path:'login', component: LoginComponent },
  {path: 'register' , component: RegisterComponent },
  {path:'home', component: HomeComponent,  canActivate: [authGuardGuard] },
  {
    path: '**',
    loadComponent: () =>
      import('@quipux-challenge/not-found').then((m) => m.PageNotFoundComponent),
  },
];
