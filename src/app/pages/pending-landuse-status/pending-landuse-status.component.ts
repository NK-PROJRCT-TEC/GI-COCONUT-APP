import { Component } from '@angular/core';
import { PendingLanduseStatusService } from './shared/pending-landuse-status.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { peopleModel } from 'src/app/model/peopleModel';
import { DomSanitizer } from '@angular/platform-browser';
import { PagesWaitingApproveLanduseService } from '../pages-waiting-approve-landuse/shared/pages-waiting-approve-landuse.service';
@Component({
  selector: 'app-pending-landuse-status',
  templateUrl: './pending-landuse-status.component.html',
  styleUrls: ['./pending-landuse-status.component.css']
})
export class PendingLanduseStatusComponent {
  //OLD
  objpeopleModel: peopleModel = new peopleModel();
  arrpeopleModel: any[] = [];
  status_ap: any;
  tempforfilter: any[] = [];
  employee_name: any;
  arrpeoplefilterModel: any[] = [];
  //NEW
  arrLanduse: any[] = [];
  //QR CODE
  public myAngularxQrCode: string = "";
  // public qrCodeDownloadLink: SafeUrl = "";
  filter_province: any;
  province: any;
  selected_province:any;
  filter_amphures: any;
  amphures: any
  selected_amphures: any;
  filter_districts: any;
  selected_districts: any;
  districts: any;
  constructor(private PendingLanduseStatusService: PendingLanduseStatusService, private router: Router, private sanitizer: DomSanitizer, private PagesWaitingApproveLanduseService: PagesWaitingApproveLanduseService) {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit(): void {
    this.PendingLanduseStatusService.SelectLandUseInfo().subscribe((res: any) => {
      console.log(res);
      if (res.length > 0) {
        this.arrLanduse = res;
        this.tempforfilter = res;
        localStorage.setItem("arrLanduse", JSON.stringify(this.arrLanduse));
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: '<h6 style="font-family: THSarabunNew;font-size:24px;font-weight: bold;">ไม่พบข้อมูล</h6>'
        })
      }
    });
    this.PagesWaitingApproveLanduseService.SelectProvinces().subscribe((res: any) => {
      if (res) {
        this.province = res;
        this.selected_province = res;

      }
    });
    this.PagesWaitingApproveLanduseService.SelectAmphures().subscribe((res: any) => {
      if (res) {
        this.amphures = res;
        this.selected_amphures = res;

      }
    });
    this.PagesWaitingApproveLanduseService.SelectDistricts().subscribe((res: any) => {
      if (res) {
        this.districts = res;
        this.selected_districts = res;
      }
    });
  }
  approve_status(e: any) {
    Swal.fire({
      title: '<h5 style="font-family: THSarabunNew;font-size:24px;font-weight: bold;">คุณต้องการบันทึกข้อมูลใช่หรือไม่?</h5>',
      showCancelButton: true,
      cancelButtonText: '<h5 style="font-family: THSarabunNew;font-size:24px;font-weight: bold;">ยกเลิก</h5>',
      cancelButtonColor: "#DD6B55",
      confirmButtonText: '<h5 style="font-family: THSarabunNew;font-size:24px;font-weight: bold;">บันทึก</h5>',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.employee_name = localStorage.getItem("employee_name");
        this.PendingLanduseStatusService.InsertHistoryApproveLandUseStatusinfo(e.people_generate, parseInt(e.landuse_id), this.employee_name, "2").subscribe((res: any) => {
          console.log(res);
          if (res == "OK") {
            this.PendingLanduseStatusService.UpdateHistoryApproveLandUseStatusinfo(parseInt(e.landuse_id), "2").subscribe((res: any) => {
              if (res == "OK") {
                Swal.fire({
                  icon: 'success',
                  title: '<h6 style="font-family: THSarabunNew;font-size:24px;font-weight: bold;">บันทึกข้อมูลเรียบร้อย</h6>'
                })
              } else {
                Swal.fire({
                  icon: 'warning',
                  title: '<h6 style="font-family: THSarabunNew;font-size:24px;font-weight: bold;">ไม่สามารถบันทึกข้อมูลได้ ติดต่อผู้ดูแลระบบ</h6>'
                })
              }
            });
          }
          else {
            Swal.fire({
              icon: 'warning',
              title: '<h6 style="font-family: THSarabunNew;font-size:24px;font-weight: bold;">ไม่สามารถบันทึกข้อมูลได้ ติดต่อผู้ดูแลระบบ</h6>'
            })
          }
        });

        this.router.navigate(['pages-waiting-approve-landuse']);
      }
    })

  }
  func_filter_status() {
    // this.ngOnInit();
    console.log(this.status_ap);
    if (this.status_ap == "all") {
      this.arrLanduse = this.tempforfilter;
    } else {
      this.arrLanduse = this.tempforfilter.filter(person => person.is_status === this.status_ap);
    }

    console.log(this.arrLanduse);
    // console.log(filteredArr);
    // Swal.fire({
    //   icon: 'warning',
    //   title: '<h6 style="font-family: THSarabunNew;">' + this.status_ap + '</h6>'
    // })

  }
  reject_status(arrpeople: any) {
    Swal.fire({
      title: '<h6 style="font-family: THSarabunNew;font-size:24px;font-weight: bold;">' + "หมายเหตุ" + '</h6>',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      cancelButtonText: '<h6 style="font-family: THSarabunNew;font-size:24px;font-weight: bold;">ยกเลิก</h6>',
      cancelButtonColor: "#DD6B55",
      confirmButtonText: '<h6 style="font-family: THSarabunNew;font-size:24px;font-weight: bold;">ตกลง</h6>',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        this.employee_name = localStorage.getItem("employee_name");
        this.PendingLanduseStatusService.InsertHistoryApporveLanduseReject(arrpeople.people_generate, arrpeople.landuse_id, result.value, this.employee_name, "0").subscribe((res: any) => {
          console.log(res);
          if (res == "OK") {
            this.PendingLanduseStatusService.UpdateLanduseStatus(arrpeople.landuse_id, "0").subscribe((res: any) => {
              if (res == "OK") {
                Swal.fire({
                  icon: 'success',
                  title: '<h6 style="font-family: THSarabunNew;font-size:24px;font-weight: bold;">บันทึกข้อมูลเรียบร้อย</h6>'
                })
                this.ngOnInit();
              } else {
                Swal.fire({
                  icon: 'warning',
                  title: '<h6 style="font-family: THSarabunNew;font-size:24px;font-weight: bold;">ไม่สามารถบันทึกข้อมูลได้ ติดต่อผู้ดูแลระบบ</h6>'
                })
              }
            });
          }
          else {
            Swal.fire({
              icon: 'warning',
              title: '<h6 style="font-family: THSarabunNew;font-size:24px;font-weight: bold;">ไม่สามารถบันทึกข้อมูลได้ ติดต่อผู้ดูแลระบบ</h6>'
            })
          }
        });
      }
    })
  }
  pages_profile_info(landuse_id: string) {
    localStorage.setItem("landuse_id", landuse_id);
    this.router.navigate(['pages-landuse-detail']);
  }
  func_filter_province(e: any) {
    var code = e.target.value;
    console.log(code);
    this.amphures = this.selected_amphures.filter((option: any) => option.province_id == Number(code));
    // console.log(this.selected_amphures);
    // console.log(code);
    // this.selected_province = code;
  }
  func_filter_amphures(e: any) {
    var code = e.target.value;
    // console.log(this.districts);
    // this.districts = this.selected_districts.filter((option: any) => option.districts_id == Number(code));
    // var code = e.target.value;
    // this.amphures = this.selected_amphures.filter(option => option.amphure_id == Number(code));
    // console.log(this.districts);

    this.PagesWaitingApproveLanduseService.SelectDistrictsByAmphureId(code).subscribe((res: any) => {
      if (res) {
        this.districts = res;
      }
    });
  }
  func_filter_districts(e: any) {

  }
}
