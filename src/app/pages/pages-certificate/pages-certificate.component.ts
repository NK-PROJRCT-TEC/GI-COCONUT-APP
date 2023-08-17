import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { PagesCertificateService } from './shared/pages-certificate.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pages-certificate',
  templateUrl: './pages-certificate.component.html',
  styleUrls: ['./pages-certificate.component.css']
})
export class PagesCertificateComponent {
  activePath: string = '';
  landuse_id: any;
  constructor(private router: Router, private PagesCertificateService: PagesCertificateService) {

    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {

        this.activePath = event.url;
        // console.log({ event });
        console.log(this.router.url.substring(23));
        this.landuse_id = this.router.url.substring(23)
        // console.log(window.location.pathname);
        this.PagesCertificateService.SelectLandUse(parseInt(this.landuse_id)).subscribe((res: any) => {
          if (res) {
            console.log(res);
          }
        });
      }
    });
  }
}
