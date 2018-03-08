import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoListArray: any[];
  constructor(private todoSvc: TodoService) { }

  ngOnInit() {
    this.todoSvc.getTodoList().snapshotChanges()
     .subscribe(item => {
       this.todoListArray = [];
       item.forEach(elm => {
         const x = elm.payload.toJSON();
         x['$key'] = elm.key;
         this.todoListArray.push(x);
       });
       // sort array isChecked false -> true
       this.todoListArray.sort((a, b) => {
         return a.isChecked - b.isChecked;
       });
     });
  }

  onAdd(itemTitle) {
    this.todoSvc.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  alterCheck($key: string, isChecked) {
    this.todoSvc.checkOrUnCheckTitle($key, !isChecked);
  }

  onDelete($key: string) {
    this.todoSvc.removeTitle($key);
  }

}
