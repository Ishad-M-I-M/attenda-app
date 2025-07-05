import {Component, OnInit} from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

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
    teachers: string[] = [];

    ngOnInit(): void {
        this.teachers = ['John Doe', 'Jane Smith', 'Emily Johnson', 'Michael Brown'];
    }
}
