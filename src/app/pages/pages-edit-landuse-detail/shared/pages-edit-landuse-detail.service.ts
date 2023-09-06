import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesEditLanduseDetailService {
  private env = environment;
  //OLD
  private SelectProvincesUrl: string = `${this.env.API_PATH}/SelectProvinces`;
  private SelectAmphuresUrl: string = `${this.env.API_PATH}/SelectAmphures`;
  private SelectDistrictsUrl: string = `${this.env.API_PATH}/SelectDistricts`;
  private UpdateLanduseInfoUrl: string = `${this.env.API_PATH}/UpdateLanduseInfo`;
  private InsertHistoryLanduseUrl: string = `${this.env.API_PATH}/InsertHistoryLanduse`;


  constructor(private http: HttpClient) {
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
  UpdateLanduse(coconut_base_characteristics: string, base_to_ground_distance_20cm: string, base_to_ground_distance_150cm: string, track_measurement_1_to_17: string, leaf_stalk_length: string, leaf_stalk_width: string, length_of_leaf_segment_with_leaflet: string, count_of_left_subleaflets: string, length_of_subleaflet: string, production_jan_to_apr: string, production_may_to_aug: string, production_sep_to_dec: string, production_image: string, husked_fruit_peel_width: string, husked_fruit_peel_length: string, husked_no_fruit_peel_width: string, husked_no_fruit_peel_length: string, boundary_length: string, husk_skin_color: string, fresh_fruit_weight: string, plant_age: string, tree_canopy_shape: string, tree_quantity: string, planting_space: string, is_province: string, is_amphures: string, is_districts: string, zip_code: string, landuse_lat: string, landuse_lng: string, is_status: string, landuse_id: string) {
    return this.http.post(this.UpdateLanduseInfoUrl,
      { coconut_base_characteristics: coconut_base_characteristics, base_to_ground_distance_20cm: base_to_ground_distance_20cm, base_to_ground_distance_150cm: base_to_ground_distance_150cm, track_measurement_1_to_17: track_measurement_1_to_17, leaf_stalk_length: leaf_stalk_length, leaf_stalk_width: leaf_stalk_width, length_of_leaf_segment_with_leaflet: length_of_leaf_segment_with_leaflet, count_of_left_subleaflets: count_of_left_subleaflets, length_of_subleaflet: length_of_subleaflet, production_jan_to_apr: production_jan_to_apr, production_may_to_aug: production_may_to_aug, production_sep_to_dec: production_sep_to_dec, production_image: production_image, husked_fruit_peel_width: husked_fruit_peel_width, husked_fruit_peel_length: husked_fruit_peel_length, husked_no_fruit_peel_width: husked_no_fruit_peel_width, husked_no_fruit_peel_length: husked_no_fruit_peel_length, boundary_length: boundary_length, husk_skin_color: husk_skin_color, fresh_fruit_weight: fresh_fruit_weight, plant_age: plant_age, tree_canopy_shape: tree_canopy_shape, tree_quantity: tree_quantity, planting_space: planting_space, is_province: is_province, is_amphures: is_amphures, is_districts: is_districts, zip_code: zip_code, landuse_lat: landuse_lat, landuse_lng: landuse_lng, is_status: is_status, landuse_id: landuse_id });
  }
  InsertHistoryLanduse(people_generate: string, is_status: string, landuse_id: string) {
    return this.http.post(this.InsertHistoryLanduseUrl,
      { people_generate: people_generate, is_status: is_status, landuse_id: landuse_id });
  }
}
