import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetectService {
  detect_url = 'http://localhost:3000/detect';

  constructor(
    private http: HttpClient
  ) { }

  detectPost(params){
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers : headers };
    return this.http.post(this.detect_url, params,  options);
  }
}
