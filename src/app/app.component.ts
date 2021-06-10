import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ng-Form-Validation';
  employee: Employee;
  constructor() {
    this.employee = new Employee();
  }

  onSubmit(formObj: NgForm) {
    console.log(formObj);
  }
}
