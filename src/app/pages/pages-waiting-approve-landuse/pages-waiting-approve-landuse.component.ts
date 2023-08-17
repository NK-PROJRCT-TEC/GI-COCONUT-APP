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
  constructor(private PagesWaitingApproveLanduseService: PagesWaitingApproveLanduseService, private router: Router) {

  }
  ngOnInit(): void {
    this.people_generate = localStorage.getItem('people_generate');
    this.PagesWaitingApproveLanduseService.SelectLandusebyPeopleGenerateAndStatus(this.people_generate).subscribe((res: any) => {
      if (res) {
        this.arrLandUse = res;
        for (let index = 0; index < this.arrLandUse.length; index++) {
          this.arrLandUse[index].certificate = "http://localhost:4200/pages-certificate/get=" + this.arrLandUse[index].landuse_id;

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
    console.log(obj)
  }
  GenerateQRCode(e: any) {
    console.log(e);
  }
}
