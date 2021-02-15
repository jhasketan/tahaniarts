// import { DataService } from '../services/data.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private toaster: ToastrService,
    private authService: AuthenticationService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.authorize();
  }

  authorize():Promise<boolean>{
    return new Promise((resolve, reject)=>{
      this.authService
      .isAuthenticated()
      .subscribe(res => {
        const emailId = res?.email;
        const uid = res?.uid;
        if (emailId && uid) {
          resolve(true);
        } else {
          localStorage.clear();
          this.toaster.error(
            'Unauthorized user or the session has expired',
            'Unauthorized'
          );
          this.router.navigate(['login']);
          resolve(false);
        }
      });
    })
  }
  
}
