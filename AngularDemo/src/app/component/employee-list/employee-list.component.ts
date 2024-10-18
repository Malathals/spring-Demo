import { Component } from '@angular/core';
import { Employee } from '../../models/data';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  EmployeeList: Employee[] = [];
  errorMessage: string = '';

  constructor(private employeeService: EmployeeService) {}

  fetchEmployees() {
    this.employeeService.getEmployee().subscribe(
      (res: any) => {
        this.EmployeeList = res;
      },
      (error: any) => {
        console.error('Error fetching employees:', error);
      },
      
    );
  }
  


  ngOnInit() {
    this.fetchEmployees();

  }
}
