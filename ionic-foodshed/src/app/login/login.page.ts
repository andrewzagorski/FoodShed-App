import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  error_messages = {
    'username': [
      { type: 'required', message: 'Username is required.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' }
    ],
  }

  constructor(
    public formBuilder: FormBuilder, public router: Router, public localStorage: LocalstorageService
  ) {
    this.loginForm = this.formBuilder.group({
      password: new FormControl("", Validators.compose([
        Validators.required
      ])),
      username: new FormControl("", Validators.compose([
        Validators.required
      ]))
    });
  }

  ngOnInit() {
  }

  login() {
    let correctUsername: string = "foodshed";
    let correctPassword: string = "randompass";

    console.log('username: ', this.loginForm.value.username);
    console.log('password: ', this.loginForm.value.password);
    // this.localStorage.helloWorld(); // testing custom service

    let username: string = this.loginForm.value.username;
    let password: string = this.loginForm.value.password;

    // Check that both username and password are correct
    if (username === correctUsername && password == correctPassword) {
      this.router.navigate(['tabs/members']);
    }
    else {
      alert("Username/Password is incorrect. Please try again.");
    }
  }

}
