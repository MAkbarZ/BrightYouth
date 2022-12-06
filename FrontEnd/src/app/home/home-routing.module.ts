import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, 
    children: [
      { path: 'hazra', component: HomeComponent },
      { path: 'islam', component: HomeComponent },
      { path: 'politics', component: HomeComponent },
      { path: 'education', component: HomeComponent },
      { path: 'sports', component: HomeComponent },
      { path: 'entertainment', component: HomeComponent },
      // { path: 'accounting', loadChildren: () => import('./accounting/accounting.module').then(m => m.AccountingModule) },
    // { path: '', redirectTo: "userAccount", pathMatch:'full' },
    ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
