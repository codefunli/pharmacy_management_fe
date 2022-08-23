import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';

import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormGroup, Validators, FormControl} from "@angular/forms";


// import {ServiceAppService} from '../../service-app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checkBox: boolean = false;

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  constructor(private loginService: LoginService,
              private router: Router,
              private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.loginForm.patchValue({userName: localStorage.getItem('userName')})
    this.loginForm.patchValue({password: localStorage.getItem('code')})
  }


  signIn() {
    if (!this.loginForm.invalid) {
      this.loginService.loginAccount(this.loginForm.value).subscribe((data) => {
        console.log(data);
        if (this.checkBox === true) {
          localStorage.setItem('userName', data.userName);
          localStorage.setItem('rememberMe', "true");
          localStorage.setItem('code', data.password);
        } else {
          localStorage.setItem('rememberMe', "false");
          localStorage.removeItem('userName');
          localStorage.removeItem('code');
        }
        this.router.navigateByUrl('/defaul');
        // this.appService.sendClickEvent();
      }, (error) => {
        console.log(error.error);
        this.snackBar.open(error.error.message, 'OK', {
          duration: 3000,
        })
      });
    }
  }

  // onSaveUsernameChanged(ev) {
  //   this.checkBox = checked;
  // }
  onSaveUsernameChanged(event: any) {
    this.checkBox = event.target.checked;
  }
}
