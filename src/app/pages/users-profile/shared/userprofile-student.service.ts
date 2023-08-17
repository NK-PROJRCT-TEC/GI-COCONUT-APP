import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserprofileStudentService {
  private env = environment;
  private SelectPhotoandLocationInfoUrl: string = `${this.env.API_PATH}/SelectPhotoandlocationinfo`;
  constructor(private http: HttpClient) {
  }
  SelectPhotoandLocationInfo(generate: string) {
    return this.http.put(this.SelectPhotoandLocationInfoUrl,
      { generate: generate });
  }
}
