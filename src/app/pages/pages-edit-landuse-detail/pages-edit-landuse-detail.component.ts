import { Component, OnInit } from '@angular/core';
import { PagesEditLanduseDetailService } from './shared/pages-edit-landuse-detail.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// Google map
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
const { v4: uuidv4 } = require('uuid');
// images
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
@Component({
  selector: 'app-pages-edit-landuse-detail',
  templateUrl: './pages-edit-landuse-detail.component.html',
  styleUrls: ['./pages-edit-landuse-detail.component.css']
})
export class PagesEditLanduseDetailComponent implements OnInit {

  //google map
  apiLoaded: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: { lat: 15.6918913, lng: 100.1145833 },
    zoom: 15
  };
  lat: any;
  lng: any;
  people_generate: any;
  arrpeopleModel: any[] = [];
  //persent
  valuenow: any = "0%";
  valuenowInt: any = 0;
  //data
  prefix: any;
  prefix1: any;
  //INFORMATION
  color_of_shoot: any;
  type_of_coconut: any;
  bole: any;
  petiole_length: any;
  leaflet_length: any;
  number_of_spikelets: any;
  peduncle_length: any;
  young_fruit_weight: any;
  shape: any;
  //is information
  is_color_of_shoot: boolean = false;
  is_type_of_coconut = false;
  is_bole = false;
  is_petiole_length = false;
  is_leaflet_length = false;
  is_number_of_spikelets = false;
  is_peduncle_length = false;
  is_young_fruit_weight = false;
  is_shape = false;
  //NEW
  landuse_id: any;
  constructor(httpClient: HttpClient, private PagesEditLanduseDetailService: PagesEditLanduseDetailService, private router: Router) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Gmz0etSdLrgauyFXLLRy9P0aLrEKlfs', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
    this.landuse_id = localStorage.getItem("landuse_id");
    // this.PagesEditLanduseDetailService.SelectLandUseByLandByID(this.landuse_id).subscribe((res: any) => {
    //   if (res) {
    //     this.valuenow = res[0].landuse_persent;
    //     const myDiv = document.getElementById('progress_percent')!;
    //     myDiv.style.width = this.valuenow;
    //     this.color_of_shoot = res[0].landuse_color_of_shoot;
    //     this.type_of_coconut = res[0].landuse_type_of_coconut;
    //     this.bole = res[0].landuse_bole;
    //     this.petiole_length = res[0].landuse_petiole_length;
    //     this.leaflet_length = res[0].landuse_leaflet_length;
    //     this.number_of_spikelets = res[0].landuse_number_of_spikelets;
    //     this.peduncle_length = res[0].landuse_peduncle_length;
    //     this.young_fruit_weight = res[0].landuse_young_fruit_weight;
    //     this.shape = res[0].landuse_shape;
    //     this.markerPositions.push({ lat: parseFloat(res[0].landuse_lat), lng: parseFloat(res[0].landuse_lng) });
        
    //   }
    // });
  }
  center: google.maps.LatLngLiteral = { lat: 15.3071549, lng: 101.3606676 };
  zoom = 10;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {

    if (event.latLng != null) {
      const latLng = event.latLng;
      const position = latLng.toJSON();
      // this.markerPositions.push(event.latLng.toJSON());
      this.markerPositions[0] = event.latLng.toJSON();
      console.log(`Added marker at (${position.lat}, ${position.lng})`);
      this.lat = `${position.lat}`;
      this.lng = `${position.lng}`;
      console.log(this.lat);
      console.log(this.lng);
    }
  }
  func_grade() {
    this.valuenow = "10%";
    const myDiv = document.getElementById('progress_percent')!;
    myDiv.style.width = '10%';
  }
  func_grade1() {
    this.valuenow = "25%";
    const myDiv = document.getElementById('progress_percent')!;
    myDiv.style.width = '25%';
  }
  func_color_of_shoot() {
    console.log(this.color_of_shoot);
    
    if (this.is_color_of_shoot == false && this.color_of_shoot == "เขียว") {
      var value = 10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_color_of_shoot = true;
    } else if (this.is_color_of_shoot == true && this.color_of_shoot != "เขียว") {
      var value = -10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_color_of_shoot = false;
    } else if (this.is_color_of_shoot == false && this.color_of_shoot != "เขียว") {

    } else {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
      })
    }
  }
  func_type_of_coconut() {
    console.log(this.type_of_coconut);
    if (this.is_type_of_coconut == false && this.type_of_coconut == "กลุ่มลูกผสม") {
      var value = 10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_type_of_coconut = true;
    } else if (this.is_type_of_coconut == true && this.type_of_coconut != "กลุ่มลูกผสม") {
      var value = -10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_type_of_coconut = false;
    } else if (this.is_type_of_coconut == false && this.type_of_coconut != "กลุ่มลูกผสม") {

    } else {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
      })
    }
  }
  func_bole() {
    console.log(this.bole);
    if (this.is_bole == false && this.bole == "ปานกลาง") {
      var value = 5;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_bole = true;
    } else if (this.is_bole == true && this.bole != "ปานกลาง") {
      var value = -5;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_bole = false;
    } else if (this.is_bole == false && this.bole != "ปานกลาง") {

    } else {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
      })
    }
  }
  func_petiole_length() {
    console.log(this.petiole_length);
    if (this.is_petiole_length == false && this.petiole_length == "ปานกลาง") {
      var value = 10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_petiole_length = true;
    } else if (this.is_petiole_length == true && this.petiole_length != "ปานกลาง") {
      var value = -10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_petiole_length = false;
    } else if (this.is_petiole_length == false && this.petiole_length != "ปานกลาง") {

    } else {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
      })
    }
  }
  func_leaflet_length() {
    console.log(this.leaflet_length);

    if (this.is_leaflet_length == false && this.leaflet_length == "ปานกลาง") {
      var value = 10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_leaflet_length = true;
    } else if (this.is_leaflet_length == true && this.leaflet_length != "ปานกลาง") {
      var value = -10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_leaflet_length = false;
    } else if (this.is_leaflet_length == false && this.leaflet_length != "ปานกลาง") {

    } else {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
      })
    }

  }
  func_number_of_spikelets() {
    console.log(this.number_of_spikelets);

    if (this.is_number_of_spikelets == false && this.number_of_spikelets == "ปานกลาง") {
      var value = 10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_number_of_spikelets = true;
    } else if (this.is_number_of_spikelets == true && this.number_of_spikelets != "ปานกลาง") {
      var value = -10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_number_of_spikelets = false;
    } else if (this.is_number_of_spikelets == false && this.number_of_spikelets != "ปานกลาง") {

    } else {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
      })
    }
  }
  func_peduncle_length() {
    console.log(this.peduncle_length);


    if (this.is_peduncle_length == false && this.peduncle_length == "ปานกลาง") {
      var value = 10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_peduncle_length = true;
    } else if (this.is_peduncle_length == true && this.peduncle_length != "ปานกลาง") {
      var value = -10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_peduncle_length = false;
    } else if (this.is_peduncle_length == false && this.peduncle_length != "ปานกลาง") {

    } else {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
      })
    }
  }
  func_young_fruit_weight() {
    console.log(this.young_fruit_weight);


    if (this.is_young_fruit_weight == false && this.young_fruit_weight == "ปานกลาง") {
      var value = 10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_young_fruit_weight = true;
    } else if (this.is_young_fruit_weight == true && this.young_fruit_weight != "ปานกลาง") {
      var value = -10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_young_fruit_weight = false;
    } else if (this.is_young_fruit_weight == false && this.young_fruit_weight != "ปานกลาง") {

    } else {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
      })
    }
  }
  func_shape() {
    // console.log(this.shape);
    // this.valuenow = "90%";
    // const myDiv = document.getElementById('progress_percent')!;
    // myDiv.style.width = '90%';

    if (this.is_shape == false && this.shape == "ลูกแพร์") {
      var value = 10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_shape = true;
    } else if (this.is_shape == true && this.shape != "ลูกแพร์") {
      var value = -10;
      this.valuenowInt = value + this.valuenowInt;
      this.valuenow = String(this.valuenowInt) + "%";
      const myDiv = document.getElementById('progress_percent')!;
      myDiv.style.width = this.valuenow;
      this.is_shape = false;
    } else if (this.is_shape == false && this.shape != "ลูกแพร์") {

    } else {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
      })
    }
  }
  submit_land_information() {
    console.log(this.color_of_shoot)
    console.log(this.type_of_coconut)
    console.log(this.bole)
    console.log(this.petiole_length)
    console.log(this.leaflet_length)
    console.log(this.number_of_spikelets)
    console.log(this.peduncle_length)
    console.log(this.young_fruit_weight)
    console.log(this.shape)
    console.log(this.valuenow)
    console.log(this.lat);
    console.log(this.lng);
    console.log(this.landuse_id);
    this.people_generate = localStorage.getItem('people_generate');
    this.PagesEditLanduseDetailService.UpdateLanduseInfo(this.color_of_shoot, this.type_of_coconut, this.bole, this.petiole_length, this.leaflet_length, this.number_of_spikelets, this.peduncle_length, this.young_fruit_weight, this.shape, this.valuenow, this.lat, this.lng, this.people_generate, "1",this.landuse_id).subscribe((res: any) => {
      if (res == "OK") {
        this.PagesEditLanduseDetailService.InsertHistoryLanduse(this.people_generate, "1", this.landuse_id).subscribe((res: any) => {
          if (res) {
            Swal.fire({
              title: '<h5 style="font-family: Kanit-Regular;">คุณต้องการบันทึกข้อมูลใช่หรือไม่?</h5>',
              showCancelButton: true,
              cancelButtonText: '<h5 style="font-family: Kanit-Regular;">ยกเลิก</h5>',
              cancelButtonColor: "#DD6B55",
              confirmButtonText: '<h5 style="font-family: Kanit-Regular;">บันทึก</h5>',
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire({
                  icon: 'success',
                  showConfirmButton: false,
                  title: '<h5 style="font-family: Kanit-Regular;">บันทึกข้อมูลเรียนร้อย</h5>'
                })
                this.router.navigate(['pages-waiting-approve-landuse']);
              }
            })

          }
        });
      }
    });
  }
}
