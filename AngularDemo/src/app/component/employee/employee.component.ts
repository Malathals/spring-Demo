import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../models/data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
 @Input() employee: Employee [] = [];

  constructor() {
    // this.employee =
    // {
    //   id: 0,
    //   firstName: "",
    //   lastName:"",
    //   department:"",
    //   country:"",
    //   email: ""
    // }

  }

  ngOnInit(): void {}
 

}
