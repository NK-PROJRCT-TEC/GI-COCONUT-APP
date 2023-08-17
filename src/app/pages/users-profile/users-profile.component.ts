import { Component, OnInit, ViewChild } from '@angular/core';
import { studentModel } from 'src/app/model/studentModel';
import { UserprofileStudentService } from './shared/userprofile-student.service';
import { PhotoandLocationModel } from 'src/app/model/PhotoandLocationModel';
//google map
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  objstudentModel: studentModel = new studentModel();
  objPhotoandLocationModel: PhotoandLocationModel = new PhotoandLocationModel();
  arrStudent: any[] = [];
  arrPhotoandLocation: any[] = [];
  getJson: any;
  //google map
  apiLoaded: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: { lat: 15, lng: 100 },
    zoom: 4
  };
  lat: any;
  lng: any;
  markerPositions: google.maps.LatLngLiteral[] = [];
  constructor(httpClient: HttpClient, private UserprofileStudentService: UserprofileStudentService) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Gmz0etSdLrgauyFXLLRy9P0aLrEKlfs', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }
  ngOnInit(): void {
    this.getJson = localStorage.getItem("arrStudentinfo");
    this.objstudentModel = JSON.parse(this.getJson);
    console.log(this.objstudentModel.student_firstname);
    this.UserprofileStudentService.SelectPhotoandLocationInfo(this.objstudentModel.generate).subscribe((res: any) => {
      if (res) {
        this.objPhotoandLocationModel = res;
        this.arrPhotoandLocation = res;
        const decoder = new TextDecoder();
        const decodedData = decoder.decode(res.img1);
        console.log(decodedData);
        console.log(res);
        this.markerPositions.push({ lat: parseFloat(this.arrPhotoandLocation[0].lat), lng: parseFloat(this.arrPhotoandLocation[0].lng) });
        this.lat = parseFloat(this.arrPhotoandLocation[0].lat);
        this.lng = parseFloat(this.arrPhotoandLocation[0].lng);
      } else {
        alert("TEST");
      }
    });

  }
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = { lat: 15.700400, lng: 100.124451 };
  zoom = 10;
  heatmapOptions = { radius: 5 };
  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
