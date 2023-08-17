import { Component, OnInit } from '@angular/core';
import { studentModel } from 'src/app/model/studentModel';
import { parentModel } from 'src/app/model/parentModel';
import { relationshipModel } from 'src/app/model/relationshipModel';
import { behaviorModel } from 'src/app/model/behaviorModel';
import { PhotoandLocationModel } from 'src/app/model/PhotoandLocationModel';
import { subjectModel } from 'src/app/model/subjectModel';
import { InsertDetailStudentService } from './shared/insert-detail-student.service';
// Google map
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
const { v4: uuidv4 } = require('uuid');
// images
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
@Component({
  selector: 'app-insert-detail-student',
  templateUrl: './insert-detail-student.component.html',
  styleUrls: ['./insert-detail-student.component.css']
})
export class InsertDetailStudentComponent implements OnInit {
  obj_student: any;
  is_student: boolean = true;
  is_relationship: boolean = false;
  is_behavior_and_risk: boolean = false;
  is_student_house_photos: boolean = false;
  // generate
  generate: any;
  // student
  objstudentModel: studentModel = new studentModel();
  objparentModel: parentModel = new parentModel();
  objrelationshipModel: relationshipModel = new relationshipModel();
  objbehaviorModel: behaviorModel = new behaviorModel();
  objPhotoandLocationModel: PhotoandLocationModel = new PhotoandLocationModel();
  objsubjectModelModel: subjectModel = new subjectModel();

  student_prefix: any;
  student_firstname: any;
  student_surname: any;
  student_grade: any;
  student_id_card: any;
  student_nickname: any;
  student_residence: any;
  student_road: any;
  student_moo: any;
  student_tambon: any;
  student_district: any;
  student_province: any;
  student_room: any;
  student_province_post: any;
  // subject
  mathematics: any;
  thai_language: any;
  science: any;
  english_language: any;
  student_behavior: any;
  // parent
  have_parent: boolean = false;
  parent_with_student: any;
  parent_prefix: any;
  parent_name: any;
  parent_surname: any;
  parent_relationship: any;
  parent_work: any;

