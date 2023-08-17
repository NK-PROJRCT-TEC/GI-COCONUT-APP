import { Component } from '@angular/core';
import { PendingStatusService } from './shared/pending-status.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { peopleModel } from 'src/app/model/peopleModel';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-pending-status',
  templateUrl: './pending-status.component.html',
  styleUrls: ['./pending-status.component.css']
})
export class PendingStatusComponent {
  objpeopleModel: peopleModel = new peopleModel();
  arrpeopleModel: any[] = [];
  status_ap: any;
  tempforfilter: any[] = [];
  employee_name: any;
  arrpeoplefilterModel: any[] = [];
  constructor(private PendingStatusService: PendingStatusService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.PendingStatusService.SelectPendingStatus().subscribe((res: any) => {
      console.log(res);
      if (res.length > 0) {
        this.arrpeopleModel = res;
        this.tempforfilter = res;
        localStorage.setItem("arrpeopleModel", JSON.stringify(this.arrpeopleModel));
        // console.log(this.arrpeopleModel[0].people_image_profile);
        // let objectURL = 'data:image/jpeg;base64,' + res.people_image_profile;
        // this.arrpeopleModel[0].people_image_profile = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        // console.log(this.arrpeopleModel[0].people_image_profile);
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: '<h6 style="font-family: Kanit-Regular;">ไม่พบข้อมูล</h6>'
        })
      }
    });
  }
  approve_status(people_generate: string) {
    this.employee_name = localStorage.getItem("employee_name");
    this.PendingStatusService.UpdateHistoryApproveStatusinfo(people_generate, this.employee_name, "2").subscribe((res: any) => {
      console.log(res);
      if (res == "OK") {
        this.PendingStatusService.UpdateStatusPeople(people_generate, "2").subscribe((res: any) => {
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
        this.PendingStatusService.InsertHistoryReject(arrpeople.people_generate, result.value, this.employee_name, "0").subscribe((res: any) => {
          console.log(res);
          if (res == "OK") {
            this.PendingStatusService.UpdateStatusPeople(arrpeople.people_generate, "0").subscribe((res: any) => {
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
  pages_profile_info(people_generate: string) {
    localStorage.setItem("profile_people_generate",people_generate);
    this.router.navigate(['pages-user-profile-people']);
  }

}
