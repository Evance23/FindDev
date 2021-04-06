import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/common';

import { ServicesService } from './services.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent
    HttpModule,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
