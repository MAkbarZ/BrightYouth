import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/shared-components/model/user.model';
import { AlertService } from 'src/app/shared-components/service/alert.service';
import { UserAccountService } from 'src/app/shared-components/service/user-account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userAccountService: UserAccountService,
    private alertService: AlertService
  ) {
    // this.loginFormGroup = new FormGroup('');
    this.loginForm = this.formBuilder.group({
      usernameControl: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      passwordControl: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
    });
    
  }

  ngOnInit(): void {}

  // convenience getter for easy access to form fields
  get thisFormControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    // let userPassword = this.thisFormControls['passwordControl'].value || '';
    let userPassword = this.thisFormControls['passwordControl'].value || '';

    if (userPassword !== '') {
      this.userAccountService
        .login(this.thisFormControls['usernameControl'].value, userPassword)
        .pipe(first())
        .subscribe({
          next: () => {
            // get return url from query parameters or default to home page
            const returnUrl =
              this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl);
          },
          error: (error) => {
            this.alertService.error(error);
            this.loading = false;
          },
        });
    } else {
        this.alertService.error('Please enter your password.');
        this.loading = false;
    }
  }
}
