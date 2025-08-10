import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PageContainerComponent} from "../.shared/page-container/page-container.component";
import {StudentsService} from "../services/students.service";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-register-student',
    standalone: true,
    imports: [
        NgForOf,
        PageContainerComponent,
        FormsModule,
        NgIf
    ],
    templateUrl: './register-student.component.html',
    styleUrl: './register-student.component.css'
})
export class RegisterStudentComponent {
    grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    constructor(private studentService: StudentsService, private toastr: ToastrService) {
    }

    registerStudent(form: any) {
        if (form.invalid) {
            return;
        }
        const studentData = {
            ... form.value,
            grade: form.value.grade ? parseInt(form.value.grade, 10) : null,
        }
        this.studentService.createStudent(studentData).subscribe({
            next: value => {
                console.log('Student registered successfully:', value);
                this.toastr.success('Student registered successfully');
                form.resetForm();
            },
            error: error => {
                console.error('Error registering student:', error);
                this.toastr.error('Failed to register student. Please try again later.');
            }
        })
    }
}
