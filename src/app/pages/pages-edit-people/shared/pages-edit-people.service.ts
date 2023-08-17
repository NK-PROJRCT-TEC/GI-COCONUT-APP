import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesEditPeopleService {
  private env = environment;
  private UpdatePeopleinfoUrl: string = `${this.env.API_PATH}/UpdateStatusPeople`;
  private InsertHistoryUrl: string = `${this.env.API_PATH}/InsertHistory`;
  private SelectPeopleforUpdateUrl: string = `${this.env.API_PATH}/SelectPeopleforUpdate`;
  constructor(private http: HttpClient) {
  }

  SelectPeopleforUpdate(people_generate: string) {
    return this.http.post(this.SelectPeopleforUpdateUrl,
      { people_generate: people_generate });
  }
  UpdatePeopleinfo(people_name: string, people_localtion_number: string, people_moo: string, people_road: string, people_alley: string, people_tumbon: string, people_district: string, people_province: string, people_postcode: string, people_phone: string, people_email: string, people_cardnumber: string, people_password: string, people_term: string, people_image_profile: string, is_status: string, people_generate: string) {
    return this.http.post(this.UpdatePeopleinfoUrl,
      { people_name: people_name, people_localtion_number: people_localtion_number, people_moo: people_moo, people_road: people_road, people_alley: people_alley, people_tumbon: people_tumbon, people_district: people_district, people_province: people_province, people_postcode: people_postcode, people_phone: people_phone, people_email: people_email, people_cardnumber: people_cardnumber, people_password: people_password, people_term: people_term, people_image_profile: people_image_profile, is_status: is_status, people_generate: people_generate });
  }
  InsertHistory(people_generate: string, is_status: string) {
    return this.http.post(this.InsertHistoryUrl,
      { people_generate: people_generate, is_status: is_status });
  }


}
