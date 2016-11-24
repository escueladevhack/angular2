import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { EmotionsService } from '../shared/services/emotions.service';

@Component({
  selector: 'app-emotions-lister',
  templateUrl: './emotions-lister.component.html',
  styleUrls: ['./emotions-lister.component.css']
})
export class EmotionsListerComponent implements OnInit {

  resultados: any[];
  @Input() url: string;
  
  constructor(public emotionsService: EmotionsService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: {url: SimpleChange}) {
    this.getEmotions();
  }

   getEmotions() {
    this.emotionsService.getEmotions(this.url).subscribe(
      response =>  {
        const primerElemento = response.json()[0];
        this.resultados = Object.keys(primerElemento.scores).map(resultado => {
          return {
            emocion: resultado,
            puntaje: primerElemento.scores[resultado]
          }
        })
      },
      err => {
        console.log(err)
      },
      () => {
        console.log('end of the observable stream');
      }
    )
  }  

}
