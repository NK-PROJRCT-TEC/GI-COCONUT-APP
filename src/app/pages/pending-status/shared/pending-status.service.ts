import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PendingStatusService {
  private env = environment;
  private SelectPendingStatusUrl: string = `${this.env.API_PATH}/SelectPendingStatus`;
  private InsertHistoryRejectUrl: string = `${this.env.API_PATH}/InsertHistoryReject`;
  private UpdateStatusPeopleUrl: string = `${this.env.API_PATH}/UpdatePeopleStatusinfo`;
  private UpdateApproveStatusinfoUrl: string = `${this.env.API_PATH}/UpdateApproveStatusinfo`;
  
  constructor(private http: HttpClient) {
  }
  SelectPendingStatus() {
    return this.http.get(this.SelectPendingStatusUrl,
      {});
  }
  InsertHistoryReject(people_generate: string, history_remark: string, employee_name: string, is_status: string) {
    return this.http.post(this.InsertHistoryRejectUrl,
      { people_generate: people_generate, history_remark: history_remark, employee_name: employee_name, is_status: is_status });
  }
  UpdateStatusPeople(people_generate: string, is_status: string) {
    return this.http.post(this.UpdateStatusPeopleUrl,
      { people_generate: people_generate, is_status: is_status });
  }
  UpdateHistoryApproveStatusinfo(people_generate: string, employee_name: string, is_status: string) {
    return this.http.post(this.UpdateApproveStatusinfoUrl,
      { people_generate: people_generate, employee_name: employee_name, is_status: is_status });
  }
}
