import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private url: string = environment.apiUrl + 'teachers/';

  constructor(private http: HttpClient) { }

  getAllTeachers() {
    return this.http.get(this.url);
  }
}
