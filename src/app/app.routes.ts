import { Routes } from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RegisterStudentComponent} from "./register-student/register-student.component";
import {MarkAttendanceComponent} from "./mark-attendance/mark-attendance.component";
import {RegisterClassComponent} from "../register-class/register-class.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'mark-attendance',
        component: MarkAttendanceComponent
    },
    {
        path: 'register-student',
        component: RegisterStudentComponent
    },
    {
        path: 'register-class',
        component: RegisterClassComponent
    }
];
