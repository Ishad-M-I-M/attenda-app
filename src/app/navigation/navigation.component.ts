import {Component} from '@angular/core';
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

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

    constructor(private router: Router) {}

    toggleMenu() {
        this.open = !this.open;
    }

    navigate(path: string) {
        this.router.navigate([path]).then(r => {
            console.log('Navigation successful:', r);
        }).catch(error => {
            console.error('Navigation error:', error);
        });
    }

}
