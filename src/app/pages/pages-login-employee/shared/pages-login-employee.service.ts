import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesLoginEmployeeService {
  private env = environment;
  private EmployeeLoginUrl: string = `${this.env.API_PATH}/EmployeeLogin`;
  constructor(private http: HttpClient) {
  }
  EmployeeLogin(employee_email: string, employee_password: string) {
    return this.http.post(this.EmployeeLoginUrl,
      { employee_email: employee_email, employee_password: employee_password });
  }

}
