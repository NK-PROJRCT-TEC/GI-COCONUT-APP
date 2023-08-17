import { Component, OnInit, ViewChild } from '@angular/core';
import { PagesUserProfilePeopleService } from './shared/pages-user-profile-people.service';
import { peopleModel } from 'src/app/model/peopleModel';
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
export class PagesUserProfilePeopleComponent  implements OnInit {
  people_generate:any;
  markerPositions: google.maps.LatLngLiteral[] = [];
  arrpeopleModel: any[] = [];
  objpeopleModel: peopleModel = new peopleModel();
  constructor(private PagesUserProfilePeopleService: PagesUserProfilePeopleService) {
    // this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Gmz0etSdLrgauyFXLLRy9P0aLrEKlfs', 'callback')
    //   .pipe(
    //     map(() => true),
    //     catchError(() => of(false)),
    //   );
  }
  ngOnInit(): void {
    this.people_generate = localStorage.getItem("profile_people_generate");
    console.log(this.people_generate);
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
