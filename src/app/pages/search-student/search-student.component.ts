import { Component, OnInit } from '@angular/core';
import { SearchStudentService } from './shared/search-student.service';
import { studentModel } from 'src/app/model/studentModel';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {
  objstudentModel: studentModel = new studentModel();
  arrStudent: any[] = [];
  constructor(private SearchStudentService: SearchStudentService) { }

  ngOnInit(): void {
    this.SearchStudentService.SelectStudentInfo().subscribe((res: any) => {
      if (res) {
        this.objstudentModel = res;
        this.arrStudent = res;
        console.log(this.objstudentModel);
        console.log(this.objstudentModel.student_firstname);
      } else {
        alert("TEST");
      }
    });
  }
  func_route_insert() {

    // window.open('#/pages/users-profile', '_self');

  }
  func_info(value: any) {
    console.log(value);
    localStorage.removeItem("arrStudentinfo");
    localStorage.setItem("arrStudentinfo", JSON.stringify(value));
    window.open('/users-profile', '_self');
  }
  func_visit_student(value: any) {
    localStorage.setItem("arrStudentinfo", JSON.stringify(value));
    window.open('/insert-detail-student', '_self');
  }

}