  //relation
  // take_time_together: any;
  // relationship_father: any;
  // relationship_mother: any;
  // relationship_brother: any;
  // relationship_sister: any;
  // relationship_grandfather: any;
  // relationship_relative: any;
  // relationship_other: any;
  // live_with_who: any;
  students_receive_expenses: any;
  // daily_income: any;
  want_schools_to_help_students: any;
  caring_for_students: any;
  // behavior
  health: any;
  welfare_or_safety: any;
  travel_time_hr: any;
  travel_time_min: any;
  student_travel_to_school: any;
  housing_conditions: any;
  student_responsibility: any;
  hobby: any;
  drug_use_behavior: any;
  violent_behavior: any;
  sexual_behavior: any;
  //photo and location
  //status
  is_status: any;
  //google map
  apiLoaded: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: { lat: 15.6918913, lng: 100.1145833 },
    zoom: 15
  };
  lat: any;
  lng: any;
  //images
  imageChangedEvent: any = '';
  croppedImage: any = '';
  preview_image: any = '';
  imageChangedEvent1: any = '';
  croppedImage1: any = '';
  preview_image1: any = '';
  imageChangedEvent2: any = '';
  croppedImage2: any = '';
  preview_image2: any = '';
  convertFile1!: File ;
  convertFile2!: File ;
  convertFile3!: File ;
  is_confirm_image: boolean = false;
  is_confirm_image1: boolean = false;
  is_confirm_image2: boolean = false;
  constructor(httpClient: HttpClient, private InsertDetailStudentService: InsertDetailStudentService) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyB6Gmz0etSdLrgauyFXLLRy9P0aLrEKlfs', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
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
  student() {
    this.is_student = true;
    this.is_relationship = false;
    this.is_behavior_and_risk = false;
    this.is_student_house_photos = false;
  }
  relationship() {
    this.is_student = false;
    this.is_relationship = true;
    this.is_behavior_and_risk = false;
    this.is_student_house_photos = false;
  }
  behavior_and_risk() {
    this.is_student = false;
    this.is_relationship = false;
    this.is_behavior_and_risk = true;
    this.is_student_house_photos = false;
  }
  student_house_photos() {
    this.is_student = false;
    this.is_relationship = false;
    this.is_behavior_and_risk = false;
    this.is_student_house_photos = true;
  }
  submit_student() {
    //student
    this.objstudentModel.student_prefix = this.student_prefix;
    this.objstudentModel.student_firstname = this.student_firstname;
    this.objstudentModel.student_surname = this.student_surname;
    this.objstudentModel.student_grade = this.student_grade;
    this.objstudentModel.student_id_card = this.student_id_card;
    this.objstudentModel.student_nickname = this.student_nickname;
    this.objstudentModel.student_residence = this.student_residence;
    this.objstudentModel.student_road = this.student_road;
    this.objstudentModel.student_moo = this.student_moo;
    this.objstudentModel.student_tambon = this.student_tambon;
    this.objstudentModel.student_district = this.student_district;
    this.objstudentModel.student_province = this.student_province;
    this.objstudentModel.student_room = this.student_room;
    this.objstudentModel.student_province_post = this.student_province_post;
    //parent
    this.objparentModel.have_parent = !this.have_parent;
    this.objparentModel.parent_with_student = this.parent_with_student;
    this.objparentModel.parent_prefix = this.parent_prefix;
    this.objparentModel.parent_name = this.parent_name;
    this.objparentModel.parent_surname = this.parent_surname;
    this.objparentModel.parent_relationship = this.parent_relationship;
    this.objparentModel.parent_work = this.parent_work;

    if (this.objstudentModel.student_prefix == undefined) {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก คำนำหน้านักเรียน</h5>'
      })
    } else if (this.objstudentModel.student_firstname == undefined) {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ชื่อนักเรียน</h5>'
      })
    } else if (this.objstudentModel.student_surname == undefined) {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก นามสกุลนักเรียน</h5>'
      })
    } else if (this.objstudentModel.student_grade == undefined) {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ระดับชั้นนักเรียน</h5>'
      })
    } else if (this.objstudentModel.student_id_card == undefined) {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก รหัสประชาชนนักเรียน</h5>'
      })
    } else if (this.objstudentModel.student_nickname == undefined) {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ชื่อเล่นนักเรียน</h5>'
      })
    } else if (this.objparentModel.have_parent == false) {
      this.objparentModel.parent_with_student = "-";
      this.objparentModel.parent_prefix = "-";
      this.objparentModel.parent_name = "-";
      this.objparentModel.parent_surname = "-";
      this.objparentModel.parent_relationship = "-";
      this.objparentModel.parent_work = "-";

      this.is_student = false;
      this.is_relationship = true;
      this.is_behavior_and_risk = false;
      this.is_student_house_photos = false;
      this.objstudentModel.generate = uuidv4();
      this.objparentModel.generate = this.objstudentModel.generate;
      this.is_status = 1;
      this.is_student = false;
      this.is_relationship = true;
      this.is_behavior_and_risk = false;
      this.is_student_house_photos = false;
    } else if (this.objparentModel.have_parent == true) {
      if (this.objparentModel.parent_with_student == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก นักเรียนอาศัยอยู่กับ</h5>'
        })
      }
      else if (this.objparentModel.parent_prefix == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก คำนำหน้าผู้ปกครอง</h5>'
        })
      } else if (this.objparentModel.parent_name == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ชื่อผู้ปกครอง</h5>'
        })
      } else if (this.objparentModel.parent_surname == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก นามสกุลผู้ปกครอง</h5>'
        })
      } else if (this.objparentModel.parent_relationship == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ความสัมพันธ์ของปกครองกับนักเรียน</h5>'
        })
      } else if (this.objparentModel.parent_work == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก อาชีพผู้ปกครอง</h5>'
        })
      }
      else {
        this.objstudentModel.generate = uuidv4();
        this.objparentModel.generate = this.objstudentModel.generate;
        this.is_status = 1;
        this.is_student = false;
        this.is_relationship = true;
        this.is_behavior_and_risk = false;
        this.is_student_house_photos = false;
      }
    }
    console.log(this.objstudentModel)
    console.log(this.objparentModel)

  }
  submit_relationship() {
    // this.objrelationshipModel.take_time_together = this.take_time_together;
    // this.objrelationshipModel.relationship_father = this.relationship_father;
    // this.objrelationshipModel.relationship_mother = this.relationship_mother;
    // this.objrelationshipModel.relationship_brother = this.relationship_brother;
    // this.objrelationshipModel.relationship_sister = this.relationship_sister;
    // this.objrelationshipModel.relationship_grandfather = this.relationship_grandfather;
    // this.objrelationshipModel.relationship_relative = this.relationship_relative;
    // this.objrelationshipModel.relationship_other = this.relationship_other;
    // this.objrelationshipModel.live_with_who = this.live_with_who;
    this.objrelationshipModel.students_receive_expenses = this.students_receive_expenses;
    // this.objrelationshipModel.daily_income = this.daily_income;
    this.objrelationshipModel.want_schools_to_help_students = this.want_schools_to_help_students;
    this.objrelationshipModel.caring_for_students = this.caring_for_students;
    this.objrelationshipModel.generate = this.objstudentModel.generate;
    console.log(this.is_status);
    console.log(this.objstudentModel);
    console.log(this.objparentModel);
    console.log(this.objrelationshipModel);
    if (this.is_status == 1) {
      // if (this.objrelationshipModel.take_time_together == undefined) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องมีเวลาอยู่ร่วมกันกี่ชั่วโมง</h5>'
      //   })
      // } else if (this.objrelationshipModel.relationship_father == undefined) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องความสัมพันธ์ของนักเรียนกับสมาชิกในครอบครัว (บิดา)</h5>'
      //   })
      // } else if (this.objrelationshipModel.relationship_mother == undefined) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องความสัมพันธ์ของนักเรียนกับสมาชิกในครอบครัว (มารดา)</h5>'
      //   })
      // } else if (this.objrelationshipModel.relationship_brother == undefined) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องความสัมพันธ์ของนักเรียนกับสมาชิกในครอบครัว (พี่ชาย/น้องชาย)</h5>'
      //   })
      // } else if (this.objrelationshipModel.relationship_sister == undefined) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องความสัมพันธ์ของนักเรียนกับสมาชิกในครอบครัว (พี่สาว/น้องสาว)</h5>'
      //   })
      // } else if (this.objrelationshipModel.relationship_grandfather == undefined) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องความสัมพันธ์ของนักเรียนกับสมาชิกในครอบครัว (ปู/ย่า/ตา/ยาย)</h5>'
      //   })
      // } else if (this.objrelationshipModel.relationship_relative == undefined) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องความสัมพันธ์ของนักเรียนกับสมาชิกในครอบครัว (ญาติ)</h5>'
      //   })
      // } else if (this.objrelationshipModel.relationship_other == undefined) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องความสัมพันธ์ของนักเรียนกับสมาชิกในครอบครัว (อื่นๆ)</h5>'
      //   })
      // } else if (this.objrelationshipModel.live_with_who == undefined) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องกรณีผู้ปกครองไม่อยู่บ้านฝากเด็กนักเรียนอยู่บ้านกับใคร</h5>'
      //   })
      // }
      if (this.objrelationshipModel.students_receive_expenses == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องนักเรียนได้รับค่าใช้จ่ายจาก</h5>'
        })
      }
      // else if (this.objrelationshipModel.daily_income == undefined) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องรายได้วันละ</h5>'
      //   }) 
      // }
      else if (this.objrelationshipModel.want_schools_to_help_students == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องสิ่งที่ผู้ปกครองต้องการให้โรงเรียนช่วยเหลือนักเรียน</h5>'
        })
      } else if (this.objrelationshipModel.caring_for_students == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องข้อห่วงใยของผู้ปกครองที่มีต่อนักเรียน</h5>'
        })
      } else if (this.objrelationshipModel.generate == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ส่วนข้อมูลนักเรียนก่อน</h5>'
        })
      } else {
        this.objrelationshipModel.generate = this.objstudentModel.generate;
        this.is_status = 2;
        this.is_student = false;
        this.is_relationship = false;
        this.is_behavior_and_risk = true;
        this.is_student_house_photos = false;
      }
    }
    else {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ข้อมูลส่วนนักเรียนให้ครบถ้วน</h5>'
      })
    }
  }
  submit_behavior() {
    //behavior
    this.objbehaviorModel.health = this.health;
    this.objbehaviorModel.welfare_or_safety = this.welfare_or_safety;
    this.objbehaviorModel.travel_time_hr = this.travel_time_hr;
    this.objbehaviorModel.travel_time_min = this.travel_time_min;
    this.objbehaviorModel.student_travel_to_school = this.student_travel_to_school;
    this.objbehaviorModel.housing_conditions = this.housing_conditions;
    this.objbehaviorModel.student_responsibility = this.student_responsibility;
    this.objbehaviorModel.hobby = this.hobby;
    this.objbehaviorModel.drug_use_behavior = this.drug_use_behavior;
    this.objbehaviorModel.violent_behavior = this.violent_behavior;
    this.objbehaviorModel.sexual_behavior = this.sexual_behavior;
    //subject
    this.objsubjectModelModel.mathematics = this.mathematics;
    this.objsubjectModelModel.thai_language = this.thai_language;
    this.objsubjectModelModel.science = this.science;
    this.objsubjectModelModel.english_language = this.english_language;
    this.objsubjectModelModel.student_behavior = this.student_behavior;


    ;
    if (this.is_status == 2) {
      if (this.objbehaviorModel.health == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องสุขภาพ</h5>'
        })
      }
      else if (this.objbehaviorModel.welfare_or_safety == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องสวัดดิการหรือความปลอดภัย</h5>'
        })
      } else if (this.objbehaviorModel.travel_time_hr == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องใช้เวลาเดินทาง(ชั่วโมง)</h5>'
        })
      } else if (this.objbehaviorModel.travel_time_min == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องใช้เวลาเดินทาง(นาที)</h5>'
        })
      } else if (this.objbehaviorModel.student_travel_to_school == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องการเดินทางของนักเรียนไปโรงเรียน</h5>'
        })
      } else if (this.objbehaviorModel.housing_conditions == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องสภาพที่อยู่อาศัย</h5>'
        })
      } else if (this.objbehaviorModel.student_responsibility == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องภาระงานความรับผิดชอบของนักเรียนที่มีต่อครอบครัว</h5>'
        })
      } else if (this.objbehaviorModel.hobby == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องกิจกรรมยามว่างหรืองานอดิเรก</h5>'
        })
      } else if (this.objbehaviorModel.drug_use_behavior == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องพฤติกรรมการใช้สารเสพติด</h5>'
        })
      } else if (this.objbehaviorModel.violent_behavior == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องพฤติกรรมการใช้ความรุนแรง</h5>'
        })
      } else if (this.objbehaviorModel.sexual_behavior == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ช่องพฤติกรรมทางเพศ</h5>'
        })
      } else {
        this.objbehaviorModel.generate = this.objstudentModel.generate;
        this.objsubjectModelModel.generate = this.objstudentModel.generate;
        console.log(this.is_status);
        console.log(this.objstudentModel);
        console.log(this.objparentModel);
        console.log(this.objbehaviorModel);
        console.log(this.objrelationshipModel);
        console.log(this.objsubjectModelModel);
        this.is_status = 3;
        this.is_student = false;
        this.is_relationship = false;
        this.is_behavior_and_risk = false;
        this.is_student_house_photos = true;
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ข้อมูลส่วนนักเรียนและความสัมพันธ์ในครอบครัวให้ครบถ้วน</h5>'
      })
    }
  }
  submit_photoandlocation() {
    this.objPhotoandLocationModel.img1 = this.preview_image;
    this.objPhotoandLocationModel.img2 = this.preview_image1;
    this.objPhotoandLocationModel.img3 = this.preview_image2;
    this.objPhotoandLocationModel.lat = this.lat;
    this.objPhotoandLocationModel.lng = this.lng;

    if (this.is_status == 3) {
      if (this.objPhotoandLocationModel.img1 == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณาอัฟโหลดภาพที่ 1</h5>'
        })
      }
      else if (this.objPhotoandLocationModel.img2 == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณาอัฟโหลดภาพที่ 2</h5>'
        })
      } else if (this.objPhotoandLocationModel.img3 == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณาอัฟโหลดภาพที่ 3</h5>'
        })
      } else if (this.objPhotoandLocationModel.lat == undefined && this.objPhotoandLocationModel.lng == undefined) {
        Swal.fire({
          icon: 'error',
          title: '<h5 style="font-family: Kanit-Regular;">กรุณาเลือก ตำแหน่งที่ตั้งบ้านของนักเรียน</h5>'
        })
      }
      else {
        this.is_status = 4;
        this.objrelationshipModel.generate = this.objstudentModel.generate;
        this.objPhotoandLocationModel.generate = this.objstudentModel.generate;
        console.log(this.is_status);

        console.log(this.objstudentModel);
        console.log(this.objparentModel);
        console.log(this.objrelationshipModel);
        console.log(this.objbehaviorModel);
        console.log(this.objsubjectModelModel);
        console.log(this.objPhotoandLocationModel);
        this.InsertDetailStudentService.InsertStudentInfo(this.objstudentModel.student_prefix, this.objstudentModel.student_firstname, this.objstudentModel.student_surname, this.objstudentModel.student_grade, this.objstudentModel.student_id_card,this.objstudentModel.student_nickname,this.objstudentModel.student_residence,this.objstudentModel.student_room,this.objstudentModel.student_road,this.objstudentModel.student_moo,this.objstudentModel.student_tambon,this.objstudentModel.student_district,this.objstudentModel.student_province,this.objstudentModel.student_province_post, this.objstudentModel.generate).subscribe((res: any) => {
          if (res) {
            this.InsertDetailStudentService.InsertParentInfo(this.objparentModel.have_parent.toString(),this.objparentModel.parent_with_student, this.objparentModel.parent_prefix, this.objparentModel.parent_name, this.objparentModel.parent_surname, this.objparentModel.parent_relationship, this.objparentModel.parent_work, this.objparentModel.generate).subscribe((res: any) => {
              if (res) {
                this.InsertDetailStudentService.InsertRelationshipInfo(this.objrelationshipModel.students_receive_expenses, this.objrelationshipModel.want_schools_to_help_students, this.objrelationshipModel.caring_for_students, this.objrelationshipModel.generate).subscribe((res: any) => {
                  if (res) {
                    this.InsertDetailStudentService.InsertbehaviorInfo(this.objbehaviorModel.health, this.objbehaviorModel.welfare_or_safety, this.objbehaviorModel.travel_time_hr, this.objbehaviorModel.travel_time_min, this.objbehaviorModel.student_travel_to_school, this.objbehaviorModel.housing_conditions, this.objbehaviorModel.student_responsibility, this.objbehaviorModel.hobby, this.objbehaviorModel.drug_use_behavior, this.objbehaviorModel.violent_behavior, this.objbehaviorModel.sexual_behavior, this.objbehaviorModel.generate).subscribe((res: any) => {
                      if (res) {
                        this.InsertDetailStudentService.InserSubjectInfo(this.objsubjectModelModel.mathematics, this.objsubjectModelModel.thai_language, this.objsubjectModelModel.science, this.objsubjectModelModel.english_language,this.objsubjectModelModel.student_behavior, this.objsubjectModelModel.generate).subscribe((res: any) => {
                          if (res) {
                            this.InsertDetailStudentService.InserPhotoandLocationInfo(this.objPhotoandLocationModel.img1, this.objPhotoandLocationModel.img2, this.objPhotoandLocationModel.img3, this.objPhotoandLocationModel.lat, this.objPhotoandLocationModel.lng, this.objPhotoandLocationModel.generate).subscribe((res: any) => {
                              if (res) {
                                Swal.fire({
                                  icon: 'success',
                                  title: '<h5 style="font-family: Kanit-Regular;">บันทึกข้อมูลเรียนร้อย</h5>'
                                })
                                window.location.reload();
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: '<h5 style="font-family: Kanit-Regular;">กรุณากรอก ข้อมูลส่วนนักเรียน ความสัมพันธ์ในครอบครัวและพฤติกรรมและความเสี่ยงให้ครบถ้วน</h5>'
      })
    }
  }
  func_prefix() {
    console.log(this.student_prefix)
  }
  func_grade() {
    console.log(this.student_grade)
  }
  //Images
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
    console.log(this.preview_image)
  }
  //Images_1
  fileChangeEvent1(event: any): void {
    this.imageChangedEvent1 = event;
    this.is_confirm_image1 = true;
  }
  fileChangeEvent2(event: any): void {
    this.imageChangedEvent2 = event;
    this.is_confirm_image2 = true;
  }
  imageCropped1(event: ImageCroppedEvent) {
    this.croppedImage1 = event.base64;
  }
  imageCropped2(event: ImageCroppedEvent) {
    this.croppedImage2 = event.base64;
  }
  imageLoaded1() {
    // show cropper
  }
  imageLoaded2() {
    // show cropper
  }
  cropperReady1() {
    // cropper ready
  }
  cropperReady2() {
    // cropper ready
  }
  loadImageFailed1() {
    // show message
  }
  loadImageFailed2() {
    // show message
  }


  upload_image_home1() {
    this.preview_image1 = this.croppedImage1;
    this.croppedImage1 = '';
    this.imageChangedEvent1 = '';
    this.is_confirm_image1 = false;
    console.log(this.preview_image1)
  }
  upload_image_home2() {
    this.preview_image2 = this.croppedImage2;
    this.croppedImage2 = '';
    this.imageChangedEvent2 = '';
    this.is_confirm_image2 = false;
    console.log(this.preview_image2)
  }
  func_tambon() {
    if (this.student_tambon == 1 || this.student_tambon == 2 || this.student_tambon == 3) {
      this.student_province_post = "10110";
    }

  }

}
