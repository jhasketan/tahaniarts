import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/authentication/authentication.service';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tahaniarts';
  constructor(private service:MainService, private authService:AuthenticationService){

  }

  ngOnInit(){
    this.authService.isAuthenticated().subscribe((res:any)=>{
     if(res){
       console.log('user', res);
      console.log('logged in user', res);
      localStorage.setItem('emailId',res.email);
      localStorage.setItem('uid',res.uid);
     } 
     else{
      localStorage.clear(); 
     }
    })
    this.getMaster();
  }

  getMaster(){
    this.service.getMaster();
    // .subscribe(res=>{
    //   console.log('masterData-->',res);
    // })
  }
}
