import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data$: Observable<Array<User>>;

    constructor(private _svc: DataService) { }

    ngOnInit() {
    }

    getMyData(): void {
      this.data$ = this._svc.getData();
    }

}
