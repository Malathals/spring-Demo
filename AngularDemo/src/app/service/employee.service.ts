import { Employee } from '../models/data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      'http://localhost:3200/employee/getEmployees',
    );
  }

  postEmployee(newEmployee : Employee): Observable<any>
  {
   return this.http.post(      
    'http://localhost:3200/employee/insertEmployee', newEmployee
    )
  }

  deleteEmployee(employeeID : number): Observable<any>
  {
   return this.http.delete(      
    `http://localhost:3200/employee/deleteEmployee/${employeeID}`
    )
  }

  editEmployee(employeeID : number,newEmployee : Employee) : Observable<any>
  {
   return this.http.put(      
    `http://localhost:3200/employee/updateEmployee/${employeeID}`, newEmployee 
    )
  }

}
