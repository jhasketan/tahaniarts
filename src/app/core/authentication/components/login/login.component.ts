import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: { email: string; password: string };
  constructor(private authService: AuthenticationService) {
    this.user = { email: '', password: '' };
  }

  ngOnInit(): void {}
  login() {
    this.authService.SignIn(this.user.email,this.user.password);
  }

}
