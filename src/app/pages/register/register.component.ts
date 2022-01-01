import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:any={
    username:"",
    email:"",
    password:"",
    phoneNumber:"",
    age:"",
    country:"",
    city:"",
    adress:"",
    bio:"",
    education:"",
    aboutMe:"",
    zip:""
  };
  constructor(private db: AngularFirestore,private router:Router) {
    const things = db.collection('users').valueChanges();
}
  ngOnInit() {
  }
  signup(){
    if(this.user.email!="" && this.user.password!=""){
      this.db.collection('users').add(this.user);
      this.router.navigateByUrl("/login");
    }
  }

}
