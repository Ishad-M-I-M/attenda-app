import {Component} from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

interface Student {
    id: number;
    name: string;
    grade: number;
    medium: string;
    gender: string;
}

@Component({
    selector: 'app-students',
    standalone: true,
    imports: [
        PageContainerComponent,
        NgForOf,
        FormsModule,
        NgIf
    ],
    templateUrl: './students.component.html',
    styleUrl: './students.component.css'
})
export class StudentsComponent {
    grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    filterText = "Filter options";

    searchName: string = "";

    selectedGrade: number | null = null;
    selectedGender: string | null = null;
    selectedMedium: string | null = null;

    showContent: boolean = false;
    students: Student[] = [];

    constructor(private router: Router) {}

    // TODO: Remove after implementing actual data fetching
    exampleStudents: Student[] = [
        { id: 1, name: 'John Doe', grade: 10, medium: 'Sinhala', gender: 'Male' },
        { id: 2, name: 'Jane Smith', grade: 8, medium: 'Tamil', gender: 'Female' },
        { id: 3, name: 'Michael Johnson', grade: 11, medium: 'Sinhala', gender: 'Male' },
        { id: 4, name: 'Emily Davis', grade: 7, medium: 'Tamil', gender: 'Female' },
        { id: 5, name: 'Chris Brown', grade: 9, medium: 'Sinhala', gender: 'Male' },
        { id: 6, name: 'Sophia Wilson', grade: 6, medium: 'Tamil', gender: 'Female' },
        { id: 7, name: 'Daniel Lee', grade: 5, medium: 'Sinhala', gender: 'Male' },
        { id: 8, name: 'Olivia Martin', grade: 4, medium: 'Tamil', gender: 'Female' },
        { id: 9, name: 'James Anderson', grade: 3, medium: 'Sinhala', gender: 'Male' },
        { id: 10, name: 'Isabella Thomas', grade: 2, medium: 'Tamil', gender: 'Female' },
        { id: 11, name: 'Ethan Harris', grade: 1, medium: 'Sinhala', gender: 'Male' },
        { id: 12, name: 'Mia Clark', grade: 11, medium: 'Tamil', gender: 'Female' },
        { id: 13, name: 'Alexander Lewis', grade: 10, medium: 'Sinhala', gender: 'Male' },
        { id: 14, name: 'Charlotte Walker', grade: 9, medium: 'Tamil', gender: 'Female' },
        { id: 15, name: 'Benjamin Hall', grade: 8, medium: 'Sinhala', gender: 'Male' },
        { id: 16, name: 'Amelia Allen', grade: 7, medium: 'Tamil', gender: 'Female' },
        { id: 17, name: 'Lucas Young', grade: 6, medium: 'Sinhala', gender: 'Male' },
        { id: 18, name: 'Harper King', grade: 5, medium: 'Tamil', gender: 'Female' },
        { id: 19, name: 'Henry Wright', grade: 4, medium: 'Sinhala', gender: 'Male' },
        { id: 20, name: 'Ella Scott', grade: 3, medium: 'Tamil', gender: 'Female' },
        { id: 21, name: 'Jack Green', grade: 2, medium: 'Sinhala', gender: 'Male' },
        { id: 22, name: 'Ava Adams', grade: 1, medium: 'Tamil', gender: 'Female' },
        { id: 23, name: 'William Baker', grade: 11, medium: 'Sinhala', gender: 'Male' },
        { id: 24, name: 'Sophia Nelson', grade: 10, medium: 'Tamil', gender: 'Female' },
        { id: 25, name: 'James Carter', grade: 9, medium: 'Sinhala', gender: 'Male' }
    ];

    filter() {
        // @ts-ignore
        document.getElementById("accordion").click()
        let text = ""
        if (this.selectedGrade) {
            text += `Grade: ${this.selectedGrade}, `;
        }
        if (this.selectedGender) {
            text += `Gender: ${this.selectedGender}, `;
        }
        if (this.selectedMedium) {
            text += `Medium: ${this.selectedMedium}, `;
        }

        if (text.length > 0) {
            text = text.slice(0, -2); // Remove the last comma and space
            this.showContent = true;
        } else {
            text = "Filter options";
        }

        this.filterText = text;

        //TODO: Replace with actual data fetching logic based on filters
        this.students = this.exampleStudents;
    }

    clearFilters() {
        this.selectedGrade = null;
        this.selectedGender = null;
        this.selectedMedium = null;
        this.filterText = "Filter options";

        // @ts-ignore
        document.getElementById("accordion").click();
        this.showContent = false;
    }

    search() {
        if (this.searchName.trim() === "") {
            this.students = [];
            this.showContent = false;
            return;
        }

        this.showContent = true;

        // TODO: Replace with actual data fetching logic based on search
        this.students = this.exampleStudents.filter(student =>
            student.name.toLowerCase().includes(this.searchName.toLowerCase())
        );
    }


    navigate(path: string) {
        this.router.navigate([path]).then(r => {
            console.log('Navigation successful:', r);
        }).catch(error => {
            console.error('Navigation error:', error);
        });
    }
}
