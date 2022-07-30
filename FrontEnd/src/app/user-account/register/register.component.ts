import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from 'src/app/shared-components/model/user.model';
import { AlertService } from 'src/app/shared-components/service/alert.service';
import { UserAccountService } from 'src/app/shared-components/service/user-account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm!: FormGroup;
    inputUser: User = new User();
    loading = false;
    submitted = false;

    get mobileNumber() { return this.registerForm.get('mobileNumberControl')!; }

    get username() { return this.registerForm.get('usernameControl')!; }
  
    get password() { return this.registerForm.get('passwordControl')!; }

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userAccountService: UserAccountService,
        // private alertService: AlertService
    ) { 
        this.registerForm = this.formBuilder.group({
            mobileNumberControl: new FormControl('', [
                Validators.required,
                Validators.minLength(11),
                // Validators.maxLength(12),
              ]),
            usernameControl: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                // Validators.maxLength(20)
              ]),
            passwordControl: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                // Validators.maxLength(20)
              ])
        });
    }

    ngOnInit(): void {
         
    }


    // convenience getter for easy access to form fields
    get thisFormControls() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        // this.alertService.clear();

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;

        let objectssadf = this.registerForm.value;
        this.inputUser.mobile = objectssadf.mobileNumberControl;
        this.inputUser.username = objectssadf.usernameControl;
        this.inputUser.password = objectssadf.passwordControl;

        this.userAccountService.register(this.inputUser)
            .pipe(first())
            .subscribe({
                next: (res) => {
                    // this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    console.log('registration successful' + res);
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: (error) => {
                    // this.alertService.error(error);
                    console.log(`Error ${error}`);
                    this.loading = false;
                }
            });
    }
}
