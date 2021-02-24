
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  userData: Observable<firebase.default.User | null>;
  constructor(private angularFireAuth: AngularFireAuth, private toaster:ToastrService, private router:Router) {
    this.userData = angularFireAuth.authState;
  }

  isAuthenticated() {
    return this.userData; 
  }
  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("You are Successfully signed up!", res);
      })
      .catch((error) => {
        console.log("Something is wrong:", error.message);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((res:any) => {

        localStorage.setItem('emailId',res.user.email);
        localStorage.setItem('uid',res.user.uid);
        this.toaster.success("You are Successfully logged in!");
        this.router.navigate(['home']);
      })
      .catch((err) => {
        this.toaster.error('Error while logging you in');
        localStorage.clear();
        console.error("Something is wrong:", err.message);
      });
  }
 
  /* Sign out */
  SignOut() {
    this.angularFireAuth.signOut().then(()=>{
      this.router.navigate(['login']);
    });
  }
}