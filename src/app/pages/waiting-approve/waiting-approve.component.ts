import { Component, OnInit } from '@angular/core';
import { WaitingApproveService } from './shared/waiting-approve.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-waiting-approve',
  templateUrl: './waiting-approve.component.html',
  styleUrls: ['./waiting-approve.component.css']
})
export class WaitingApproveComponent implements OnInit {
  arrHistory: any[] = [];
  people_generate: any;
  is_status: any;
  arrlength: any;
  //chk login
  username: any;
  constructor(private WaitingApproveService: WaitingApproveService, private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("people_name");
    if (this.username == null) {
      window.open('pages-login', '_self');
    }
    this.people_generate = localStorage.getItem("people_generate");
    this.is_status = localStorage.getItem("is_status");
    this.WaitingApproveService.SelectWaitingApproveisStatus(this.people_generate, this.is_status).subscribe((res: any) => {
      if (res) {
        console.log(res.length);
        this.arrHistory = res;
        this.arrlength = res.length;
      }
    });
  }
  func_reject_info(people_generate: string) {
    localStorage.setItem("for_edit_people_generate", people_generate)
    this.router.navigate(['pages-edit-people']);
  }

}
