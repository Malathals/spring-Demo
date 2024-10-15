import { Component, OnInit, Input, inject, ViewChild } from '@angular/core';
import { Employee } from '../../models/data';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee[] = [];
  @ViewChild('content') content!: any;
  private modalService = inject(NgbModal);

  constructor() {}

  ngOnInit(): void {}

  addNewEmployee() {
    console.log('Adding new employee!');
    alert('New Employee Added!');
  }

  open(content: any) {
    const modalRef = this.modalService.open(content);
    modalRef.result
      .then((result) => {
        console.log(`Modal closed with: ${result}`);
      })
      .catch((reason) => {
        console.log(`Modal dismissed with reason: ${reason}`);
      });
  }
}
