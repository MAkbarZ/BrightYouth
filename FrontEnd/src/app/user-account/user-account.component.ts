import { Component, OnInit } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, Router } from '@angular/router';
import { User } from '../shared-components/model/user.model';
import { UserAccountService } from '../shared-components/service/user-account.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  constructor(private router: Router,
    private userAccountService: UserAccountService
    ) { 

      // let userVal = this.userAccountService.userValue
      // redirect to home if already logged in
      // this.router.navigate(['/userAccount/register']);
      if (this.userAccountService.userValue.id > 0) {
        // console.log(this.userAccountService.userValue);
        this.router.navigate(['/userAccount/profile']);
        // console.log('logged in');
        // console.log(userVal);
      } else {
        // console.log('not logged in');
        // this.router.navigate(['/userAccount/register']);
        this.router.navigate(['/userAccount/login']);
      }
    }

  ngOnInit(): void {
  }

}
