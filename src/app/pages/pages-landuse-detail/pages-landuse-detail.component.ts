import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { PagesLanduseDetailService } from './shared/pages-landuse-detail.service';
@Component({
  selector: 'app-pages-landuse-detail',
  templateUrl: './pages-landuse-detail.component.html',
  styleUrls: ['./pages-landuse-detail.component.css']
})
export class PagesLanduseDetailComponent {
  apiLoaded: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: { lat: 12, lng: 100 },
    zoom: 10
  };
  landuse_lat: any;
  landuse_lng: any;
  landuse_id: any;
  arr_landuse_info: any[] = [];
  constructor(httpClient: HttpClient, private router: Router, private PagesLanduseDetailService: PagesLanduseDetailService) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Gmz0etSdLrgauyFXLLRy9P0aLrEKlfs', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }
  ngOnInit(): void {
    this.landuse_id = localStorage.getItem("landuse_id");
    this.PagesLanduseDetailService.SelectLandUseInfoByLanduseID(this.landuse_id).subscribe((res: any) => {
      if (res) {
        this.arr_landuse_info = res;
        this.markerPositions.push({ lat: parseFloat(this.arr_landuse_info[0].landuse_lat), lng: parseFloat(this.arr_landuse_info[0].landuse_lng) });
        
      }
    });
  }
  center: google.maps.LatLngLiteral = { lat: 15.695466855915292, lng: 100.09795791010771 };
  zoom = 8;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  addMarker(event: google.maps.MapMouseEvent) {

    if (event.latLng != null) {
      const latLng = event.latLng;
      const position = latLng.toJSON();
      // this.markerPositions.push(event.latLng.toJSON());
      this.markerPositions[0] = event.latLng.toJSON();
      console.log(event.latLng.toJSON());
      // console.log(`Added marker at (${position.lat}, ${position.lng})`);
    }
  }
}
