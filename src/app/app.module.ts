import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHeaders} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ServicesService } from './services.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from  './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
