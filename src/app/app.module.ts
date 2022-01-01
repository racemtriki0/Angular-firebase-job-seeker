import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB-H0RE5LWwIKpHkWMQOEZUaSTJjYSJFtI",
      authDomain: "racem-88a17.firebaseapp.com",
      projectId: "racem-88a17",
      storageBucket: "racem-88a17.appspot.com",
      messagingSenderId: "55594766172",
      appId: "1:55594766172:web:5ad3efba46d1675f8a3b99",
      measurementId: "G-VCVVKDHGGY"
       /*  apiKey: "AIzaSyAJjsm6LrOMcVOzt-J68UNp55nmiFRwWqE",
        authDomain: "jobs-e1c51.firebaseapp.com",
        projectId: "jobs-e1c51",
        storageBucket: "jobs-e1c51.appspot.com",
        messagingSenderId: "347353379351",
        appId: "1:347353379351:web:608a394de4f73554f2e252",
        measurementId: "G-6SXHPPF2Q6" */
      }),
    AngularFirestoreModule, // firestore
    // provideFirebaseApp(() => initializeApp({
    //   apiKey: "AIzaSyAJjsm6LrOMcVOzt-J68UNp55nmiFRwWqE",
    //   authDomain: "jobs-e1c51.firebaseapp.com",
    //   projectId: "jobs-e1c51",
    //   storageBucket: "jobs-e1c51.appspot.com",wh
    //   messagingSenderId: "347353379351",
    //   appId: "1:347353379351:web:608a394de4f73554f2e252",
    //   measurementId: "G-6SXHPPF2Q6"
    // })),
    // provideFirestore(() => getFirestore()),
    FormsModule,
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
      ],
  providers: [Validators],
  bootstrap: [AppComponent]
})
export class AppModule { }
