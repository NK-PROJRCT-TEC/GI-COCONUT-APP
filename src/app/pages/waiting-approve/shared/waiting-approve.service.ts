import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WaitingApproveService {
  private env = environment;
  private SelectWaitingApproveisStatusUrl: string = `${this.env.API_PATH}/SelectWaitingApproveisStatus`;
  constructor(private http: HttpClient) {
  }
  SelectWaitingApproveisStatus(people_generate: string, is_status: string) {
    return this.http.post(this.SelectWaitingApproveisStatusUrl,
      { people_generate: people_generate, is_status: is_status });
  }



}
