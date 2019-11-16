import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login_url = 'http://localhost:3000/login';

  constructor(
    private http: HttpClient
  ) { }

  loginPost(params){
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers : headers };
    return this.http.post(this.login_url, params, options);
  }

}

// let headers = new HttpHeaders({
//   "Content-Type": "application/json"
// });
// let options = { headers : headers };
// this.http.post('http://localhost:3000/login', { username : "asuramaru3", password: 'paroli'}, options).subscribe((p)=>{
//   console.log(p)
// }, error => {
//   console.log(error)
// })
