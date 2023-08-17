import { Component } from '@angular/core';
import { PagesRegisService } from './shared/pages-regis.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pages-regis',
  templateUrl: './pages-regis.component.html',
  styleUrls: ['./pages-regis.component.css']
})
export class PagesRegisComponent {
  username: any;
  password: any;
  position: any;
  class_teacher: any;
  constructor(private PagesRegisService: PagesRegisService) { }

  ngOnInit(): void {
  }
  register() {
    this.PagesRegisService.Register(this.username, this.password, this.position, this.class_teacher).subscribe((res: any) => {
      if (res) {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: '<h5 style="font-family: Kanit-Regular;">ลงทะเบียนสำเร็จ</h5>'
        })
        localStorage.setItem("username", res[0].username);
        localStorage.setItem("password", res[0].password);
        window.open('#/pages/pages-login-employee', '_self');
      } else {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">ลงทะเบียนไม่สำเร็จ</h5>'
        })
      }
    });
  }
}
