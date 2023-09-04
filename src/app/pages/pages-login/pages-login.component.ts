import { Component, OnInit } from '@angular/core';
import { PagesLoginService } from './shared/pages-login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { myfont } from 'src/environments/myfont';
const CryptoJS = require('crypto-js');
@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {
  username: any;
  password: any;
  private font = myfont;
  constructor(private PagesLoginService: PagesLoginService, private router: Router) { }

  ngOnInit(): void {
    this.username = "admin@gmail.com";
    this.password = "123456";
    // console.log("TEST UPDATE GITHUB");
  }
  dashboard() {
    const enteredPasswordHash = CryptoJS.SHA256(this.password).toString(CryptoJS.enc.Hex);
    this.PagesLoginService.Login(this.username, this.password,enteredPasswordHash).subscribe((res: any) => {
      if (res.length == 1) {
        localStorage.setItem("username", this.username);
        localStorage.setItem("password", this.password);
        localStorage.setItem("people_name", res[0].people_name);
        localStorage.setItem("people_generate", res[0].people_generate);
        localStorage.setItem("is_status", res[0].is_status);
        localStorage.setItem("who_is", "people");
        localStorage.setItem('people_image_profile', res[0].people_image_profile);

        if (res[0].is_status == '2') {
          this.router.navigate(['dashboard']);

        } else {
          this.router.navigate(['waiting-approve']);
        }

      }
      else {
        Swal.fire({
          icon: 'warning',
          title: '<h6 style="font-family: THSarabunNew;font-size:24px;">กรุณากรอกอีเมลล์และพาสเวิร์ดเพื่อเข้าสู่ระบบ</h6>',
          confirmButtonText : '<h6 style="font-family: THSarabunNew;font-size:24px;">ตกลง</h6>'
        })
      }
    });


  }

}
