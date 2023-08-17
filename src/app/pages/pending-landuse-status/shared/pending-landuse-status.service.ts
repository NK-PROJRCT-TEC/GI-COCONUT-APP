import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PendingLanduseStatusService {
  private env = environment;
  //OLD
  // private SelectPendingStatusUrl: string = `${this.env.API_PATH}/SelectPendingStatus`;
  private InsertHistoryApporveLanduseRejectUrl: string = `${this.env.API_PATH}/InsertHistoryApporveLanduseReject`;
  private UpdateLanduseStatusUrl: string = `${this.env.API_PATH}/UpdateLanduseStatus`;
  // private UpdateApproveStatusinfoUrl: string = `${this.env.API_PATH}/UpdateApproveStatusinfo`;
  //NEW
  private SelectLandUseInfoUrl: string = `${this.env.API_PATH}/SelectLandUseInfo`;
  private InsertHistoryApproveLandUseStatusinfoUrl: string = `${this.env.API_PATH}/InsertHistoryApproveLandUseStatusinfo`;
  private UpdateApproveLandUseStatusinfoUrl: string = `${this.env.API_PATH}/UpdateApproveLandUseStatusinfo`;
  


  constructor(private http: HttpClient) {
  }
  SelectLandUseInfo() {
    return this.http.get(this.SelectLandUseInfoUrl,
      {});
  }
  InsertHistoryApporveLanduseReject(people_generate: string, landuse_id: string, history_remark: string, employee_name: string, is_status: string) {
    return this.http.post(this.InsertHistoryApporveLanduseRejectUrl,
      { people_generate: people_generate, landuse_id: landuse_id, history_remark: history_remark, employee_name: employee_name, is_status: is_status });
  }
  UpdateLanduseStatus(landuse_id: string, is_status: string) {
    return this.http.post(this.UpdateLanduseStatusUrl,
      { landuse_id: landuse_id, is_status: is_status });
  }
  InsertHistoryApproveLandUseStatusinfo(people_generate: string, landuse_id: number, employee_name: string, is_status: string) {
    return this.http.post(this.InsertHistoryApproveLandUseStatusinfoUrl,
      { people_generate: people_generate, landuse_id: landuse_id, employee_name: employee_name, is_status: is_status });
  }
  UpdateHistoryApproveLandUseStatusinfo(landuse_id: number, is_status: string) {
    return this.http.post(this.UpdateApproveLandUseStatusinfoUrl,
      { landuse_id: landuse_id, is_status: is_status });
  }
  //OLD
  // SelectPendingStatus() {
  //   return this.http.get(this.SelectPendingStatusUrl,
  //     {});
  // }

  // UpdateHistoryApproveStatusinfo(people_generate: string, employee_name: string, is_status: string) {
  //   return this.http.post(this.UpdateApproveStatusinfoUrl,
  //     { people_generate: people_generate, employee_name: employee_name, is_status: is_status });
  // }
}
