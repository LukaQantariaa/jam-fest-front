import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category_url = 'http://localhost:3000/category';

  constructor(
    private http: HttpClient
  ) { }

  categoryGet(){
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers : headers };
    return this.http.get(this.category_url,  options);
  }

}
