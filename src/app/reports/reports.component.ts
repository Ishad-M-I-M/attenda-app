import { Component } from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";

@Component({
  selector: 'app-reports',
  standalone: true,
    imports: [
        PageContainerComponent
    ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

}
