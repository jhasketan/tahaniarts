import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: Observable<firebase.default.User | null>;
  userCollection: AngularFirestoreCollection;
  userProfileData = new BehaviorSubject<any>(null);
  currentUserProfile = this.userProfileData.asObservable();
  constructor(
    private angularFireAuth: AngularFireAuth,
    private toaster: ToastrService,
    private router: Router,
    private firestore: AngularFirestore
  ) {
    this.userData = angularFireAuth.authState;
    this.userCollection = this.firestore.collection('users');
    //get user data from collection
    this.userData.subscribe((res) => {
      if (res) {
        this.userCollection.ref
          .where('uid', '==', res?.uid)
          .get()
          .then((res) => {
            if (res && !res.empty) this.userProfileData.next(res.docs[0].data());
            else this.userProfileData.next(null);
          });
      }
    });
  }

  isAuthenticated() {
    return this.userData;
  }
  /* Sign up */
  SignUp(userData: any) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((res) => {
        console.log('You are Successfully signed up!', res.user?.uid);
        userData.uid = res.user?.uid;
        // -- send verify email
        res.user?.sendEmailVerification().then((res) => {
          this.toaster.success(
            'A verification email has been sent to this email. Please follow the steps to activate your account'
          );
          this.addUser(userData);
        });
      })
      .catch((error) => {
        console.log('Something is wrong:', error.message);
      });
  }

  addUser(userData: any) {
    userData.createdOn = new Date();
    // userData.lastLogin =   -- find a way
    const id = this.firestore.createId();
    userData.id = id;
    userData.isAdmin = false;
    delete userData.confirmPassword;
    delete userData.password;
    this.userCollection
      .doc(id)
      .set(userData)
      .then((res) => {
        this.toaster.success('You have been registered, happy shopping!');
        this.router.navigate(['home']);
      })
      .catch((err) => {
        this.toaster.error('Error registering user, please try again later');
      });
  }

  updateUser(userId: string, userData: any) {
    userData.lastUpdatedOn = new Date();
    delete userData.email;
    //everything can be updated apart from email
    //this will be taken in feature account migration - phase 2
    return this.userCollection.doc(userId).update(userData);
  }

  verifyUser(verifyData: { email: string; phone: number }) {
    //implement later
    //call firestore functions to verify send mail with a link (nodemailer) - phase 2
    //or send a message to phone in case of phone verification (msg91) - phase 2
  }

  bestowAdminRights(userId: string) {
    return this.userCollection.doc(userId).update({ isAdmin: true });
  }

  revokeAdminRights(userId: string) {
    return this.userCollection.doc(userId).update({ isAdmin: false });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        localStorage.setItem('emailId', res.user.email);
        localStorage.setItem('uid', res.user.uid);
        this.toaster.success('You are Successfully logged in!');
        this.router.navigate(['home']);
      })
      .catch((err) => {
        localStorage.clear();
        console.error('Something is wrong:', err);
        if(err && err.code === 'auth/user-not-found'){
          this.toaster.error('No user found for the given email, please register or get in touch with an admin, if there is an issue');
        }
        else{
          this.toaster.error('Error while logging you in');
        }
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }

  resetPassword() {
    this.angularFireAuth
      .sendPasswordResetEmail('jhasketan.jena@gmail.com')
      .then((res) => {
        console.log('--password reset email response --', res);
        this.toaster.success(
          'Password reset link has been sent to this email, please check your inbox to proceed'
        );
        this.router.navigate(['login']);
      });
  }
}
