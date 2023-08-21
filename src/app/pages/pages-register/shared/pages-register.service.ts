import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesRegisterService {
  private env = environment;
  private InsertRegisterinfoUrl: string = `${this.env.API_PATH}/InsertRegisterinfo`;
  private InsertHistoryUrl: string = `${this.env.API_PATH}/InsertHistory`;
  constructor(private http: HttpClient) {
  }
  InsertRegisterinfo(people_image_profile: string, people_name: string, people_localtion_number: string, people_moo: string, people_road: string, people_alley: string, people_tumbon: string, people_district: string, people_province: string, people_postcode: string, people_phone: string, people_email: string, people_cardnumber: string, is_gi: number, gi_certificates: string, is_dna: number, dna_certificates: string, people_password: string, is_term: number, is_status: string, people_generate: string) {
    return this.http.post(this.InsertRegisterinfoUrl,
      {
        people_image_profile: people_image_profile,
        people_name: people_name,
        people_localtion_number: people_localtion_number,
        people_moo: people_moo,
        people_road: people_road,
        people_alley: people_alley,
        people_tumbon: people_tumbon,
        people_district: people_district,
        people_province: people_province,
        people_postcode: people_postcode,
        people_phone: people_phone,
        people_email: people_email,
        people_cardnumber: people_cardnumber,
        is_gi: is_gi,
        gi_certificates: gi_certificates,
        is_dna: is_dna,
        dna_certificates: dna_certificates,
        people_password: people_password,
        is_term: is_term,
        is_status: is_status,
        people_generate: people_generate
      });
  }
  InsertHistory(people_generate: string, is_status: string) {
    return this.http.post(this.InsertHistoryUrl,
      {
        people_generate: people_generate,
        is_status: is_status
      });
  }


}
