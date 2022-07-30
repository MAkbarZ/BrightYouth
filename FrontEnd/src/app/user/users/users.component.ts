import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared-components/model/user.model';
import { UserAccountService } from 'src/app/shared-components/service/user-account.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User;

  constructor(private userAccountService: UserAccountService) {
        this.user = this.userAccountService.userValue;
       }

  ngOnInit(): void {
  }

}
