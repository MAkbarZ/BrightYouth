import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { fakeBackendProvider } from './shared-components/interceptor/fake-backend.interceptor';
import { JwtInterceptor } from './shared-components/interceptor/jwt.interceptor';
import { ErrorInterceptor } from './shared-components/interceptor/error.interceptor';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared-components/page-not-found/page-not-found.component';
import { AlertComponent } from './shared-components/alert/alert.component';
import { HomeComponent } from './home/home/home.component';
import { UsersComponent } from './user/users/users.component';
// import { FilterProductPipe } from './shared-components/pipes/filter-product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    // HomeComponent, //I will user Users Component instead.
    // UsersComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
