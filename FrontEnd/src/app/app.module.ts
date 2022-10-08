import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor } from './shared-components/interceptor/jwt.interceptor';
import { ErrorInterceptor } from './shared-components/interceptor/error.interceptor';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared-components/page-not-found/page-not-found.component';
import { AlertComponent } from './shared-components/alert/alert.component';
import { AboutUsComponent } from './about-us/about-us.component';
// import { PaginationModule } from './shared-components/pagination/pagination.module';
// import { FilterProductPipe } from './shared-components/pipes/filter-product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    // HomeComponent, //I will user Users Component instead.
    // UsersComponent,
    PageNotFoundComponent,
    AboutUsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // PaginationModule,
    RouterModule
  ],
  providers: [ 
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
