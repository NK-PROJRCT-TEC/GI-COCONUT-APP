import { Component, OnInit, ViewChild } from '@angular/core';
import { PagesUserProfilePeopleService } from './shared/pages-user-profile-people.service';
import { peopleModel } from 'src/app/model/peopleModel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//google map
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
// import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pages-user-profile-people',
  templateUrl: './pages-user-profile-people.component.html',
  styleUrls: ['./pages-user-profile-people.component.css']
})
export class PagesUserProfilePeopleComponent implements OnInit {
  username: any;
  people_generate: any;
  markerPositions: google.maps.LatLngLiteral[] = [];
  arrpeopleModel: any[] = [];
  objpeopleModel: peopleModel = new peopleModel();
  is_check: boolean = false;
  constructor(private PagesUserProfilePeopleService: PagesUserProfilePeopleService, private router: Router) {
    // this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Gmz0etSdLrgauyFXLLRy9P0aLrEKlfs', 'callback')
    //   .pipe(
    //     map(() => true),
    //     catchError(() => of(false)),
    //   );
  }
  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.people_generate = localStorage.getItem("profile_people_generate");
    console.log(this.people_generate);
    if (this.username != null) {
      this.is_check = true;
    }
    if (this.people_generate != null) {
      this.is_check = true;
    }
    if(this.is_check == false){
      this.router.navigate(['pages-login']);
    }
    this.PagesUserProfilePeopleService.SelectProfilePeopleinfo(this.people_generate).subscribe((res: any) => {
      if (res) {
        this.arrpeopleModel = res;
        console.log(res);
      } else {
        Swal.fire({
          icon: 'warning',
          title: '<h6 style="font-family: Kanit-Regular;">ไม่พบข้อมูล</h6>'
        })
      }
    });

  }

}
