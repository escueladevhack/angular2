import { Component, OnInit } from '@angular/core';
import { EmotionsService } from '../shared/services/emotions.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(emotionsService: EmotionsService) {
    emotionsService.getEmotions('http://socgen.ucla.edu/wp-content/uploads/2013/02/fear-cropped-proto-custom_28.jpg').then(data => {
      console.log(data)
    })
  }

  ngOnInit() {
  }

}
