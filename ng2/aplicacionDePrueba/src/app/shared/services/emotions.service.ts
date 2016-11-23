import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from "@angular/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class EmotionsService {

  urlDelAPI: string = 'https://api.projectoxford.ai/emotion/v1.0/recognize';

  constructor(private http: Http) { }

  getEmotions(urlDeLaImagen) {
    const stringDeDatos = JSON.stringify({'url': urlDeLaImagen});
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '49e072cd369c4e2b946357e83674fd2e'
    });
    
    return this.http.post(this.urlDelAPI, stringDeDatos, {headers: headers}).toPromise().then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err)
      return err;
    });
  }

}
