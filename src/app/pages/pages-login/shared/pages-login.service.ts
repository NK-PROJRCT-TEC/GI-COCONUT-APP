import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesLoginService {
  private env = environment;
  private ListAutthenUrl: string = `${this.env.API_PATH}/Login`;
  constructor(private http: HttpClient) {
  }
  Login(username: string, password: string) {
    return this.http.post(this.ListAutthenUrl,
      { username: username, password: password });
  }

}
