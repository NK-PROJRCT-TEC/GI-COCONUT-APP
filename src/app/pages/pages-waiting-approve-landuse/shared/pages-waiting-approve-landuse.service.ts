import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesWaitingApproveLanduseService {
  private env = environment;
  private SelectLandusebyPeopleGenerateUrl: string = `${this.env.API_PATH}/SelectLandusebyPeopleGenerate`;
  private SelectProvincesUrl: string = `${this.env.API_PATH}/SelectProvinces`;
  private SelectAmphuresUrl: string = `${this.env.API_PATH}/SelectAmphures`;
  private SelectDistrictsUrl: string = `${this.env.API_PATH}/SelectDistricts`;
  private SelectDistrictsByAmphureidUrl: string = `${this.env.API_PATH}/SelectDistrictsByAmphureid`;
  private FilterDistrictsByidUrl: string = `${this.env.API_PATH}/FilterDistrictsByid`;

  constructor(private http: HttpClient) {
  }
  SelectLandusebyPeopleGenerateAndStatus(people_generate: string) {
    return this.http.post(this.SelectLandusebyPeopleGenerateUrl,
      { people_generate: people_generate });
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
  SelectDistrictsByAmphureId(amphure_id: string) {
    return this.http.post(this.SelectDistrictsByAmphureidUrl,
      { amphure_id: amphure_id });
  }
  FilterDistrictsByid(id: string) {
    return this.http.post(this.FilterDistrictsByidUrl,
      { id: id });
  }


}
