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
  inputUser: User = new User();
  loading = false;
  submitted = false;

  get mobileNumber() {
    return this.loginForm.get('mobileNumberControl')!;
  }

  get username() {
    return this.loginForm.get('usernameControl')!;
  }

  get password() {
    return this.loginForm.get('passwordControl')!;
  }

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
        // Validators.maxLength(20)
      ]),
      passwordControl: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        // Validators.maxLength(20)
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
    let objFormValues = this.loginForm.value;
    this.inputUser.mobile = objFormValues.mobileNumberControl;
    this.inputUser.username = objFormValues.usernameControl;
    this.inputUser.password = objFormValues.passwordControl;
    
    this.userAccountService
      .login(this.inputUser)
      .pipe(first())
      .subscribe({
        next: (res) => {
          // get return url from query parameters or default to home page
          this.alertService.success('Registration successful', {
            keepAfterRouteChange: true,
          });
          console.log('Success: ------------');
          console.log(res);

          // const returnUrl =
          //   this.route.snapshot.queryParams['returnUrl'] || '/';
          // this.router.navigateByUrl(returnUrl);

          this.router.navigate(['../profile'], { relativeTo: this.route });
        },
        error: (err) => {
          this.alertService.error('Mobile Number or Username already exist.');
          console.log('Error: ------------');
          console.log(err);
          console.log('Error: Error');
          console.log(err.error);
          console.log('Error: Passed');
          console.log(err.error.passed);
          console.log('Error: Result');
          console.log(err.error.result);
          if (err.error.result == 23000) {
            console.log('Mobile Number or Username already exist.');
          }
          console.log('Error: Response');
          console.log(err.error.Response);
          console.log(err.status);
          this.loading = false;
        },
      });
  }

  // Only Integer Numbers
  // https://www.freakyjolly.com/angular-allow-only-numbers-or-alphanumeric-in-input-restrict-other-characters-using-keypress-event/
  keyPressNumbers(event: any) {
    var charCode = event.which ? event.which : event.keyCode;
    // Only Numbers 0-9
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
