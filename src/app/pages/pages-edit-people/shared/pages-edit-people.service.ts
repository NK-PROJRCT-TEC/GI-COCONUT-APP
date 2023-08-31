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
  private SelectProvincesUrl: string = `${this.env.API_PATH}/SelectProvinces`;
  private SelectAmphuresUrl: string = `${this.env.API_PATH}/SelectAmphures`;
  private SelectDistrictsUrl: string = `${this.env.API_PATH}/SelectDistricts`;
  constructor(private http: HttpClient) {
  }

  SelectPeopleforUpdate(people_generate: string) {
    return this.http.post(this.SelectPeopleforUpdateUrl,
      { people_generate: people_generate });
  }
  UpdatePeopleinfo(people_image_profile: string, people_name: string, people_localtion_number: string, people_moo: string, people_road: string, people_alley: string, people_tumbon: string, people_district: string, people_province: string, people_postcode: string, people_phone: string, people_cardnumber: string, is_gi_certificate: string, gi_certificates: string, is_dna_certificate: string, dna_certificates: string, is_status: string, people_generate: string) {
    return this.http.post(this.UpdatePeopleinfoUrl,
      { people_image_profile: people_image_profile, people_name: people_name, people_localtion_number: people_localtion_number, people_moo: people_moo, people_road: people_road, people_alley: people_alley, people_tumbon: people_tumbon, people_district: people_district, people_province: people_province, people_postcode: people_postcode, people_phone: people_phone, people_cardnumber: people_cardnumber, is_gi_certificate: is_gi_certificate, gi_certificates: gi_certificates, is_dna_certificate: is_dna_certificate, dna_certificates: dna_certificates, is_status: is_status, people_generate: people_generate });
  }
  InsertHistory(people_generate: string, is_status: string) {
    return this.http.post(this.InsertHistoryUrl,
      { people_generate: people_generate, is_status: is_status });
  }
  SelectProvinces() {
    return this.http.get(this.SelectProvincesUrl,
      {});
  }
  SelectAmphures() {
    return this.http.get(this.SelectAmphuresUrl,
      {});
  }
  SelectDistricts() {
    return this.http.get(this.SelectDistrictsUrl,
      {});
  }

}
