import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { PagesEditPeopleService } from './shared/pages-edit-people.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { peopleModel } from 'src/app/model/peopleModel';
import Swal from 'sweetalert2';
const { v4: uuidv4 } = require('uuid');
declare const window: any;
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-pages-edit-people',
  templateUrl: './pages-edit-people.component.html',
  styleUrls: ['./pages-edit-people.component.css']
})
export class PagesEditPeopleComponent {
  apiLoaded: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: { lat: 15.6918913, lng: 100.1145833 },
    zoom: 15
  };
  imageChangedEvent: any = '';
  croppedImage: any = '';
  preview_image: any = '';
  convertFile1!: File;
  is_confirm_image: boolean = false;
  is_status: any;
  //images
  imageChangedEvent1: any = '';
  imageChangedEvent2: any = '';
  croppedImage1: any = '';
  croppedImage2: any = '';
  preview_image1: any = '';
  preview_image2: any = '';
  is_confirm_image1: boolean = false;
  is_confirm_image2: boolean = false;
  //people
  // objpeopleModel: peopleModel = new peopleModel();
  objpeopleModel: any;
  people_name: any;
  people_localtion_number: any;
  people_moo: any;
  people_road: any;
  people_alley: any;
  people_tumbon: any;
  people_district: any;
  people_province: any;
  people_postcode: any;
  people_phone: any;
  people_email: any;
  people_cardnumber: any;
  people_password: any;
  confirm_people_password: any;
  people_term: any;
  people_image_profile: any;
  people_generate: any;


  is_gi_certificate: boolean = false;
  is_gi: any;
  is_dna_certificate: boolean = false;
  gi_certificates: any;
  dna_certificates: any;
  is_dna: any;
  //province
  province: any[] = [];
  amphures: any[] = [];
  districts: any[] = [];
  selected_province: any;
  selected_amphures: any;
  selected_districts: any;
  zip_code: any;
  // is_province: any;
  // is_amphures: any;
  // is_districts: any;
  // is_zip_code: any;
  //จังหวัด
  is_province: any[] = [];
  is_amphures: any[] = [];;
  is_districts: any;
  is_zip_code: any;
  constructor(httpClient: HttpClient, private PagesEditPeopleService: PagesEditPeopleService, private router: Router, private route: ActivatedRoute) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Gmz0etSdLrgauyFXLLRy9P0aLrEKlfs', 'callback')
      .pipe(
        map(() => true),
      );
  }
  ngOnInit(): void {
    this.people_generate = localStorage.getItem("for_edit_people_generate");
    this.PagesEditPeopleService.SelectPeopleforUpdate(this.people_generate).subscribe((res: any) => {
      if (res) {
        this.objpeopleModel = res;
        this.people_name = res[0].people_name;
        this.people_localtion_number = res[0].people_localtion_number;
        this.people_moo = res[0].people_moo;
        this.people_road = res[0].people_road;
        this.people_alley = res[0].people_alley;
        this.people_tumbon = res[0].people_tumbon;
        this.people_district = res[0].people_district;
        this.people_province = res[0].people_province;
        this.people_postcode = res[0].people_postcode;
        this.people_phone = res[0].people_phone;
        this.people_email = res[0].people_email;
        this.people_cardnumber = res[0].people_cardnumber;
        this.people_password = res[0].people_password;
        this.people_term = res[0].people_term;
        this.people_image_profile = res[0].people_image_profile;
        this.people_generate = res[0].people_generate;
        this.dna_certificates = res[0].dna_certificates;
        this.gi_certificates = res[0].gi_certificates;
      }
    });
    this.PagesEditPeopleService.SelectProvinces().subscribe((res: any) => {
      if (res) {
        this.province = res;
      }
    });
    this.PagesEditPeopleService.SelectAmphures().subscribe((res: any) => {
      if (res) {
        this.amphures = res;
        this.selected_amphures = res;
      }
    });
    this.PagesEditPeopleService.SelectDistricts().subscribe((res: any) => {
      if (res) {
        this.districts = res;
        this.selected_districts = res;
      }
    });
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
    // this.people_image_profile = this.preview_image;
    this.gi_certificates = this.preview_image;
    // console.log(this.preview_image);
    // console.log(this.people_image_profile);

    // const jpegFile = this.preview_image; // replace with actual base64 string
    // const jpegFile64 = jpegFile.replace(/^data:image\/(png|jpeg);base64,/, "");
    // const jpegBlob = this.base64ToBlob(jpegFile64, 'image/jpeg');
    // this.people_image_profile = jpegBlob;
    // console.log(jpegBlob);
  }
  submit_people() {
    this.people_province = this.is_province;
    this.people_district = this.is_amphures;
    this.people_tumbon = this.is_districts;
    this.is_status = "1"
    // console.log(this.people_image_profile);
    // console.log(this.people_name);
    // console.log(this.people_localtion_number);
    // console.log(this.people_moo);
    // console.log(this.people_road);
    // console.log(this.people_alley);
    // console.log(this.people_tumbon);
    // console.log(this.people_district);
    // console.log(this.people_province);
    // console.log(this.people_postcode);
    // console.log(this.people_phone);
    // console.log(this.people_cardnumber);
    // console.log(this.is_gi_certificate);
    // console.log(this.gi_certificates);
    // console.log(this.is_dna_certificate);
    // console.log(this.dna_certificates);
    if (this.gi_certificates == undefined) {
      this.gi_certificates = this.gi_certificates;
    }
    if (this.dna_certificates == undefined) {
      this.dna_certificates = this.dna_certificates;
    }
    if (this.is_gi_certificate == true) {
      this.is_gi = 1;
    } else {
      this.is_gi = 0;
    }
    if (this.is_dna_certificate == true) {
      this.is_dna = 1;
    } else {
      this.is_dna = 0;
    }
    if (this.people_image_profile == undefined) {
      this.people_image_profile = '-';

    }
    if (this.people_province == "" || this.people_province == undefined) {
      Swal.fire({
        icon: 'warning',
        title: '<h6 style="font-family: THSarabunNew;font-size:24px">กรุณาเลือกจังหวัดที่ตั้ง</h6>',
        confirmButtonText: '<h6 style="font-family: THSarabunNew;font-size:24px">ตกลง</h6>',
        confirmButtonColor: "#0d6efd"
      })
      return;
    }
    if (this.people_district == "" || this.people_district == undefined) {
      Swal.fire({
        icon: 'warning',
        title: '<h6 style="font-family: THSarabunNew;font-size:24px">กรุณาเลือกอำเภอที่ตั้ง</h6>',
        confirmButtonText: '<h6 style="font-family: THSarabunNew;font-size:24px">ตกลง</h6>',
        confirmButtonColor: "#0d6efd"
      })
      return;
    }
    if (this.people_tumbon == "" || this.people_tumbon == undefined) {
      Swal.fire({
        icon: 'warning',
        title: '<h6 style="font-family: THSarabunNew;font-size:24px">กรุณาเลือกตำบลที่ตั้ง</h6>',
        confirmButtonText: '<h6 style="font-family: THSarabunNew;font-size:24px">ตกลง</h6>',
        confirmButtonColor: "#0d6efd"
      })
      return;
    }
    if (this.is_gi_certificate == true && this.gi_certificates == '-') {
      Swal.fire({
        icon: 'warning',
        title: '<h6 style="font-family: THSarabunNew;font-size:24px">กรุณาอัพโหลดใบรับรอง GI</h6>',
        confirmButtonText: '<h6 style="font-family: THSarabunNew;font-size:24px">ตกลง</h6>',
        confirmButtonColor: "#0d6efd"
      })
      return;
    }
    if (this.is_dna_certificate == true && this.dna_certificates == '-') {
      Swal.fire({
        icon: 'warning',
        title: '<h6 style="font-family: THSarabunNew;font-size:24px">กรุณาอัพโหลดใบรับรองตรวจผล DNA</h6>',
        confirmButtonText: '<h6 style="font-family: THSarabunNew;font-size:24px">ตกลง</h6>',
        confirmButtonColor: "#0d6efd"
      })
      return;
    }

    Swal.fire({
      title: '<h5 style="font-family: THSarabunNew;font-size: 20px;">ยืนยันการแก้ไขข้อมูล?</h5>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonText: '<h5 style="font-family: THSarabunNew;font-size: 20px;">ยกเลิก</h5>',
      cancelButtonColor: '#d33',
      confirmButtonText: '<h5 style="font-family: THSarabunNew;font-size: 20px;">ยืนยัน</h5>',
    }).then((result) => {
      if (result.isConfirmed) {
        this.PagesEditPeopleService.UpdatePeopleinfo(this.people_image_profile, this.people_name, this.people_localtion_number, this.people_moo, this.people_road, this.people_alley, this.people_tumbon, this.people_district, this.people_province, this.people_postcode, this.people_phone, this.people_cardnumber, this.is_gi, this.gi_certificates, this.is_dna, this.dna_certificates, this.is_status, this.people_generate).subscribe((res: any) => {
          if (res == "OK") {
            this.PagesEditPeopleService.InsertHistory(this.people_generate, this.is_status).subscribe((res: any) => {
              if (res == "OK") {
                Swal.fire({
                  title: '<h5 style="font-family: THSarabunNew;">แก้ไขข้อมูลเรียนร้อย</h5>',
                  icon: 'success',
                  showCancelButton: false,
                  confirmButtonColor: '#0d6efd',
                  cancelButtonColor: '#d33',
                  confirmButtonText: '<h5 style="font-family: THSarabunNew;font-size: 20px;">ตกลง</h5>',
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.router.navigate(['waiting-approve']);
                  }
                })

              }
            });
          }
        });
        // Swal.fire({
        //   icon: 'success',
        //   title: '<h6 style="font-family: THSarabunNew;font-size: 24px;">ยืนยันการแก้ไขข้อมูลเรียบร้อย</h6>',
        //   confirmButtonColor: '#3085d6',
        //   confirmButtonText: '<h5 style="font-family: THSarabunNew;font-size: 20px;">ตกลง</h5>',
        // })
      }
    })


  }
  fileChangeEvent2(event: any): void {
    this.imageChangedEvent2 = event;
    this.is_confirm_image2 = true;
  }
  imageCropped2(event: ImageCroppedEvent) {
    this.croppedImage2 = event.base64;
  }
  imageLoaded2() {
    // show cropper
  }
  cropperReady2() {
    // cropper ready
  }
  loadImageFailed2() {
    // show message
  }
  upload_image_home2() {
    this.preview_image2 = this.croppedImage2;
    this.croppedImage2 = '';
    this.imageChangedEvent2 = '';
    this.is_confirm_image2 = false;
    this.people_image_profile = this.preview_image2;
  }
  fileChangeEvent1(event: any): void {
    this.imageChangedEvent1 = event;
    this.is_confirm_image1 = true;
  }
  imageCropped1(event: ImageCroppedEvent) {
    this.croppedImage1 = event.base64;
  }
  imageLoaded1() {
    // show cropper
  }
  cropperReady1() {
    // cropper ready
  }
  loadImageFailed1() {
    // show message
  }
  upload_image_home1() {
    this.preview_image1 = this.croppedImage1;
    this.croppedImage1 = '';
    this.imageChangedEvent1 = '';
    this.is_confirm_image1 = false;
    // this.people_image_profile = this.preview_image;
    this.dna_certificates = this.preview_image1;
    // console.log(this.preview_image);

    // const jpegFile = this.preview_image; // replace with actual base64 string
    // const jpegFile64 = jpegFile.replace(/^data:image\/(png|jpeg);base64,/, "");
    // const jpegBlob = this.base64ToBlob(jpegFile64, 'image/jpeg');
    // this.people_image_profile = jpegBlob;
    // console.log(jpegBlob);
  }
  func_confirm_people_password() {
    if (this.confirm_people_password != this.people_password) {
      Swal.fire({
        icon: 'warning',
        title: '<h6 style="font-family: THSarabunNew;">พาสเวิร์ดไม่ตรงกัน</h6>'
      })
    }
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
    this.people_postcode = this.is_zip_code[0].zip_code;
    // console.log(this.is_province);
    // console.log(this.is_amphures);
    // console.log(this.is_districts);
    // console.log(this.people_postcode);
  }
  // func_amphures(e: any) {
  //   var code = e.target.value;
  //   this.selected_districts = this.districts.filter(option => option.amphure_id == Number(code));
  // }
  // func_districts(e: any) {
  //   var code = e.target.value;
  //   this.is_zip_code = this.districts.filter(option => option.id == Number(code));
  //   this.zip_code = this.is_zip_code[0].zip_code;
  //   console.log(this.is_province);
  //   console.log(this.is_amphures);
  //   console.log(this.is_districts);
  //   console.log(this.zip_code);
  // }
}
