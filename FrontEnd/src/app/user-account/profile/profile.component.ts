import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/shared-components/model/user.model';
import { UserAccountService } from 'src/app/shared-components/service/user-account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  loginForm: FormGroup;
  
  constructor( private userAccountService: UserAccountService) { 
    this.user = this.userAccountService.userValue;
    this.loginForm = new FormGroup('');
  }

  ngOnInit(): void {
  }

}
