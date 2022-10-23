import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared-components/guard/auth.guard';
import { PageNotFoundComponent } from './shared-components/page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', component:HomeComponent },
  { path: '', redirectTo: "home", pathMatch:'full' },
  { path: 'home', loadChildren: ()=> import('./home/home.module').then(m=> m.HomeModule)},
  // { path: '/', component:HomeComponent },
  // { path: 'home', component:HomeComponent },
  { path: 'user', 
      loadChildren: () => import('./user/user.module').then(m => m.UserModule), 
      canActivate: [AuthGuard] },
  { path: 'userAccount', loadChildren: () => import('./user-account/user-account.module').then(m => m.UserAccountModule) },
  // { path: 'login', redirectTo: "userAccount", pathMatch:'full' },
  // { path: 'register', redirectTo: "userAccount", pathMatch:'full' },
  { path: 'courses', loadChildren: ()=> import('./courses/courses.module').then(m=> m.CoursesModule)},
  { path: 'shopping', loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule) },
  { path: 'infozime', loadChildren: () => import('./infozime/infozime.module').then(m => m.InfozimeModule) },
  { path: 'tools', loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule) },
  // { path: 'product', loadChildren: () => import('./business/product/product.module').then(m => m.ProductModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//{preloadingStrategy: PreloadAllModules}