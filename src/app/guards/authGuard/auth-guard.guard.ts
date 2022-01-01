import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router :Router,private http:HttpService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let jwt: any = localStorage.getItem("JWT");    
      let Event: Observable<boolean>
      // return true;
      return Event = new Observable<boolean>(observer => {
       
        if (!jwt || jwt == '')
        {
          this.router.navigateByUrl("/login")
          observer.next(false)
        }
        else {
          observer.next(true)
          
          // this.http.SessionJWT().subscribe(res => {
            
          // }, err => {
          //   observer.next(false)
          //   this.router.navigate(["welcome"])
            
          // })
        } 
      });
  }

  
   
  
}
