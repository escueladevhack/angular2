import { Component, OnInit } from '@angular/core';

import { Goal } from '../shared/models/goal';

import { GoalsService } from '../shared/services/goals.service';

@Component({
  selector: 'app-list-goals',
  templateUrl: './list-goals.component.html',
  styleUrls: ['./list-goals.component.css']
})
export class ListGoalsComponent implements OnInit {

  goalsList: Array<Goal>;
  isVisible: boolean = false;

  constructor(public goalService: GoalsService) { }

  ngOnInit() {
    this.goalService.getAll().subscribe(
      response => {
        this.goalsList = response.json();
        console.log(response.json());
      },
      err => {

      },
      () => {

      }
    )
  }

  showForm() {
    this.isVisible = true;
  }

  addGoal(goal:Goal){
    this.goalsList.unshift(goal);   
  }

}
