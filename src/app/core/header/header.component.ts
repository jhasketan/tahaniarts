import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userLoggedIn:boolean;
  subscriptions:Subscription;
  constructor(private authService:AuthenticationService) {
    this.userLoggedIn =false;
    this.subscriptions = this.authService.isAuthenticated().subscribe((res:any)=>{
      if(res && res.email && res.uid){
        this.userLoggedIn = true;
      }
      else{
        this.userLoggedIn = false;
      }
    },err=>{
      console.error('-error--',err);
      this.userLoggedIn = false;
    })
   }

  ngOnInit(): void {
    
  }
  logout(){
    this.authService.SignOut();
  }

}
