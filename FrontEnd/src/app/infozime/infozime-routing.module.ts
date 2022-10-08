import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfozimeComponent } from './infozime.component';

const routes: Routes = [{ path: '', component: InfozimeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfozimeRoutingModule { }
