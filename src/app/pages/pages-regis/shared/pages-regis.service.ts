import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesRegisService {
  private env = environment;
  private RegisUrl: string = `${this.env.API_PATH}/InsertRegis`;
  constructor(private http: HttpClient) {
  }
  Register(username: string, password: string, position: string, class_teacher: string) {
    return this.http.put(this.RegisUrl,
      { username: username, password: password, position: position, class_teacher: class_teacher });
  }

}
