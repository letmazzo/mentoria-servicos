import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevsService {

  constructor() { }
  
  getDevs() {
    return ['Bia', 'Lays', 'Le']
  }
}
