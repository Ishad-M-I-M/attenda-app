import {Component, OnInit} from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {TeachersService} from "../services/teachers.service";
import {Teacher} from "../interfaces";
import {ToastrService} from "ngx-toastr";
import {ClassesService} from "../services/classes.service";

@Component({
  selector: 'app-register-class',
  standalone: true,
    imports: [
        PageContainerComponent,
        FormsModule,
        NgForOf
    ],
  templateUrl: './register-class.component.html',
  styleUrl: './register-class.component.css'
})
export class RegisterClassComponent implements OnInit {
    selectedGrade: number | null = null;
    selectedMedium: string | null = null;
    selectedGender: string | null = null;
    selectedTeacher: string | null = null;
    description: string = '';

    grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    teachers: {id:number, name:string}[] = [];

    constructor(private teachersService: TeachersService,
                private classesService: ClassesService,
                private toastr: ToastrService) {}

    ngOnInit(): void {
        this.teachersService.getAllTeachers().subscribe({
            next: data => {
                console.log('Teachers fetched successfully:', data);
                this.teachers = (data as Teacher[]).map(teacher => ({
                    id: teacher.ID,
                    name: teacher.name
                }));
            },
            error: error => {
                console.error('Error fetching teachers:', error);
                this.toastr.error('Failed to fetch teachers. Please try again later.');
            }
        })
    }

    registerClass(form: any) {
        console.log(form.value);
        if (form.invalid) {
            return;
        }
        const classData = {
            name: form.value.name,
            teacher_id: form.value.teacher? parseInt(form.value.teacher, 10) : null,
            description: form.value.description,
        }
        this.classesService.createClass(classData).subscribe({
            next: value => {
                console.log('Class registered successfully:', value);
                this.toastr.success('Class registered successfully');
                form.resetForm();
            },
            error: error => {
                console.error('Error registering class:', error);
                this.toastr.error('Failed to register class. Please try again later.');
            }
        })
    }
}
