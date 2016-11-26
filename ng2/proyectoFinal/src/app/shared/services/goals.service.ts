import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Goal } from '../models/goal';

@Injectable()
export class GoalsService {
  API_URL: string = 'http://test-server.alquimedia.co/rest/goal';
  constructor(private http: Http ) { }

  getAll(){
    return this.http.get(this.API_URL);
  }

  getOne(id: number){
    return this.http.get(`${this.API_URL}/${id}`);
  }

  create(newGoal: Goal){
   const body =  newGoal.toString();
   return this.http.post(this.API_URL, body);
  }

  update(goal: Goal){
   const body =  goal.toString();
   return this.http.put(`${this.API_URL}/${goal.goal_id}`, body);
  }

  remove(goal_id: number){
   return this.http.delete(`${this.API_URL}/${goal_id}`);
  }

}
