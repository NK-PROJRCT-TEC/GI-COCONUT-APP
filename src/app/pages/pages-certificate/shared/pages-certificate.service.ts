import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesCertificateService {
  private env = environment;
  private SelectLandUseUrl: string = `${this.env.API_PATH}/SelectLandUseByLandByID`;
  constructor(private http: HttpClient) {
  }
  SelectLandUse(landuse_id: number) {
    return this.http.post(this.SelectLandUseUrl,
      { landuse_id: landuse_id });
  }
}
