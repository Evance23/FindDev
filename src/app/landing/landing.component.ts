import { Component, OnInit } from '@angular/core';
import { ServicesService} from '../services.service';
// import {NgForm} from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


search = new FormControl('');
result: any
repos: any 

  constructor(private FindServicesservice:ServicesService) { }

  ngOnInit(): void {
    // this.FindServicesservice.getProfile("sir-collins").subscribe(response => console.log(response))   
  }

 
  onFindDev(){
    // console.log(this.search.value);
    this.FindServicesservice.getProfile(this.search.value).subscribe(response => this.result=response)
    

 }

}
