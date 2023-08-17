import { Component, OnInit } from '@angular/core';
import { PagesLoginEmployeeService } from './shared/pages-login-employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pages-login-employee',
  templateUrl: './pages-login-employee.component.html',
  styleUrls: ['./pages-login-employee.component.css']
})
export class PagesLoginEmployeeComponent implements OnInit {
  employee_email: any;
  employee_password	: any;
  constructor(private PagesLoginEmployeeService: PagesLoginEmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employee_email = "employee@gmail.com";
    this.employee_password = "123456";
  }
  dashboard() {
    // localStorage.setItem("username", this.username);
    // localStorage.setItem("password", this.password);
    // window.open('#/pages/dashboard', '_self');
    // console.log(this.employee_email);
    // console.log(this.employee_password);
    this.PagesLoginEmployeeService.EmployeeLogin(this.employee_email, this.employee_password).subscribe((res: any) => {
      if (res.length > 0) {
        console.log(res);
        localStorage.setItem("employee_name", res[0].employee_name);
        localStorage.setItem("employee_generate", res[0].employee_generate);
        localStorage.setItem("employee_position", res[0].employee_position);
        localStorage.setItem("who_is", "employee");
        this.router.navigate(['pending-status']);
        // window.open('#/pages/waiting-approve', '_self');
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: '<h6 style="font-family: Kanit-Regular;">กรุณากรอกอีเมลล์และพาสเวิร์ดเพื่อเข้าสู่ระบบ</h6>'
        })
      }
    });


  }

}
