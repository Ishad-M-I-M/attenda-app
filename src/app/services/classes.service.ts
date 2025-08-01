import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";
import {ClassAttendanceResponse} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private url = environment.apiUrl + 'classes/';
  constructor(private http: HttpClient) { }

  getClasses() {
    return this.http.get(this.url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
  }

  getClassAttendances(classId: string, date: string) {
      return this.http.get(this.url + 'attendance', {
        params: {
            class_id: classId,
            date: date,
        }
      })
  }

  saveClassAttendance(data: ClassAttendanceResponse) {
      return this.http.post(this.url + 'attendance', data);
  }

  getAttendanceSummary(date: string) {
      return this.http.get(this.url + 'attendance/summary', {
          params: {
              date: date,
          }
      });
  }

}
