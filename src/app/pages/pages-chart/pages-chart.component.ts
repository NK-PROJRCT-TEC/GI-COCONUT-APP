import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-pages-chart',
  templateUrl: './pages-chart.component.html',
  styleUrls: ['./pages-chart.component.css']
})
export class PagesChartComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
    
  }

}
