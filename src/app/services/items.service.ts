import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items_url = 'http://localhost:3000/items';

  constructor(
    private http: HttpClient
  ) { }

  itemsPost(params){
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers : headers };
    return this.http.post(this.items_url, params, options);
  }
  itemsPut(params){
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers : headers };
    return this.http.put(this.items_url, params, options);
  }


}

