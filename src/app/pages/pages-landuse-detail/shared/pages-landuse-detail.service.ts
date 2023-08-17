import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesLanduseDetailService {
  private env = environment;
  private SelectLandUseInfoByLanduseIDUrl: string = `${this.env.API_PATH}/SelectLandUseInfoByLanduseID`;
  constructor(private http: HttpClient) {
  }
  SelectLandUseInfoByLanduseID(landuse_id: string) {
    return this.http.post(this.SelectLandUseInfoByLanduseIDUrl,
      { landuse_id: landuse_id });
  }
}
