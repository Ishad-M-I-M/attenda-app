import {Component, OnInit} from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";
import {BlockButtonComponent} from "../.shared/block-button/block-button.component";
import {Class} from "../interfaces";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-classes',
  standalone: true,
    imports: [
        PageContainerComponent,
        BlockButtonComponent,
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
        { id: 1, grade: 1, medium: 'Sinhala', gender: 'Male', teacher: 'Mr. Perera' },
        { id: 2, grade: 2, medium: 'Tamil', gender: null, teacher: 'Ms. Nirmala' },
        { id: 3, grade: 3, medium: 'Sinhala', gender: 'Female', teacher: 'Mrs. Silva' },
        { id: 4, grade: 4, medium: 'Tamil', gender: null, teacher: 'Mr. Kumar' },
        { id: 5, grade: 5, medium: 'Sinhala', gender: 'Male', teacher: 'Mr. Fernando' },
        { id: 6, grade: 6, medium: 'Tamil', gender: null, teacher: 'Ms. Devi' },
        { id: 7, grade: 7, medium: 'Sinhala', gender: 'Female', teacher: 'Mrs. Jayasinghe' },
        { id: 8, grade: 8, medium: 'Tamil', gender: null, teacher: 'Mr. Raj' },
        { id: 9, grade: 9, medium: 'Sinhala', gender: 'Male', teacher: 'Mr. Wijesinghe' },
        { id: 10, grade: 10, medium: 'Tamil', gender: null, teacher: 'Ms. Anjali' },
        { id: 11, grade: 11, medium: 'Sinhala', gender: 'Female', teacher: 'Mrs. Rathnayake' }
    ];

    constructor(private router: Router) {}

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
