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

  open(content: any) {
    window.alert("hi")
    const NgbModalRef = this.modalService.open(content);
    NgbModalRef.result
      .then((result) => {
        console.log(`Modal closed with: ${result}`);
      })
      .catch((error) => {
        console.log(`Modal dismissed with reason: ${error}`);
      });
  }
}
