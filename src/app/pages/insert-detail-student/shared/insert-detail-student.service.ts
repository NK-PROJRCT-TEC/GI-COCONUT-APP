import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InsertDetailStudentService {
  private env = environment;
  private InsertStudentInfoUrl: string = `${this.env.API_PATH}/InsertStudentInfo`;
  private InsertParentInfoUrl: string = `${this.env.API_PATH}/InsertParentInfo`;
  private InsertRelationshipInfoUrl: string = `${this.env.API_PATH}/InsertRelationshipInfo`;
  private InsertbehaviorInfoUrl: string = `${this.env.API_PATH}/InsertbehaviorInfo`;
  private InsertSubjectInfoUrl: string = `${this.env.API_PATH}/InsertSubjectInfo`;
  private InserPhotoandLocationInfoUrl: string = `${this.env.API_PATH}/InserPhotoandLocationInfo`;
  constructor(private http: HttpClient) {
  }
  InsertStudentInfo(student_prefix: string, student_firstname: string, student_surname: string, student_grade: string, student_id_card: string, student_nickname: string, student_residence: string, student_room: any, student_road: any, student_moo: any, student_tambon: any, student_district: any, student_province: string, student_province_post: any, generate: string) {
    return this.http.put(this.InsertStudentInfoUrl,
      { student_prefix: student_prefix, student_firstname: student_firstname, student_surname: student_surname, student_grade: student_grade, student_id_card: student_id_card, student_nickname: student_nickname, student_residence: student_residence, student_room: student_room, student_road: student_road, student_moo: student_moo, student_tambon: student_tambon, student_district: student_district, student_province: student_province, student_province_post: student_province_post, generate: generate });
  }
  InsertParentInfo(have_parent: string, parent_with_student: string, parent_prefix: string, parent_name: string, parent_surname: string, parent_relationship: string, parent_work: string, generate: string) {
    return this.http.put(this.InsertParentInfoUrl,
      { have_parent: have_parent, parent_with_student: parent_with_student, parent_prefix: parent_prefix, parent_name: parent_name, parent_surname: parent_surname, parent_relationship: parent_relationship, parent_work: parent_work, generate: generate });
  }
  InsertRelationshipInfo(students_receive_expenses: string, want_schools_to_help_students: string, caring_for_students: string, generate: string) {
    return this.http.put(this.InsertRelationshipInfoUrl,
      { students_receive_expenses: students_receive_expenses, want_schools_to_help_students: want_schools_to_help_students, caring_for_students: caring_for_students, generate: generate });
  }
  InsertbehaviorInfo(health: string, welfare_or_safety: string, travel_time_hr: string, travel_time_min: string, student_travel_to_school: string, housing_conditions: string, student_responsibility: string, hobby: string, drug_use_behavior: string, violent_behavior: string, sexual_behavior: string, generate: string) {
    return this.http.put(this.InsertbehaviorInfoUrl,
      { health: health, welfare_or_safety: welfare_or_safety, travel_time_hr: travel_time_hr, travel_time_min: travel_time_min, student_travel_to_school: student_travel_to_school, housing_conditions: housing_conditions, student_responsibility: student_responsibility, hobby: hobby, drug_use_behavior: drug_use_behavior, violent_behavior: violent_behavior, sexual_behavior: sexual_behavior, generate: generate });
  }
  InserSubjectInfo(mathematics: string, thai_language: string, science: string, english_language: string, student_behavior: string, generate: any) {
    return this.http.put(this.InsertSubjectInfoUrl,
      { mathematics: mathematics, thai_language: thai_language, science: science, english_language: english_language, student_behavior: student_behavior, generate: generate });
  }
  InserPhotoandLocationInfo(img1: string, img2: string, img3: string, lat: string, lng: string, generate: string) {
    return this.http.put(this.InserPhotoandLocationInfoUrl,
      { img1: img1, img2: img2, img3: img3, lat: lat, lng: lng, generate: generate });
  }



}
