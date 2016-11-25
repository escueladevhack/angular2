import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() character: string;
  detailedView: boolean = false;

  constructor(private route: ActivatedRoute, private dataService: DataService) { 
    let id = this.route.snapshot.params['id'];
    if(id) {
      this.detailedView = true;

      this.dataService.getOne(id).subscribe(response => {
        this.character = response.json();
      }),
      err => {console.log(err)},
      _ => {console.log('listones!')}
    }
  }

  ngOnInit() {
  }


}
