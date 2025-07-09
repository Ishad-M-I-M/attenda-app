import {Component, OnInit} from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";
import {Class} from "../interfaces";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
    selector: 'app-classes',
    standalone: true,
    imports: [
        PageContainerComponent,
        NgForOf,
        NgIf
    ],
    templateUrl: './classes.component.html',
    styleUrl: './classes.component.css'
})
export class ClassesComponent implements OnInit {
    classes: Class[] = [];

    // TODO: Remove after implementing actual data fetching
    exampleClasses: Class[] = [
        {id: 1, grade: 1, medium: 'Sinhala', gender: 'Male', teacher: 'Mr. Perera', totalStudents: 25},
        {id: 2, grade: 2, medium: 'Tamil', gender: null, teacher: 'Ms. Nirmala', totalStudents: 32},
        {id: 3, grade: 3, medium: 'Sinhala', gender: 'Female', teacher: 'Mrs. Silva', totalStudents: 28},
        {id: 4, grade: 4, medium: 'Tamil', gender: null, teacher: 'Mr. Kumar', totalStudents: 35},
        {id: 5, grade: 5, medium: 'Sinhala', gender: 'Male', teacher: 'Mr. Fernando', totalStudents: 30},
        {id: 6, grade: 6, medium: 'Tamil', gender: null, teacher: 'Ms. Devi', totalStudents: 27},
        {id: 7, grade: 7, medium: 'Sinhala', gender: 'Female', teacher: 'Mrs. Jayasinghe', totalStudents: 33},
        {id: 8, grade: 8, medium: 'Tamil', gender: null, teacher: 'Mr. Raj', totalStudents: 29},
        {id: 9, grade: 9, medium: 'Sinhala', gender: 'Male', teacher: 'Mr. Wijesinghe', totalStudents: 31},
        {id: 10, grade: 10, medium: 'Tamil', gender: null, teacher: 'Ms. Anjali', totalStudents: 26},
        {id: 11, grade: 11, medium: 'Sinhala', gender: 'Female', teacher: 'Mrs. Rathnayake', totalStudents: 34}
    ];

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.classes = this.exampleClasses;
    }

    navigate(path: string) {
        this.router.navigate([path]).then(r => {
            console.log('Navigation successful:', r);
        }).catch(error => {
            console.error('Navigation error:', error);
        });
    }
}
