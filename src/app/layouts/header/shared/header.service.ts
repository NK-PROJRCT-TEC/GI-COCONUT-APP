import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private env = environment;
  private GetPeopleImageProfileUrl: string = `${this.env.API_PATH}/GetPeopleImageProfile`;
  constructor(private http: HttpClient) {
  }
  GetPeopleImageProfile(people_generate: string) {
    return this.http.post(this.GetPeopleImageProfileUrl,
      { people_generate: people_generate });
  }

}
