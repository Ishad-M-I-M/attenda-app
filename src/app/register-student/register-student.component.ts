import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {PageContainerComponent} from "../.shared/page-container/page-container.component";

@Component({
    selector: 'app-register-student',
    standalone: true,
    imports: [
        NgForOf,
        PageContainerComponent
    ],
    templateUrl: './register-student.component.html',
    styleUrl: './register-student.component.css'
})
export class RegisterStudentComponent {
    grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
}
