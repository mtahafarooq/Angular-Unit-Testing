import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingServiceService {

  constructor() { }

  add(a, b) {
    return a + b;
  }
}

