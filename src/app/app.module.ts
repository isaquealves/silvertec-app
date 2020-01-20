import { ErrorInterceptorHelper } from './_helpers/error.interceptor';
import { JWTInterceptorHelper } from './_helpers/jw.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from './materialize/materialize.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from '@/top-bar/top-bar.component';
import { LoginComponent } from '@/login/login.component';
import { HomeComponent } from '@/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from '@/register/register.component';
import { fakeBackendProvider } from './_helpers';
import {AlertComponent} from '@/components/alert';
import { ProcessorsComponent, MainboardsComponent, MemoryComponent, GraphicsComponent } from '@/_computer-parts';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AlertComponent,
    ProcessorsComponent,
    MainboardsComponent,
    MemoryComponent,
    GraphicsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [
    fakeBackendProvider,
    {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptorHelper, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorHelper, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
