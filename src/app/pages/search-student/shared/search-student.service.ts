import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SearchStudentService {
  private env = environment;
  private SelectStudentInfoUrl: string = `${this.env.API_PATH}/SelectStudentInfo`;
  constructor(private http: HttpClient) {
  }
  SelectStudentInfo() {
    return this.http.get(this.SelectStudentInfoUrl,
      {});
  }



}
