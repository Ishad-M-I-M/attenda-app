import { Component } from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";

@Component({
  selector: 'app-students',
  standalone: true,
    imports: [
        PageContainerComponent
    ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

}
