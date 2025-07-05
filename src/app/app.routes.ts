import { Routes } from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RegisterStudentComponent} from "./register-student/register-student.component";
import {MarkAttendanceComponent} from "./mark-attendance/mark-attendance.component";
import {RegisterClassComponent} from "./register-class/register-class.component";
import {ClassesComponent} from "./classes/classes.component";
import {StudentsComponent} from "./students/students.component";
import {ReportsComponent} from "./reports/reports.component";
import {ManagementComponent} from "./management/management.component";

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
    },
    {
        path: 'classes',
        component: ClassesComponent,
    },
    {
        path: 'classes/create',
        loadComponent: () => import('./register-class/register-class.component').then(m => m.RegisterClassComponent)
    },
    {
        path: 'students',
        component: StudentsComponent
    },
    {
        path: 'students/create',
        loadComponent: () => import('./register-student/register-student.component').then(m => m.RegisterStudentComponent)
    },
    {
        path: 'reports',
        component: ReportsComponent
    },
    {
        path: 'management',
        component: ManagementComponent
    }
];
