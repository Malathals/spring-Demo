import { Component, OnInit, Input, inject, ViewChild } from '@angular/core';
import { Employee } from '../../models/data';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../service/employee.service';
import internal from 'stream';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee[] = [];
  @ViewChild('content') content!: any;
  private modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  newEmployee: Employee = {
    userID: 0,
    firstName: '',
    lastName: '',
    department: '',
    email: '',
    country: '',
  };
  isReadOnly: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(
  ): void {}

  addNewEmployee() {
    console.log('Adding new employee!');
    alert('New Employee Added!');
  }

  open(content: any) {
    this.modalRef = this.modalService.open(content);
    this.modalRef.result
      .then((result) => {
        console.log('Form Data:', this.newEmployee);
        this.resetForm();
      })
      .catch((reason) => {
        console.log(`Modal dismissed with reason: ${reason}`);
        this.resetForm();
      });
  }

  openDetailedForm(form: any, spesificEmployee: Employee) {
    this.isReadOnly = true;
    this.newEmployee = { ...spesificEmployee };

    this.modalRef = this.modalService.open(form);
    this.modalRef.result
      .then((result) => {
        console.log('Form Data:', this.newEmployee);
        this.resetForm();
      })
      .catch((reason) => {
        console.log(`Modal dismissed with reason: ${reason}`);
        this.resetForm();
      });
  }

  openEditiedForm(form: any, spesificEmployee: Employee) {
    this.isReadOnly = false;
    this.newEmployee = { ...spesificEmployee };

    this.modalRef = this.modalService.open(form);
    this.modalRef.result
      .then((result) => {
        console.log('Form Data:', this.newEmployee);
        this.resetForm();
      })
      .catch((reason) => {
        console.log(`Modal dismissed with reason: ${reason}`);
        this.resetForm();
      });
  }

  resetForm() {
    this.newEmployee = {
      firstName: '',
      lastName: '',
      department: '',
      email: '',
      country: '',
      userID: 0,
    };
  }
  submitForm(formInput: Employee) {
    console.log('Submitted Employee:', formInput);
    this.employeeService.postEmployee(formInput).subscribe(
      (response) => {
        console.log('Employee added successfully:');
        this.modalRef.close('Save click');
      },
      (error) => {
        console.error('Error added employee:', error);
      },
    );
  }

  deleteEmployee(employeeID: number) {
    this.employeeService.deleteEmployee(employeeID).subscribe(
      (res) => {
        console.log('Deleted');
      },
      (error) => {
        console.log(error);
      },
    );
  }

  EditForm(employee: Employee) {
    this.employeeService.editEmployee(employee.userID, employee).subscribe(
      (response) => {
        console.log('Employee added successfully:');
        this.modalRef.close('Save click');
        this.ngOnInit();
      },
      (error) => {
        console.error('Error added employee:', error);
      },
    );
  }
}
