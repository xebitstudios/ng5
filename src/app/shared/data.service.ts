import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http/src/client';
import { User } from './models/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>([
    'The initial goal',
    'Another high level goal'
  ]);

  goal = this.goals.asObservable();

  apiAddress: string;
  data: Array<User> = [];

  constructor(private _http: HttpClient) {
    this.apiAddress = 'https://jsonplaceholder.typicode.com/users';
  }

  changeGoal(goal) {
    this.goals.next(goal);
  }

  getData(): Observable<Array<User>> {
    console.log('array called...');
    return this._http.get<Array<User>>(this.apiAddress);
  }

}
