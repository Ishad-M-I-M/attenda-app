import { Component } from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";

@Component({
  selector: 'app-management',
  standalone: true,
    imports: [
        PageContainerComponent
    ],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent {

}
