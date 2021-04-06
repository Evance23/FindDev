import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular';
import 'rxjs/add/operator/maps';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

private:username: string;
private: clientid='';
private: clientsecret
  constructor(private http: Http) { }

}
