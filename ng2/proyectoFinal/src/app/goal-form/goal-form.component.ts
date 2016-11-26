import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Goal} from '../shared/models/goal';
import {GoalsService} from '../shared/services/goals.service';


@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  @Output() onSaved = new EventEmitter();  
  public goal : Goal;

  constructor(public goalsService : GoalsService) { 
    this.goal = new Goal();
  }

  ngOnInit() {
  }

  createGoal(){
    this.goalsService.create(this.goal).subscribe(
      response => {
        const json = response.json();
        if (typeof json.error == 'undefined')
          this.onSaved.emit(json);
      }
    );
  }

}
