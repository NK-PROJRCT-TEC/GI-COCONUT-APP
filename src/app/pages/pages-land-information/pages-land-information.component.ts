import { Component, OnInit } from '@angular/core';
import { studentModel } from 'src/app/model/studentModel';
import { parentModel } from 'src/app/model/parentModel';
import { relationshipModel } from 'src/app/model/relationshipModel';
import { behaviorModel } from 'src/app/model/behaviorModel';
import { PhotoandLocationModel } from 'src/app/model/PhotoandLocationModel';
import { subjectModel } from 'src/app/model/subjectModel';
import { PagesLandInformationService } from './shared/pages-land-information.service';
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
  selector: 'app-pages-land-information',
  templateUrl: './pages-land-information.component.html',
  styleUrls: ['./pages-land-information.component.css']
})
export class PagesLandInformationComponent implements OnInit {
  username: any;
  password: any;
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
  seed_structure: any;
  husk_skin_color: any;
  fresh_fruit_weight: any;
  plant_age: any;
  tree_canopy_shape: any;
  tree_quantity: any;
  planting_space: any;
  // feature_trunk_circumference2: any;
  // feature_leaf_path_length: any;
  // feature_leaf_stalk_length: any;
  // feature_leaf_minor_length: any;
  // feature_leaflet_count: any;
  // feature_stem_axis_length: any;
  // feature_female_flower_count: any;
  // feature_inflorescence_count: any;
  // feature_vertical_pericarp_shape: any;
  // feature_pericarp_circumference1: any;
  // feature_pericarp_circumference2: any;
  // feature_pericarp_color: any;
  // feature_seed_shape: any;
  // feature_water_sweetness: any;
  // feature_flesh_thickness: any;

