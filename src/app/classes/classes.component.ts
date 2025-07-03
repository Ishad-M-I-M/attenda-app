import { Component } from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";
import {BlockButtonComponent} from "../.shared/block-button/block-button.component";

@Component({
  selector: 'app-classes',
  standalone: true,
    imports: [
        PageContainerComponent,
        BlockButtonComponent
    ],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {

}
