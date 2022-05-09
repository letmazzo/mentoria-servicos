import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL = "http://localhost:3000/users"
  users: any

  constructor(private http: HttpClient) {
  //   console.log('Api github services');
  }

  // npm i json-server
  // cria arquivo db.json
  // npx json-server --watch db.json

  // 3
  getUser() {
    return this.http.get(this.apiURL)
  }
}
