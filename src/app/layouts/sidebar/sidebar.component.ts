import { Component, OnInit } from '@angular/core';
import { PagesLandInformationService } from 'src/app/pages/pages-land-information/shared/pages-land-information.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  username: any;
  employee_name: any;
  who_is: any;
  is_people: boolean = false;


  people_generate: any;
  arrpeopleModel: any[] = [];
  arrLandUseModel: any[] = [];
  constructor(private PagesLandInformationService: PagesLandInformationService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.employee_name = localStorage.getItem("employee_name");
    this.who_is = localStorage.getItem("who_is");
    console.log(this.who_is, typeof (this.who_is));
    if (this.who_is == "people") {
      this.is_people = true;
      this.people_generate = localStorage.getItem("people_generate");
      console.log(this.people_generate);
      this.PagesLandInformationService.SelectProfilePeopleinfo(this.people_generate).subscribe((res: any) => {
        if (res) {
          this.arrpeopleModel = res;
        } else {
          Swal.fire({
            icon: 'warning',
            title: '<h6 style="font-family: Kanit-Regular;">ไม่พบข้อมูล</h6>'
          })
        }
      });
      this.PagesLandInformationService.SelectLandUseInfo(this.people_generate).subscribe((res: any) => {
        if (res) {
          this.arrLandUseModel = res;
          console.log(this.arrLandUseModel[0].is_status);
        } else {
          Swal.fire({
            icon: 'warning',
            title: '<h6 style="font-family: Kanit-Regular;">ไม่พบข้อมูล</h6>'
          })
        }
      });
    } else {
      this.is_people = false;
    }


  }

}
