import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Array<Employee> = [];

  constructor() { }

  ngOnInit() {
    const employee1 = new Employee();
    employee1.firstName = 'John';
    employee1.lastName = 'Anderson';
    employee1.email = 'janderson@emails.com';
    employee1.phone = '1400 123 567';
    employee1.salary = 31000;

    const employee2 = new Employee();
    employee2.firstName = 'John2';
    employee2.lastName = 'Anderson2';
    employee2.email = 'janderson2@emails.com';
    employee2.phone = '2400 123 567';
    employee2.salary = 32000;

    const employee3 = new Employee();
    employee3.firstName = 'John3';
    employee3.lastName = 'Anderson3';
    employee3.email = 'janderson3@emails.com';
    employee3.phone = '3400 123 567';
    employee3.salary = 33000;

    const employee4 = new Employee();
    employee4.firstName = 'John4';
    employee4.lastName = 'Anderson4';
    employee4.email = 'janderson4@emails.com';
    employee4.phone = '4400 123 567';
    employee4.salary = 34000;

    this.employees.push(
      employee1,
      employee2,
      employee3,
      employee4
    );
  }

}
