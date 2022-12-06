import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfozimeComponent } from './infozime.component';

const routes: Routes = [{ path: '', component: InfozimeComponent, 
children: [
  { path: 'main', component: InfozimeComponent },
  { path: 'store', component: InfozimeComponent },
  { path: 'grancee', component: InfozimeComponent },
  { path: 'knowKarachi', component: InfozimeComponent },
  { path: 'bizMarketing', component: InfozimeComponent },
  { path: 'about', component: InfozimeComponent },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfozimeRoutingModule { }
