import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private elementRef: ElementRef, private router: Router) { }
  username: any;
  password: any;
  isDragging = false;
  startPos = 0;
  currentTranslate = 0;
  prevTranslate = 0;
  animationID: number = 0;
  ngOnInit(): void {

    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "../assets/js/main.js";
    // this.elementRef.nativeElement.appendChild(s);
    this.username = localStorage.getItem("username");
    this.password = localStorage.getItem("password");
    console.log(this.username);
    if (this.username == null) {
      this.router.navigate(['pages-login']);
    }
  }
  
  // insert_detail_student() {
  //   window.open('insert-detail-student', '_self');
  // }
  // search_student(){
  //   window.open('search-student', '_self');
  // }
}
