import { Component, OnInit } from '@angular/core';
import { PagesWaitingApproveLanduseService } from './shared/pages-waiting-approve-landuse.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-pages-waiting-approve-landuse',
  templateUrl: './pages-waiting-approve-landuse.component.html',
  styleUrls: ['./pages-waiting-approve-landuse.component.css']
})
export class PagesWaitingApproveLanduseComponent implements OnInit {
  people_generate: any;
  is_status: any = "1";
  arrLandUse: any[] = [];
  test: any = "www.google.com";
  username: any;
  password: any;
  filter_province: any;
  province: any;
  filter_amphures: any;
  amphures: any;
  filter_districts: any;
  districts: any;
  is_check: boolean = false;
  constructor(private PagesWaitingApproveLanduseService: PagesWaitingApproveLanduseService, private router: Router) {

  }
  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.password = localStorage.getItem("password");
    if (this.username != null) {
      this.is_check = true;
    }
    if (this.people_generate != null) {
      this.is_check = true;
    }
    if (this.is_check == false) {
      this.router.navigate(['pages-login-employee']);
    }
    this.PagesWaitingApproveLanduseService.SelectProvinces().subscribe((res: any) => {
      if (res) {
        this.province = res;

      }
    });
    this.PagesWaitingApproveLanduseService.SelectAmphures().subscribe((res: any) => {
      if (res) {
        this.amphures = res;

      }
    });
    this.PagesWaitingApproveLanduseService.SelectDistricts().subscribe((res: any) => {
      if (res) {
        this.districts = res;
        console.log(this.districts);
      }
    });
    this.people_generate = localStorage.getItem('people_generate');
    this.PagesWaitingApproveLanduseService.SelectLandusebyPeopleGenerateAndStatus(this.people_generate).subscribe((res: any) => {
      if (res) {
        this.arrLandUse = res;
        for (let index = 0; index < this.arrLandUse.length; index++) {
          this.arrLandUse[index].certificate = "http://localhost:4200/pages-certificate/get=" + this.arrLandUse[index].landuse_id;

          // for (let x = 0; this.districts < this.districts.length; x++) {
          //   if(this.districts[x].id ==this.arrLandUse[index].districts){
          //   }
          // }
          // this.PagesWaitingApproveLanduseService.FilterDistrictsByid(this.arrLandUse[index].districts).subscribe((res: any) => {
          //   if (res) {
          //     console.log(res);
          //   }
          // });
        }
      }
    });


  }
  func_reject_info(e: any) {
  }
  route_google_map(latitude: any, longitude: any) {
    // https://www.google.co.th/maps/@18.3170581,99.3986862,17z?hl=th
    // var link = "https://www.google.com/maps?q=" + latitude + "," + longitude;
    // var button = document.createElement("a");
    // button.href = link;
    // button.textContent = "ไปยัง Google Maps";
    // document.body.appendChild(button);
    window.open('https://www.google.co.th/maps?q' + latitude + ',' + longitude + '');
  }
  landuse_info(obj: any) {
    this.router.navigate(['pages-edit-landuse-detail']);
    localStorage.setItem("landuse_id", obj.landuse_id);
  }
  GenerateQRCode(e: any) {
    console.log(e);
  }
  func_filter_province() {

  }
  func_filter_amphures() {

  }
  func_filter_districts() {

  }
}
