import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  registrationData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  submitted: boolean = false;
  constructor(
    private toaster: ToastrService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {}
  save(form: any) {
    this.submitted = true;
    if (form.dirty) {
      if (form.valid) {
        console.log('form valid & dirty', this.registrationData);
        //check password & confirmpassword
        this.authService
          .SignUp(this.registrationData);
      } else {
        this.toaster.warning('Please fill all the mandatory fields to proceed');
      }
    } else {
      this.toaster.warning('Nothing to save');
    }
  }
}
