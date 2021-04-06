import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/maps';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

private username: string;
private clientid='077081e090818fb1cc4b';
private clientsecret= 'fe57832ff033be3763be5269c372231634423aec'; 
  constructor(private http: HttpClient) { 
    console.log("service ready")
    this.username='Evance23';
  }
getProfile(){
return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret="  + this.clientsecret)


.map((res:any)=>res.json());
}
}
