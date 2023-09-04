import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesWaitingApproveLanduseDetailService {
  private env = environment;
  private SelectHistoryApproveLanduseUrl: string = `${this.env.API_PATH}/SelectHistoryApproveLanduse`;
  constructor(private http: HttpClient) {
  }
  SelectHistoryApproveLanduse(landuse_id: string) {
    return this.http.post(this.SelectHistoryApproveLanduseUrl,
      { landuse_id: landuse_id });
  }
}
