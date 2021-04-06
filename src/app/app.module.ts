import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ServicesService } from './services.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
// import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    HttpClientModule,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
