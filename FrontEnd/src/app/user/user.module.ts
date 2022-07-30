import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
// import { UsersComponent } from './users/users.component';
import { UserComponent } from './user.component';
// import { UserRoleComponent } from './user-role/user-role.component';
// import { MerchantComponent } from './merchant/merchant.component';



@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  // exports: [UserComponent]
})
export class UserModule { }
