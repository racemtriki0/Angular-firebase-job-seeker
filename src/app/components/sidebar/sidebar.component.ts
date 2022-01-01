import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/Dashboard', title: 'Accueil',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/create', title: 'publier une offre',  icon:'ni ni-fat-add text-blue', class: '' },
    { path: '/myPosts', title: 'Mes publications',  icon:'ni ni-align-center text-green', class: '' },
    { path: '/user-profile', title: 'Profil',  icon:'ni ni-circle-08 text-warning', class: '' },
    { path: '/contact', title: 'Nous contacter',  icon:'ni ni-email-83 text-green', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
  logout(){
    localStorage.removeItem("JWT");
    localStorage.removeItem("USER_ID");
    localStorage.removeItem("USER_EMAIL");
    location.reload();
  }
}
