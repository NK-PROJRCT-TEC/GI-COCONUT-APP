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
  arr_landuse: any;
  parsejson: any;
  //image
  imageChangedEvent: any = '';
  croppedImage: any = '';
  preview_image: any = '';
  convertFile1!: File;
  is_confirm_image: boolean = false;
  is_confirm_image1: boolean = false;
  is_confirm_image2: boolean = false;
  //province
  province: any[] = [];
  amphures: any[] = [];
  districts: any[] = [];
  selected_province: any;
  selected_amphures: any;
  selected_districts: any;
  zip_code: any;
  is_province: any;
  is_amphures: any;
  is_districts: any;
  is_zip_code: any;
  //image_production
  // production_image: any;
  //value_for_edit
  coconut_base_characteristics: any;
  base_to_ground_distance_20cm: any;
  base_to_ground_distance_150cm: any;
  track_measurement_1_to_17: any;
  leaf_stalk_length: any;
  leaf_stalk_width: any;
  length_of_leaf_segment_with_leaflet: any;
  count_of_left_subleaflets: any;
  length_of_subleaflet: any;
  production_jan_to_apr: any;
  production_may_to_aug: any;
  production_sep_to_dec: any;
  production_image: any;
  husked_fruit_peel_width: any;
  husked_fruit_peel_length: any;
  husked_no_fruit_peel_width: any;
  husked_no_fruit_peel_length: any;
  boundary_length: any;
  husk_skin_color: any;
  seed_structure: any;
  fresh_fruit_weight: any;
  plant_age: any;
  tree_canopy_shape: any;
  tree_quantity: any;
  planting_space: any;
  get_province: any;
  get_amphures: any;
  get_districts: any;
  get_zip_code: any;
  point: any;
  landuse_lat: any;
  landuse_lng: any;
  // is_status:any;



  constructor(httpClient: HttpClient, private PagesEditLanduseDetailService: PagesEditLanduseDetailService, private router: Router) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Gmz0etSdLrgauyFXLLRy9P0aLrEKlfs', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
    this.parsejson = localStorage.getItem('jsonlanuse');
    this.arr_landuse = JSON.parse(this.parsejson);
    this.landuse_id = this.arr_landuse.landuse_id.toString();
    this.PagesEditLanduseDetailService.SelectProvinces().subscribe((res: any) => {
      if (res) {
        this.province = res;
      }
    });
    this.PagesEditLanduseDetailService.SelectAmphures().subscribe((res: any) => {
      if (res) {
        this.amphures = res;
        this.selected_amphures = res;
      }
    });
    this.PagesEditLanduseDetailService.SelectDistricts().subscribe((res: any) => {
      if (res) {
        this.districts = res;
        this.selected_districts = res;
      }
    });
    // this.landuse_id = localStorage.getItem("landuse_id");
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
        title: '<h5 style="font-family: THSarabunNew;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
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
        title: '<h5 style="font-family: THSarabunNew;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
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
        title: '<h5 style="font-family: THSarabunNew;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
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
        title: '<h5 style="font-family: THSarabunNew;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
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
        title: '<h5 style="font-family: THSarabunNew;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
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
        title: '<h5 style="font-family: THSarabunNew;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
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
        title: '<h5 style="font-family: THSarabunNew;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
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
        title: '<h5 style="font-family: THSarabunNew;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
      })
    }
  }
  func_shape() {

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
        title: '<h5 style="font-family: THSarabunNew;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
      })
    }
  }
  submit_land_information() {
    // console.log(this.coconut_base_characteristics);
    // console.log(this.base_to_ground_distance_20cm);
    // console.log(this.base_to_ground_distance_150cm);
    // console.log(this.track_measurement_1_to_17);
    // console.log(this.leaf_stalk_length);
    // console.log(this.leaf_stalk_width);
    // console.log(this.length_of_leaf_segment_with_leaflet);
    // console.log(this.count_of_left_subleaflets);
    // console.log(this.length_of_subleaflet);
    // console.log(this.production_jan_to_apr);
    // console.log(this.production_may_to_aug);
    // console.log(this.production_sep_to_dec);
    // console.log(this.production_image);
    // console.log(this.husked_fruit_peel_width);
    // console.log(this.husked_fruit_peel_length);
    // console.log(this.husked_no_fruit_peel_width);
    // console.log(this.husked_no_fruit_peel_length);
    // console.log(this.boundary_length);
    // console.log(this.husk_skin_color);
    // console.log(this.seed_structure);
    // console.log(this.fresh_fruit_weight);
    // console.log(this.plant_age);
    // console.log(this.tree_canopy_shape);
    // console.log(this.tree_quantity);
    // console.log(this.planting_space);
    // console.log(this.is_province);
    // console.log(this.is_amphures);
    // console.log(this.is_districts);
    // console.log(this.zip_code);
    this.landuse_lat = this.lat;
    this.landuse_lng = this.lng;
    // console.log(this.landuse_lat);
    // console.log(this.landuse_lng);
    this.people_generate = localStorage.getItem('people_generate');
    Swal.fire({
      title: '<h5 style="font-family: THSarabunNew;">คุณต้องการบันทึกข้อมูลใช่หรือไม่?</h5>',
      showCancelButton: true,
      cancelButtonText: '<h5 style="font-family: THSarabunNew;">ยกเลิก</h5>',
      cancelButtonColor: "#DD6B55",
      confirmButtonText: '<h5 style="font-family: THSarabunNew;">บันทึก</h5>',
    }).then((result) => {
      if (result.isConfirmed) {
        this.PagesEditLanduseDetailService.UpdateLanduse(this.coconut_base_characteristics.toString(), this.base_to_ground_distance_20cm.toString(), this.base_to_ground_distance_150cm.toString(), this.track_measurement_1_to_17.toString(), this.leaf_stalk_length.toString(), this.leaf_stalk_width.toString(), this.length_of_leaf_segment_with_leaflet.toString(), this.count_of_left_subleaflets.toString(), this.length_of_subleaflet.toString(), this.production_jan_to_apr.toString(), this.production_may_to_aug.toString(), this.production_sep_to_dec.toString(), this.production_image.toString(), this.husked_fruit_peel_width.toString(), this.husked_fruit_peel_length.toString(), this.husked_no_fruit_peel_width.toString(), this.husked_no_fruit_peel_length.toString(), this.boundary_length.toString(), this.husk_skin_color.toString(), this.seed_structure.toString(), this.fresh_fruit_weight.toString(), this.plant_age.toString(), this.tree_canopy_shape.toString(), this.tree_quantity.toString(), this.planting_space.toString(), this.is_province.toString(), this.is_amphures.toString(), this.is_districts.toString(), this.zip_code.toString(), this.landuse_lat.toString(),this.landuse_lng.toString(),"1", this.landuse_id).subscribe((res: any) => {
          if (res == "OK") {
            this.PagesEditLanduseDetailService.InsertHistoryLanduse(this.people_generate, "1", this.landuse_id).subscribe((res: any) => {
              if (res) {
                Swal.fire({
                  icon: 'success',
                  showConfirmButton: false,
                  title: '<h5 style="font-family: THSarabunNew;">บันทึกข้อมูลเรียนร้อย</h5>'
                })
                this.router.navigate(['pages-waiting-approve-landuse']);
              }
            });
          }
        });
        
      }
    })
    
  }
  //Update Edit
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.is_confirm_image = true;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  upload_image_home() {
    this.preview_image = this.croppedImage;
    this.croppedImage = '';
    this.imageChangedEvent = '';
    this.is_confirm_image = false;
    this.production_image = this.preview_image;
    // this.people_image_profile = this.preview_image;
    // console.log(this.preview_image);
    // console.log(this.people_image_profile);

    // const jpegFile = this.preview_image; // replace with actual base64 string
    // const jpegFile64 = jpegFile.replace(/^data:image\/(png|jpeg);base64,/, "");
    // const jpegBlob = this.base64ToBlob(jpegFile64, 'image/jpeg');
    // this.people_image_profile = jpegBlob;
    // console.log(jpegBlob);
  }
  func_province(e: any) {
    var code = e.target.value;
    this.selected_amphures = this.amphures.filter(option => option.province_id == Number(code));
    // console.log(this.selected_amphures);
    // console.log(code);
    // this.selected_province = code;
  }
  func_amphures(e: any) {
    var code = e.target.value;
    this.selected_districts = this.districts.filter(option => option.amphure_id == Number(code));
    // console.log(this.selected_districts);
    // console.log(code);
    // this.selected_amphures = code;
  }
  func_districts(e: any) {
    var code = e.target.value;
    this.is_zip_code = this.districts.filter(option => option.id == Number(code));
    this.zip_code = this.is_zip_code[0].zip_code;
    console.log(this.is_province);
    console.log(this.is_amphures);
    console.log(this.is_districts);
    console.log(this.zip_code);
  }
}
