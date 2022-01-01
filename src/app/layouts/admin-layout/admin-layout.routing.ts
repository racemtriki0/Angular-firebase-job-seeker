import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { AllTransactionsComponent } from 'src/app/pages/all-transactions/all-transactions.component';
import { ActiveTransactionsComponent } from 'src/app/pages/active-transactions/active-transactions.component';
import { MissingTransactionsComponent } from 'src/app/pages/missing-transactions/missing-transactions.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',redirectTo:'Dashboard' },
    { path: 'Dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'create',           component: AllTransactionsComponent },
    { path: 'myPosts',           component: ActiveTransactionsComponent },
    { path: 'contact',           component: MissingTransactionsComponent }
];
