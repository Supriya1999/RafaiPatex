import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  loginForm: FormGroup;
  Mobile: string;
  submitted: boolean = false;
  _login: Login;
  otpDiv = false;
  
  constructor(private fb: FormBuilder, private myRouter: Router,private api: ApiService) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      Mobile: ['', [Validators.required, Validators.maxLength(10)]],
    });
    localStorage.clear();
  }
  get f() {
    return this.loginForm.controls;
  }
  ///  Used for Login User
  submitForm() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    let otp= this.generateOTP();
    this._login = new Login();
    this._login.Mobile=this.loginForm.controls.Mobile.value;
    this._login.OTP=otp;
    console.log(otp);
    localStorage.setItem('MobileOtp', otp);
    localStorage.setItem('Mobile', this.loginForm.controls.Mobile.value);
    this.api.ValidateOTP(this._login).subscribe(
      (resp: any) => {
        console.log(resp);
      },
      (err) => {
        alert('Server Error !!');
      }
    );
  
    this.otpDiv = true;
  }
  generateOTP() { 
    
    var digits = '0123456789'; 
    let OTP = ''; 
    for (let i = 0; i < 4; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    } 
    return OTP; 
   }  
}