  //is information
  is_coconut_base_characteristics: boolean = false;
  // is_feature_trunk_circumference = false;
  // is_feature_leaf_path_length = false;
  // is_feature_leaf_stalk_length = false;
  // is_feature_leaf_minor_length = false;
  // is_feature_leaflet_count = false;
  // is_feature_stem_axis_length = false;
  // is_feature_female_flower_count = false;
  // is_feature_inflorescence_count = false;
  // is_feature_vertical_pericarp_shape = false;
  // is_feature_pericarp_circumference = false;
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
  //image
  imageChangedEvent: any = '';
  croppedImage: any = '';
  preview_image: any = '';
  convertFile1!: File;
  is_confirm_image: boolean = false;
  is_confirm_image1: boolean = false;
  is_confirm_image2: boolean = false;
  constructor(httpClient: HttpClient, private PagesLandInformationService: PagesLandInformationService, private router: Router) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Gmz0etSdLrgauyFXLLRy9P0aLrEKlfs', 'callback')
      .pipe(
        map(() => true),
      );
  }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.password = localStorage.getItem("password");
    this.people_generate = localStorage.getItem("people_generate");
    console.log(this.username);
    if (this.username == null) {
      this.router.navigate(['pages-login']);
    }
    this.PagesLandInformationService.SelectProvinces().subscribe((res: any) => {
      if (res) {
        this.province = res;
      }
    });
    this.PagesLandInformationService.SelectAmphures().subscribe((res: any) => {
      if (res) {
        this.amphures = res;
        this.selected_amphures = res;
      }
    });
    this.PagesLandInformationService.SelectDistricts().subscribe((res: any) => {
      if (res) {
        this.districts = res;
        this.selected_districts = res;
      }
    });
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
  // func_coconut_base_characteristics() {
  //   console.log(this.coconut_base_characteristics);

  //   if (this.coconut_base_characteristics == false && this.coconut_base_characteristics == "มีโคนใหญ่") {
  //     var value = 10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.coconut_base_characteristics = true;
  //   } else if (this.coconut_base_characteristics == true && this.coconut_base_characteristics != "มีโคนใหญ่") {
  //     var value = -10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.coconut_base_characteristics = false;
  //   } else if (this.coconut_base_characteristics == false && this.coconut_base_characteristics != "มีโคนใหญ่") {

  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
  //     })
  //   }
  // }
  // func_feature_trunk_circumference() {
  //   console.log(this.base_to_ground_distance_20cm);
  //   if (this.is_feature_trunk_circumference == false && this.base_to_ground_distance_20cm == "กลุ่มลูกผสม") {
  //     var value = 10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_trunk_circumference = true;
  //   } else if (this.is_feature_trunk_circumference == true && this.base_to_ground_distance_20cm != "กลุ่มลูกผสม") {
  //     var value = -10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_trunk_circumference = false;
  //   } else if (this.is_feature_trunk_circumference == false && this.base_to_ground_distance_20cm != "กลุ่มลูกผสม") {

  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
  //     })
  //   }
  // }
  // func_feature_leaf_path_length() {
  //   console.log(this.feature_leaf_path_length);
  //   if (this.is_feature_leaf_path_length == false && this.feature_leaf_path_length == "ปานกลาง") {
  //     var value = 5;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_leaf_path_length = true;
  //   } else if (this.is_feature_leaf_path_length == true && this.feature_leaf_path_length != "ปานกลาง") {
  //     var value = -5;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_leaf_path_length = false;
  //   } else if (this.is_feature_leaf_path_length == false && this.feature_leaf_path_length != "ปานกลาง") {

  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
  //     })
  //   }
  // }
  // func_feature_leaf_stalk_length() {
  //   console.log(this.feature_leaf_stalk_length);
  //   if (this.is_feature_leaf_stalk_length == false && this.feature_leaf_stalk_length == "ปานกลาง") {
  //     var value = 10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_leaf_stalk_length = true;
  //   } else if (this.is_feature_leaf_stalk_length == true && this.feature_leaf_stalk_length != "ปานกลาง") {
  //     var value = -10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_leaf_stalk_length = false;
  //   } else if (this.is_feature_leaf_stalk_length == false && this.feature_leaf_stalk_length != "ปานกลาง") {

  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
  //     })
  //   }
  // }
  // func_feature_leaf_minor_length() {
  //   console.log(this.feature_leaf_minor_length);

  //   if (this.is_feature_leaf_minor_length == false && this.feature_leaf_minor_length == "ปานกลาง") {
  //     var value = 10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_leaf_minor_length = true;
  //   } else if (this.is_feature_leaf_minor_length == true && this.feature_leaf_minor_length != "ปานกลาง") {
  //     var value = -10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_leaf_minor_length = false;
  //   } else if (this.is_feature_leaf_minor_length == false && this.feature_leaf_minor_length != "ปานกลาง") {

  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
  //     })
  //   }

  // }
  // func_feature_leaflet_count() {
  //   console.log(this.feature_leaflet_count);

  //   if (this.is_feature_leaflet_count == false && this.feature_leaflet_count == "ปานกลาง") {
  //     var value = 10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_leaflet_count = true;
  //   } else if (this.is_feature_leaflet_count == true && this.feature_leaflet_count != "ปานกลาง") {
  //     var value = -10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_leaflet_count = false;
  //   } else if (this.is_feature_leaflet_count == false && this.feature_leaflet_count != "ปานกลาง") {

  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
  //     })
  //   }
  // }
  // func_feature_stem_axis_length() {
  //   console.log(this.feature_stem_axis_length);


  //   if (this.is_feature_stem_axis_length == false && this.feature_stem_axis_length == "ปานกลาง") {
  //     var value = 10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_stem_axis_length = true;
  //   } else if (this.is_feature_stem_axis_length == true && this.feature_stem_axis_length != "ปานกลาง") {
  //     var value = -10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_stem_axis_length = false;
  //   } else if (this.is_feature_stem_axis_length == false && this.feature_stem_axis_length != "ปานกลาง") {

  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
  //     })
  //   }
  // }
  // func_feature_female_flower_count() {
  //   console.log(this.feature_female_flower_count);


  //   if (this.is_feature_female_flower_count == false && this.feature_female_flower_count == "ปานกลาง") {
  //     var value = 10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_female_flower_count = true;
  //   } else if (this.is_feature_female_flower_count == true && this.feature_female_flower_count != "ปานกลาง") {
  //     var value = -10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_female_flower_count = false;
  //   } else if (this.is_feature_female_flower_count == false && this.feature_female_flower_count != "ปานกลาง") {

  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
  //     })
  //   }
  // }
  // func_feature_inflorescence_count() {
  //   // console.log(this.feature_inflorescence_count);
  //   // this.valuenow = "90%";
  //   // const myDiv = document.getElementById('progress_percent')!;
  //   // myDiv.style.width = '90%';

  //   if (this.is_feature_inflorescence_count == false && this.feature_inflorescence_count == "ลูกแพร์") {
  //     var value = 10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_inflorescence_count = true;
  //   } else if (this.is_feature_inflorescence_count == true && this.feature_inflorescence_count != "ลูกแพร์") {
  //     var value = -10;
  //     this.valuenowInt = value + this.valuenowInt;
  //     this.valuenow = String(this.valuenowInt) + "%";
  //     const myDiv = document.getElementById('progress_percent')!;
  //     myDiv.style.width = this.valuenow;
  //     this.is_feature_inflorescence_count = false;
  //   } else if (this.is_feature_inflorescence_count == false && this.feature_inflorescence_count != "ลูกแพร์") {

  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: '<h5 style="font-family: Kanit-Regular;">ผิดพลาดกรุณาติดต่อผู้ดูแลระบบ</h5>'
  //     })
  //   }
  // }
  // func_feature_seed_shape() {

  // }
  // func_feature_vertical_pericarp_shape() {

  // }
  // func_feature_pericarp_circumference() {

  // }
  // func_feature_pericarp_color() {

  // }
  submit_land_information() {
    console.log(this.coconut_base_characteristics); //1
    console.log(this.base_to_ground_distance_20cm); //2-1
    console.log(this.base_to_ground_distance_150cm); //2-2
    console.log(this.track_measurement_1_to_17); //3
    console.log(this.leaf_stalk_length); //4.1
    console.log(this.leaf_stalk_width); //4.2
    console.log(this.length_of_leaf_segment_with_leaflet); //4.3
    console.log(this.count_of_left_subleaflets); //4.4
    console.log(this.length_of_subleaflet); //5
    console.log(this.production_jan_to_apr); //6.1
    console.log(this.production_may_to_aug); //6.2
    console.log(this.production_sep_to_dec); //6.3
    console.log(this.production_image);  //6.4
    console.log(this.husked_fruit_peel_width); //7.1
    console.log(this.husked_fruit_peel_length);//7.2
    console.log(this.husked_no_fruit_peel_width);//7.3
    console.log(this.husked_no_fruit_peel_length);//7.4
    console.log(this.boundary_length);//8
    console.log(this.husk_skin_color);//9
    console.log(this.seed_structure);//10
    console.log(this.fresh_fruit_weight);//11
    console.log(this.plant_age);//12
    console.log(this.tree_canopy_shape);//13
    console.log(this.tree_quantity);//14
    console.log(this.planting_space);//15
    console.log(this.is_province);
    console.log(this.is_amphures);
    console.log(this.is_districts);
    console.log(this.zip_code);
    console.log(this.valuenow)
    console.log(this.lat);
    console.log(this.lng);
    console.log(this.people_generate);
    this.PagesLandInformationService.InsertLanduseInfo(this.coconut_base_characteristics, this.base_to_ground_distance_20cm, this.base_to_ground_distance_150cm, this.track_measurement_1_to_17, this.leaf_stalk_length, this.leaf_stalk_width, this.length_of_leaf_segment_with_leaflet, this.count_of_left_subleaflets, this.length_of_subleaflet, this.production_jan_to_apr, this.production_may_to_aug, this.production_sep_to_dec, this.production_image, this.husked_fruit_peel_width, this.husked_fruit_peel_length, this.husked_no_fruit_peel_width, this.husked_no_fruit_peel_length, this.boundary_length, this.husk_skin_color, this.seed_structure, this.fresh_fruit_weight, this.plant_age, this.tree_canopy_shape, this.tree_quantity, this.planting_space, this.is_province, this.is_amphures, this.is_districts, this.zip_code, this.valuenow, this.lat, this.lng, this.people_generate, "1").subscribe((res: any) => {
      if (res) {
        console.log(res[0].landuse_id);
        this.PagesLandInformationService.InsertHistoryLanduse(this.people_generate, "1", res[0].landuse_id).subscribe((res: any) => {
          if (res) {
            Swal.fire({
              title: '<h5 style="font-family: Kanit-Regular;">คุณต้องการบันทึกข้อมูลใช่หรือไม่?</h5>',
              showCancelButton: true,
              cancelButtonText: '<h5 style="font-family: Kanit-Regular;">ยกเลิก</h5>',
              cancelButtonColor: "#DD6B55",
              confirmButtonText: '<h5 style="font-family: Kanit-Regular;">บันทึก</h5>',
            }).then((result) => {
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
}
