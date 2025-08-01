import {Component} from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {Student} from "../interfaces";
import {StudentsService} from "../services/students.service";
import {ToastrService} from "ngx-toastr";

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

    constructor(private router: Router,
                private studentsService: StudentsService,
                private toastr: ToastrService) {}


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
        this.studentsService.getStudents(null, this.selectedGrade, this.selectedGender, this.selectedMedium).subscribe(
            {
                next: result => {
                    console.log('Students fetched successfully:', result);
                    this.students = result as Student[];
                    if (this.students.length === 0) {
                        this.toastr.info("No students found with the selected filters.");
                    }
                },
                error: error => {
                    console.error('Error fetching students:', error);
                    this.students = [];
                    this.toastr.error("Failed to fetch students. Please try again later.");
                }
            }
        );
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

        this.studentsService.getStudents(this.searchName, null, null, null).subscribe(
            {
                next: result => {
                    console.log('Students fetched successfully:', result);
                    this.students = result as Student[];
                    if (this.students.length === 0) {
                        this.toastr.info("No students found with the given name.");
                    }
                },
                error: error => {
                    console.error('Error fetching students:', error);
                    this.students = [];
                    this.toastr.error("Failed to fetch students. Please try again later.");
                }
            }
        )
    }


    navigate(path: string) {
        this.router.navigate([path]).then(r => {
            console.log('Navigation successful:', r);
        }).catch(error => {
            console.error('Navigation error:', error);
        });
    }
}
