import { Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/app/guards/authGuard/auth-guard.guard';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { IconsComponent } from '../../pages/icons/icons.component';
export const AuthLayoutRoutes: Routes = [
    // { path: '',
    //  component: LoginComponent ,
    // canDeactivate:[AuthGuardGuard]},
    { path: 'login',          component: LoginComponent},
    { path: 'register',       component: RegisterComponent },
    { path: 'erreur',           component: IconsComponent }
];
