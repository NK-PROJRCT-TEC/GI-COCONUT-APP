import { Component, OnInit } from '@angular/core';
import { WaitingApproveService } from '../waiting-approve/shared/waiting-approve.service';
import { PagesWaitingApproveLanduseDetailService } from './shared/pages-waiting-approve-landuse-detail.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pages-waiting-approve-landuse-detail',
  templateUrl: './pages-waiting-approve-landuse-detail.component.html',
  styleUrls: ['./pages-waiting-approve-landuse-detail.component.css']
})
export class PagesWaitingApproveLanduseDetailComponent {

  arrHistory: any[] = [];
  arrlength: any;
  landuse_id: any;
  username: any;
  constructor(private PagesWaitingApproveLanduseDetailService: PagesWaitingApproveLanduseDetailService, private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("people_name");
    if (this.username == null) {
      window.open('pages-login', '_self');
    }
    this.landuse_id = localStorage.getItem("landuse_id");
    this.PagesWaitingApproveLanduseDetailService.SelectHistoryApproveLanduse(this.landuse_id).subscribe((res: any) => {
      if (res) {
        this.arrHistory = res;
        this.arrlength = res.length;
        console.log(this.arrHistory);
      }
    });
  }
  func_reject_info(obj:any) {
    localStorage.setItem('jsonlanuse', JSON.stringify(obj));
    this.router.navigate(['pages-edit-landuse-detail']);
  }

}

