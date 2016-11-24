import { Component, OnInit } from '@angular/core';
import { EmotionsService } from '../shared/services/emotions.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  laURL: string = 'https://i.ytimg.com/vi/Km5A8m6bt_M/maxresdefault.jpg';
  resultados: any[];

  constructor(public emotionsService: EmotionsService) {
  }

  ngOnInit() {
  }

  getEmotions() {
    this.emotionsService.getEmotions(this.laURL).then(data => {
      this.resultados = Object.keys(data[0].scores).map(resultado => {
        return {
          emocion: resultado,
          puntaje: data[0].scores[resultado]
        }
      })

    });
  }

}
