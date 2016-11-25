import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  people;

  constructor(private dataService: DataService) {
    dataService.getPeople().subscribe(response => {
      this.people = response.json();
    }),
    err => {console.log(err)},
    _ => {console.log('listones!')}
  }

  ngOnInit() {
  }

}
