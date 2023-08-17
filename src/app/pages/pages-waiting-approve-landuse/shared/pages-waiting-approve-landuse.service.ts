import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesWaitingApproveLanduseService {
  private env = environment;
  private SelectLandusebyPeopleGenerateUrl: string = `${this.env.API_PATH}/SelectLandusebyPeopleGenerate`;
  
  constructor(private http: HttpClient) {
  }
  SelectLandusebyPeopleGenerateAndStatus(people_generate: string) {
    return this.http.post(this.SelectLandusebyPeopleGenerateUrl,
      { people_generate: people_generate });
  }
  


}
