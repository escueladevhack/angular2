import { Injectable } from '@angular/core';
import {Http, Headers, Response } from "@angular/http";

@Injectable()
export class EmotionsService {

  urlDelAPI: string = 'https://api.projectoxford.ai/emotion/v1.0/recognize';

  constructor(private hachetetepe: Http) { }

  getEmotions(urlDeLaImagen) {
    const stringDeDatos = JSON.stringify({'url': urlDeLaImagen});
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '49e072cd369c4e2b946357e83674fd2e'
    });
    
    return this.hachetetepe.post(this.urlDelAPI, stringDeDatos, {headers: headers})
    ;
  }

}
