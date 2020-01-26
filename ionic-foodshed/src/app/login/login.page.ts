import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
    public formBuilder: FormBuilder, public router: Router
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

    let username: string = this.loginForm.value.username;
    let password: string = this.loginForm.value.password;

    // Check that both username and password are correct
    if(username == correctUsername && password == correctPassword) {
      this.router.navigate(['members']);
    }
    else {
      alert("Username/Password is incorrect. Please try again.");
    }
  }

}
