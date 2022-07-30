import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserAccountComponent } from './user-account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', component: UserAccountComponent, //} ,
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent }];
      children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'profile', component: ProfileComponent },
          // { path: '', redirectTo: "userAccount", pathMatch:'full' },
      ]
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountRoutingModule { }
