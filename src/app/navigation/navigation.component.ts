import {Component} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css'
})
export class NavigationComponent {
    public open: boolean = false;

    toggleMenu() {
        this.open = !this.open;
    }
}
