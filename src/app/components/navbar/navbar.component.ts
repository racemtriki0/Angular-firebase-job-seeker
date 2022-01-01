import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  user:any;
  constructor(location: Location,  private element: ElementRef, private router: Router,private db: AngularFirestore) {
    this.location = location;
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
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  logout(){
    localStorage.removeItem("JWT");
    localStorage.removeItem("USER_ID");
    localStorage.removeItem("USER_EMAIL");
    location.reload();
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

}
