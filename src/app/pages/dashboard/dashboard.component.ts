import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { flatMap } from 'rxjs';
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

  // 
  readmore = false;
  is_toggleRecordReadMore = false;
  is_toggleNatureReadMore = false;
  is_toggleProcessReadMore = false;
  is_toggleRelationReadMore = false;
  is_toggleHistoryReadMore = false;
  is_toggleProofReadMore = false;
  is_toggleVarietyReadMore = false;
  is_toggleEnvironmentReadMore = false;
  is_toggleFactorsReadMore = false;
  is_togglePlantingReadMore = false;
  is_togglePropagationReadMore = false;
  is_toggleHarvestingReadMore = false;
  is_togglePreservationReadMore = false;
  is_toggleMaintenanceReadMore = false;
  is_togglePlantationReadMore = false;
  is_toggleImportantReadMore = false;
  is_toggleEnemiesReadMore = false;
  is_toggleHarvestingProductsReadMore = false;
  is_toggleCreationReadMore = false;
  is_togglePreparationReadMore = false;
  is_togglePlantingSeedlingsReadMore = false;
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
  toggleReadMore() {
    this.readmore = !this.readmore;
  }
  toggleRecordReadMore() {
    this.is_toggleRecordReadMore = !this.is_toggleRecordReadMore;
  }
  toggleNatureReadMore() {
    this.is_toggleNatureReadMore = !this.is_toggleNatureReadMore;
  }
  toggleProcessReadMore() {
    this.is_toggleProcessReadMore = !this.is_toggleProcessReadMore;
  }

  toggleRelationReadMore() {
    this.is_toggleRelationReadMore = !this.is_toggleRelationReadMore;

  }
  toggleHistoryReadMore() {
    this.is_toggleHistoryReadMore = !this.is_toggleHistoryReadMore;
  }
  toggleProofReadMore() {
    this.is_toggleProofReadMore = !this.is_toggleProofReadMore;
  }
  toggleVarietyReadMore() {
    this.is_toggleVarietyReadMore = !this.is_toggleVarietyReadMore;
  }
  toggleEnvironmentReadMore() {
    this.is_toggleEnvironmentReadMore = !this.is_toggleEnvironmentReadMore;
  }
  toggleFactorsReadMore() {
    this.is_toggleFactorsReadMore = !this.is_toggleFactorsReadMore;
  }
  togglePlantingReadMore() {
    this.is_togglePlantingReadMore = !this.is_togglePlantingReadMore;
  }
  togglePropagationReadMore() {
    this.is_togglePropagationReadMore = !this.is_togglePropagationReadMore;
  }
  toggleHarvestingReadMore() {
    this.is_toggleHarvestingReadMore = !this.is_toggleHarvestingReadMore;
  }
  togglePreservationReadMore() {
    this.is_togglePreservationReadMore = !this.is_togglePreservationReadMore;
  }
  toggleMaintenanceReadMore() {
    this.is_toggleMaintenanceReadMore = !this.is_toggleMaintenanceReadMore;
  }
  togglePlantationReadMore() {
    this.is_togglePlantationReadMore = !this.is_togglePlantationReadMore;
  }
  toggleImportantReadMore() {
    this.is_toggleImportantReadMore = !this.is_toggleImportantReadMore;
  }
  toggleEnemiesReadMore() {
    this.is_toggleEnemiesReadMore = !this.is_toggleEnemiesReadMore;
  }
  toggleHarvestingProductsReadMore() {
    this.is_toggleHarvestingProductsReadMore = !this.is_toggleHarvestingProductsReadMore;
  }
  toggleCreationReadMore() {
    this.is_toggleCreationReadMore = !this.is_toggleCreationReadMore;
  }
  togglePreparationReadMore() {
    this.is_togglePreparationReadMore = !this.is_togglePreparationReadMore;
  }
  togglePlantingSeedlingsReadMore() {
    this.is_togglePlantingSeedlingsReadMore = !this.is_togglePlantingSeedlingsReadMore;
  }




}


