import { Component } from '@angular/core';
import { PendingLanduseStatusService } from './shared/pending-landuse-status.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { peopleModel } from 'src/app/model/peopleModel';
import { DomSanitizer } from '@angular/platform-browser';
import { exit } from 'process';
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
  arrladnuse: any[] = [];
  //QR CODE
  public myAngularxQrCode: string = "";
  // public qrCodeDownloadLink: SafeUrl = "";
  constructor(private PendingLanduseStatusService: PendingLanduseStatusService, private router: Router, private sanitizer: DomSanitizer) {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit(): void {
    this.PendingLanduseStatusService.SelectLandUseInfo().subscribe((res: any) => {
      console.log(res);
      if (res.length > 0) {
        this.arrladnuse = res;
        this.tempforfilter = res;
        localStorage.setItem("arrladnuse", JSON.stringify(this.arrladnuse));
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: '<h6 style="font-family: Kanit-Regular;">ไม่พบข้อมูล</h6>'
        })
      }
    });
  }
  approve_status(e: any) {
    Swal.fire({
      title: '<h5 style="font-family: Kanit-Regular;">คุณต้องการบันทึกข้อมูลใช่หรือไม่?</h5>',
      showCancelButton: true,
      cancelButtonText: '<h5 style="font-family: Kanit-Regular;">ยกเลิก</h5>',
      cancelButtonColor: "#DD6B55",
      confirmButtonText: '<h5 style="font-family: Kanit-Regular;">บันทึก</h5>',
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
                  title: '<h6 style="font-family: Kanit-Regular;">บันทึกข้อมูลเรียบร้อย</h6>'
                })
              } else {
                Swal.fire({
                  icon: 'warning',
                  title: '<h6 style="font-family: Kanit-Regular;">ไม่สามารถบันทึกข้อมูลได้ ติดต่อผู้ดูแลระบบ</h6>'
                })
              }
            });
          }
          else {
            Swal.fire({
              icon: 'warning',
              title: '<h6 style="font-family: Kanit-Regular;">ไม่สามารถบันทึกข้อมูลได้ ติดต่อผู้ดูแลระบบ</h6>'
            })
          }
        });

        this.router.navigate(['pages-waiting-approve-landuse']);
      }
    })

  }
  func_filter_status() {
    // this.ngOnInit();
    if (this.status_ap == "all") {
      this.arrpeopleModel = this.tempforfilter;
    } else {
      this.arrpeopleModel = this.tempforfilter.filter(person => person.is_status === this.status_ap);
    }

    // console.log(filteredArr);
    // Swal.fire({
    //   icon: 'warning',
    //   title: '<h6 style="font-family: Kanit-Regular;">' + this.status_ap + '</h6>'
    // })

  }
  reject_status(arrpeople: any) {
    Swal.fire({
      title: '<h6 style="font-family: Kanit-Regular;">' + "หมายเหตุ" + '</h6>',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: '<h6 style="font-family: Kanit-Regular;">OK</h6>',
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
                  title: '<h6 style="font-family: Kanit-Regular;">บันทึกข้อมูลเรียบร้อย</h6>'
                })
                this.ngOnInit();
              } else {
                Swal.fire({
                  icon: 'warning',
                  title: '<h6 style="font-family: Kanit-Regular;">ไม่สามารถบันทึกข้อมูลได้ ติดต่อผู้ดูแลระบบ</h6>'
                })
              }
            });
          }
          else {
            Swal.fire({
              icon: 'warning',
              title: '<h6 style="font-family: Kanit-Regular;">ไม่สามารถบันทึกข้อมูลได้ ติดต่อผู้ดูแลระบบ</h6>'
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

}
