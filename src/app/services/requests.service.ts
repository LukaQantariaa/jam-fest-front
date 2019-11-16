import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  requests_url = 'http://localhost:3000/request';

  constructor(
    private http: HttpClient
  ) { }

  requestPost(params){
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers : headers };
    return this.http.post(this.requests_url, params, options);
  }
  requestPut(params){
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers : headers };
    return this.http.put(this.requests_url, params, options);
  }


}

