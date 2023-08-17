import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-pages-route-login',
  templateUrl: './pages-route-login.component.html',
  styleUrls: ['./pages-route-login.component.css']
})
export class PagesRouteLoginComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  route_login() {

  }
  route_person() {
    this.router.navigate(['pages-login']);
  }
  route_page_login_employee() {
    this.router.navigate(['pages-login-employee']);
  }
}
