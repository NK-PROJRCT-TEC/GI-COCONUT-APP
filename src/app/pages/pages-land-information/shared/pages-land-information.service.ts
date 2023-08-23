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
  private SelectProvincesUrl: string = `${this.env.API_PATH}/SelectProvinces`;
  private SelectAmphuresUrl: string = `${this.env.API_PATH}/SelectAmphures`;
  private SelectDistrictsUrl: string = `${this.env.API_PATH}/SelectDistricts`;


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
  InsertLanduseInfo(feature_trunk_description: string, feature_trunk_circumference1: string, feature_trunk_circumference2: string, feature_leaf_path_length: string, feature_leaf_stalk_length: string, feature_leaf_minor_length: string, feature_leaflet_count: string, feature_stem_axis_length: string, feature_female_flower_count: string, feature_inflorescence_count: string, feature_vertical_pericarp_shape: string, feature_pericarp_circumference1: string, feature_pericarp_circumference2: string, feature_pericarp_color: string, feature_seed_shape: string, feature_water_sweetness: string, feature_flesh_thickness: string, is_province: string, is_amphures: string, is_districts: string, zip_code: string, valuenow: string, lat: string, lng: string, people_generate: string, is_status: string) {
    return this.http.post(this.InsertLanduseInfoUrl,
      { feature_trunk_description: feature_trunk_description, feature_trunk_circumference1: feature_trunk_circumference1, feature_trunk_circumference2: feature_trunk_circumference2, feature_leaf_path_length: feature_leaf_path_length, feature_leaf_stalk_length: feature_leaf_stalk_length, feature_leaf_minor_length: feature_leaf_minor_length, feature_leaflet_count: feature_leaflet_count, feature_stem_axis_length: feature_stem_axis_length, feature_female_flower_count: feature_female_flower_count, feature_inflorescence_count: feature_inflorescence_count, feature_vertical_pericarp_shape: feature_vertical_pericarp_shape, feature_pericarp_circumference1: feature_pericarp_circumference1, feature_pericarp_circumference2: feature_pericarp_circumference2, feature_pericarp_color: feature_pericarp_color, feature_seed_shape: feature_seed_shape, feature_water_sweetness: feature_water_sweetness, feature_flesh_thickness: feature_flesh_thickness, is_province: is_province, is_amphures: is_amphures, is_districts: is_districts, zip_code: zip_code, valuenow: valuenow, lat: lat, lng: lng, people_generate: people_generate, is_status: is_status });
  }
  InsertHistoryLanduse(people_generate: string, is_status: string, landuse_id: any) {
    return this.http.post(this.InsertHistoryLanduseUrl,
      { people_generate: people_generate, is_status: is_status, landuse_id: landuse_id });
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
