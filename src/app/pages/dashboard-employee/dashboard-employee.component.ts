import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard-employee',
  templateUrl: './dashboard-employee.component.html',
  styleUrls: ['./dashboard-employee.component.css']
})
export class DashboardEmployeeComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }
  employee_name: any;
  employee_generate: any;
  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
    this.employee_name = localStorage.getItem("employee_name");
    this.employee_generate = localStorage.getItem("employee_generate");
    if (this.employee_name == null) {
      window.open('pages-login-employee', '_self');
    }
  }
  insert_detail_student() {
    window.open('insert-detail-student', '_self');
  }
  pending_status(){
    window.open('pending-status', '_self');
  }
  search_student(){
    window.open('search-student', '_self');
  }
}
