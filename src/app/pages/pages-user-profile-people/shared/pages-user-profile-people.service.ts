import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesUserProfilePeopleService {
  private env = environment;
  private SelectPeopleinfoUrl: string = `${this.env.API_PATH}/SelectPeopleinfo`;
  constructor(private http: HttpClient) {
  }
  SelectProfilePeopleinfo(people_generate: string) {
    return this.http.post(this.SelectPeopleinfoUrl,
      { people_generate: people_generate });
  }
}
