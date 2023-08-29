import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { PagesEditPeopleService } from './shared/pages-edit-people.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { peopleModel } from 'src/app/model/peopleModel';
import Swal from 'sweetalert2';
const { v4: uuidv4 } = require('uuid');
declare const window: any;
@Component({
  selector: 'app-pages-edit-people',
  templateUrl: './pages-edit-people.component.html',
  styleUrls: ['./pages-edit-people.component.css']
})
export class PagesEditPeopleComponent {
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
  constructor(private PagesEditPeopleService: PagesEditPeopleService, private router: Router, private route: ActivatedRoute) { }

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
        console.log(res);
        console.log(this.people_generate)
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
    console.log(this.people_image_profile);
    console.log(this.people_name);
    console.log(this.people_localtion_number);
    console.log(this.people_moo);
    console.log(this.people_road);
    console.log(this.people_alley);
    console.log(this.people_tumbon);
    console.log(this.people_district);
    console.log(this.people_province);
    console.log(this.people_postcode);
    console.log(this.people_phone);
    console.log(this.people_cardnumber);
    console.log(this.is_gi_certificate);
    console.log(this.gi_certificates);
    console.log(this.is_dna_certificate);
    console.log(this.dna_certificates);
    console.log(this.is_status = "1");
    if (this.gi_certificates == undefined) {
      this.gi_certificates = '-';
    }
    if (this.dna_certificates == undefined) {
      this.dna_certificates = '-';
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
      this.people_image_profile = '';
    }
    // console.log(this.people_password);
    // console.log(this.confirm_people_password);
    // if (this.confirm_people_password != this.people_password) {
    //   Swal.fire({
    //     icon: 'warning',
    //     title: '<h6 style="font-family: THSarabunNew;font-size:24px">พาสเวิร์ดไม่ตรงกัน</h6>',
    //     confirmButtonText :'<h6 style="font-family: THSarabunNew;font-size:24px">ตกลง</h6>',
    //     confirmButtonColor:"#0d6efd"
    //   })
    // } else {

    this.PagesEditPeopleService.UpdatePeopleinfo(this.people_image_profile, this.people_name, this.people_localtion_number, this.people_moo, this.people_road, this.people_alley, this.people_tumbon, this.people_district, this.people_province, this.people_postcode, this.people_phone, this.people_cardnumber, this.is_gi, this.gi_certificates, this.is_dna, this.dna_certificates, this.is_status, this.people_generate).subscribe((res: any) => {
      if (res == "OK") {
        this.PagesEditPeopleService.InsertHistory(this.people_generate, this.is_status).subscribe((res: any) => {
          if (res == "OK") {
            Swal.fire({
              title: '<h5 style="font-family: Kanit-Regular;">แก้ไขข้อมูลเรียนร้อย</h5>',
              icon: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['waiting-approve']);
              }
            })

          }
        });
      }
    });
    // }

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
        title: '<h6 style="font-family: Kanit-Regular;">พาสเวิร์ดไม่ตรงกัน</h6>'
      })
    }
  }
}
