import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared-components/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  
  constructor(private router: Router, private userService: UserService) {
    // redirect to home if already logged in
    if (this.userService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {}
}
