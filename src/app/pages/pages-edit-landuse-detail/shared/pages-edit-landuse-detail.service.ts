import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesEditLanduseDetailService {
  private env = environment;
  //OLD
  private SelectPeopleinfoUrl: string = `${this.env.API_PATH}/SelectPeopleinfo`;
  private SelectLandUseInfoUrl: string = `${this.env.API_PATH}/SelectLandUseInfo`;
  private UpdateLanduseInfoUrl: string = `${this.env.API_PATH}/UpdateLanduseInfo`;
  private InsertHistoryLanduseUrl: string = `${this.env.API_PATH}/InsertHistoryLanduse`;
  //NEW
  private SelectLandUseByLandByIDUrl: string = `${this.env.API_PATH}/SelectLandUseByLandByID`;
  constructor(private http: HttpClient) {
  }
  SelectProfilePeopleinfo(people_generate: string) {
    return this.http.post(this.SelectPeopleinfoUrl,
      { people_generate: people_generate });
  }
  SelectLandUseInfo(people_generate: string) {
    return this.http.post(this.SelectLandUseInfoUrl,
      { people_generate: people_generate });
  }
  UpdateLanduseInfo(color_of_shoot: string, type_of_coconut: string, bole: string, petiole_length: string, leaflet_length: string, number_of_spikelets: string, peduncle_length: string, young_fruit_weight: string, shape: string, valuenow: string, lat: string, lng: string, people_generate: string, is_status: string, landuse_id: number) {
    return this.http.post(this.UpdateLanduseInfoUrl,
      { color_of_shoot: color_of_shoot, type_of_coconut: type_of_coconut, bole: bole, petiole_length: petiole_length, leaflet_length: leaflet_length, number_of_spikelets: number_of_spikelets, peduncle_length: peduncle_length, young_fruit_weight: young_fruit_weight, shape: shape, valuenow: valuenow, lat: lat, lng: lng, people_generate: people_generate, is_status: is_status, landuse_id: landuse_id });
  }
  InsertHistoryLanduse(people_generate: string, is_status: string, landuse_id: any) {
    return this.http.post(this.InsertHistoryLanduseUrl,
      { people_generate: people_generate, is_status: is_status, landuse_id: landuse_id });
  }
  //NEW
  SelectLandUseByLandByID(landuse_id: string) {
    return this.http.post(this.SelectLandUseByLandByIDUrl,
      { landuse_id: landuse_id });
  }
}
