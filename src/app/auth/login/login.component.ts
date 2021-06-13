import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { QnbAuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class QnbLoginComponent {

  @ViewChild('loginForm') loginForm: NgForm;

  loginInProgress = false;
  hasError = false;
  errorMessage = '';

  constructor(
    private qnbAuthService: QnbAuthService,
    private router: Router,
  ) { }

  loginHandler() {
    if (!this.loginInProgress) {
      this.loginInProgress = true;
      this.hasError = false;
      const { username, password } = this.loginForm.value;
      this.qnbAuthService
        .login(username, password)
        .subscribe(
          res => {
            console.log(res);
            
            this.loginInProgress = false;
            this.router.navigateByUrl('/pages');
          },
          err => {
            console.log(err)
            this.loginInProgress = false;
            this.hasError = true;
            this.errorMessage = err.error.message;
          },
        );
    }
  }
}
