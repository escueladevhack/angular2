import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  laURL: string = 'https://i.ytimg.com/vi/Km5A8m6bt_M/maxresdefault.jpg';

  constructor() {
  }

  ngOnInit() {
  }

 
}
