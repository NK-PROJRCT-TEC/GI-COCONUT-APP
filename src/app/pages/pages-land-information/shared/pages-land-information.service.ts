import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesLandInformationService {
  private env = environment;
  private SelectPeopleinfoUrl: string = `${this.env.API_PATH}/SelectPeopleinfo`;
  private SelectLandUseInfoUrl: string = `${this.env.API_PATH}/SelectLandUseInfo`;
  private InsertLanduseInfoUrl: string = `${this.env.API_PATH}/InsertLanduseInfo`;
  private InsertHistoryLanduseUrl: string = `${this.env.API_PATH}/InsertHistoryLanduse`;
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
  InsertLanduseInfo(color_of_shoot: string, type_of_coconut: string, bole: string, petiole_length: string, leaflet_length: string, number_of_spikelets: string, peduncle_length: string, young_fruit_weight: string, shape: string, valuenow: string, lat: string, lng: string, people_generate: string, is_status: string) {
    return this.http.post(this.InsertLanduseInfoUrl,
      { color_of_shoot: color_of_shoot, type_of_coconut: type_of_coconut, bole: bole, petiole_length: petiole_length, leaflet_length: leaflet_length, number_of_spikelets: number_of_spikelets, peduncle_length: peduncle_length, young_fruit_weight: young_fruit_weight, shape: shape, valuenow: valuenow, lat: lat, lng: lng, people_generate: people_generate, is_status: is_status });
  }
  InsertHistoryLanduse(people_generate: string, is_status: string, landuse_id: any) {
    return this.http.post(this.InsertHistoryLanduseUrl,
      { people_generate: people_generate, is_status: is_status,landuse_id:landuse_id });
  }
}
