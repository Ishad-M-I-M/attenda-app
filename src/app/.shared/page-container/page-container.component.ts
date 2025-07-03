import {AfterContentInit, Component, ContentChild, Input, TemplateRef, ViewChild} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent {
  @Input("title")
  title!: string;

  navigate(number: number) {
    history.go(number);
  }
}
