import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { where } from 'firebase/firestore';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user:any= {
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
  fakesrc:any = "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
  constructor(private db: AngularFirestore,private http:HttpClient) {
    const users = db.collection('users').valueChanges();
    users.subscribe((data:any)=>{
      console.log(data);
      data.forEach((user:any) => {
        if(user.email== localStorage.getItem("USER_EMAIL")){
          this.user = user;
        }
      });
    })
   }
  ngOnInit() {
  
  }
  updateProfile(){

    


    let users: AngularFirestoreCollection = this.db.collection("users",ref => ref.where('email', '==', localStorage.getItem("USER_EMAIL")));
    users.snapshotChanges().subscribe((res: any) => {
        let id = res[0].payload.doc.id;
      this.db.collection('users').doc(id).update(this.user).then(() =>{
        location.reload();
      });
        
      });
  }
  clickFakeBtn(){
    document.getElementById("fakeBTN").click();
  }
  fileChanged(e:any){
    const fd = new FormData();
    const image = e.target.files[0];

    fd.append('logo',image,image.name);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      let headers :any= {
        Authorization: 'Client-ID ' + "40e3e564a065b88",
        Accept: 'application/json',
      }
      const reader = new FileReader();
      reader.onload = e => {
        this.fakesrc = reader.result
      }; 
      reader.readAsDataURL(file);
    }
  }
}
