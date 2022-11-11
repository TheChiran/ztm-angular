import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  };
  showAlert: boolean = false;
  alertMsg: string = 'Please wait! While we are logging in!';
  alertColor: string = 'blue';
  inSubmission: boolean = false;

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  async login(){
    this.showAlert = true;
    this.alertMsg = 'Please wait! We are logging you in.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try{
      await this.auth.signInWithEmailAndPassword(this.credentials.email,this.credentials.password)
    }catch(e){
      this.inSubmission = false;
      this.alertMsg = 'An unexpected error occurred. Please try again later';
      this.alertColor = 'red';

      console.log(e);

      return;
    }

    this.alertMsg = 'Success! You are now logged in.';
    this.alertColor = 'green';
  }

}
