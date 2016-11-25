import { Injectable } from '@angular/core';
import {Http, Headers, Response } from "@angular/http";

@Injectable()
export class DataService {

  urlDelAPI: string = 'http://localhost:3000/api';

  constructor(private hachetetepe: Http) { }

  getPeople() {
    const endPoint = '/hotels';
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    
    return this.hachetetepe.get(this.urlDelAPI + endPoint, {headers: headers})
    ;
  }

  getOne(id) {
    const endPoint = '/hotel';
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    
    return this.hachetetepe.get(`${this.urlDelAPI + endPoint}/${id} `, {headers: headers})
    ;
  }

}
