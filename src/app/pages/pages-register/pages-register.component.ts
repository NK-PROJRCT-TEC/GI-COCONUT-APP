import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { PagesRegisterService } from './shared/pages-register.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
const { v4: uuidv4 } = require('uuid');
declare const window: any;

@Component({
  selector: 'app-pages-register',
  templateUrl: './pages-register.component.html',
  styleUrls: ['./pages-register.component.css']
})
export class PagesRegisterComponent implements OnInit {
  is_gi_certificate: boolean = false;
  is_gi: any;
  is_dna_certificate: boolean = false;
  is_dna: any;
  imageChangedEvent: any = '';
  imageChangedEvent1: any = '';
  croppedImage: any = '';
  croppedImage1: any = '';
  preview_image: any = '';
  preview_image1: any = '';
  convertFile1!: File;
  is_confirm_image: boolean = false;
  is_confirm_image1: boolean = false;
  is_status: any;
  //people
  people_name: any = "นพพร";
  people_localtion_number: any = "250/1";
  people_moo: any = "1";
  people_road: any = "-";
  people_alley: any = "-";
  people_tumbon: any = "ตาสัง";
  people_district: any = "บรรพตพิสัย";
  people_province: any = "นครสวรรค์";
  people_postcode: any = "60180";
  people_phone: any = "0852721407";
  people_email: any = "admin@gmail.com";
  people_cardnumber: any = "1600500166873";
  people_password: any = "123456";
  confirm_people_password: any = "123456";
  people_term: any;
  is_term: any;
  people_image_profile: any;
  gi_certificates: any;
  dna_certificates: any;
  people_image_dna: any;
  people_generate: any;
  constructor(private PagesRegisterService: PagesRegisterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
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
  // images-1
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
  submit_people() {
    this.is_status = "1";
    this.people_generate = uuidv4();

    if (this.confirm_people_password != this.people_password) {
      Swal.fire({
        icon: 'warning',
        title: '<h6 style="font-family: Kanit-Regular;">พาสเวิร์ดไม่ตรงกัน</h6>'
      })
    } else if (this.people_term == false || this.people_term == undefined) {
      Swal.fire({
        icon: 'warning',
        title: '<h6 style="font-family: Kanit-Regular;">กรุณายอมรับเงื่อนไข</h6>'
      })
    }
    else {
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
      if (this.people_term == true) {
        this.is_term = 1;
      } else {
        this.is_term = 0;
      }
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
      console.log(this.people_email);
      console.log(this.people_cardnumber);
      console.log(this.is_gi);
      console.log(this.gi_certificates);
      console.log(this.is_dna);
      console.log(this.dna_certificates);
      console.log(this.people_password);
      console.log(this.is_term);
      console.log(this.is_status);
      console.log(this.people_generate);
      this.PagesRegisterService.InsertRegisterinfo(this.people_name, this.people_localtion_number, this.people_moo, this.people_road, this.people_alley, this.people_tumbon, this.people_district, this.people_province, this.people_postcode, this.people_phone, this.people_email, this.people_cardnumber, this.is_gi, this.gi_certificates, this.is_dna, this.dna_certificates, this.people_password, this.is_term, this.is_status, this.people_generate).subscribe((res: any) => {
        if (res) {
          this.PagesRegisterService.InsertHistory(this.people_generate, this.is_status).subscribe((res: any) => {
            if (res) {
              Swal.fire({
                title: '<h5 style="font-family: Kanit-Regular;">บันทึกข้อมูลเรียนร้อย</h5>',
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.router.navigate(['pages-login']);
                  // window.location.reload();
                }
              })

            }
          });
        }
      });
    }
  }
  func_confirm_people_password() {
    if (this.confirm_people_password != this.people_password) {
      Swal.fire({
        icon: 'warning',
        title: '<h6 style="font-family: Kanit-Regular;">พาสเวิร์ดไม่ตรงกัน</h6>'
      })
    }
  }
  // base64ToBlob(base64: string, mime: any) {
  //   mime = mime || '';
  //   var sliceSize = 1024;
  //   var byteChars = window.atob(base64);
  //   var byteArrays = [];

  //   for (var offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
  //     var slice = byteChars.slice(offset, offset + sliceSize);

  //     var byteNumbers = new Array(slice.length);
  //     for (var i = 0; i < slice.length; i++) {
  //       byteNumbers[i] = slice.charCodeAt(i);
  //     }

  //     var byteArray = new Uint8Array(byteNumbers);

  //     byteArrays.push(byteArray);
  //   }

  //   return new Blob(byteArrays, { type: mime });
  // }
}
