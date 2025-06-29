import { Component } from '@angular/core';
import {BlockButtonComponent} from "../.shared/block-button/block-button.component";
import {Router} from "@angular/router";
import {NavigationComponent} from "../navigation/navigation.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BlockButtonComponent,
    NavigationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {
  }

  navigate(path: string) {
    this.router.navigate([path]).then(r => {
    }).catch(error => {
        console.error('Navigation error:', error);
    });
  }
}
