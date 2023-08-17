import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { }
  people_name: any;
  people_generate: any;
  employee_name: any;
  employee_generate: any;
  ngOnInit(): void {
    this.people_name = localStorage.getItem("people_name");
    this.people_generate = localStorage.getItem("people_generate");
    this.employee_name = localStorage.getItem("employee_name");
    this.employee_generate = localStorage.getItem("employee_generate");
    // console.log(this.people_name);
    // console.log(this.employee_name);
  }
  sidebarToggle() {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
  SignOut() {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.removeItem("is_status");
    localStorage.removeItem("people_name");
    localStorage.removeItem("people_generate");
    this.router.navigate(['pages-login']);

  }
  SignOutEmployee() {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.removeItem("employee_name");
    localStorage.removeItem("employee_generate");
    localStorage.removeItem("employee_position");
    this.router.navigate(['pages-login-employee']);
  }
  peopleprofile() {
    localStorage.setItem("profile_people_generate", this.people_generate)
    this.router.navigate(['pages-user-profile-people']);
  }
}
