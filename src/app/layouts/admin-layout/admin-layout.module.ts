import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralInfoComponent } from 'src/app/components/general-info/general-info.component';
import { AllTransactionsComponent } from 'src/app/pages/all-transactions/all-transactions.component';
import { ActiveTransactionsComponent } from 'src/app/pages/active-transactions/active-transactions.component';
import { MissingTransactionsComponent } from 'src/app/pages/missing-transactions/missing-transactions.component';
import { NgbdSortableHeader } from 'src/app/directives/sortable.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { NgbDatepickerDayView } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    
    // MatOption
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    IconsComponent,
    GeneralInfoComponent,
    AllTransactionsComponent,
    ActiveTransactionsComponent,
    NgbdSortableHeader,
    MissingTransactionsComponent,
    // NgbDatepicker,
  ]
})

export class AdminLayoutModule {}
