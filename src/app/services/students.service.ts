import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Student} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private url: string = environment.apiUrl + 'students/';

  constructor(private http: HttpClient) { }

  getStudents(name:string | null, grade: number | null, gender: string | null, medium: string | null) {
    let queryParams: string[] = [];
    if (name) {
        queryParams.push(`name=${encodeURIComponent(name)}`);
    }
    if (grade) {
      queryParams.push(`grade=${grade}`);
    }
    if (gender) {
        queryParams.push(`gender=${gender}`);
    }
    if (medium) {
        queryParams.push(`medium=${medium}`);
    }
    const queryString = queryParams.length > 0 ? '?' + queryParams.join('&') : '';
    return this.http.get(this.url + queryString, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
  }

  createStudent(data: Student) {
    return this.http.post(this.url, data)
  }
}
