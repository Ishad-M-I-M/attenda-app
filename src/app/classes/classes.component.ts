import {Component, OnInit} from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";
import {Class} from "../interfaces";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {ClassesService} from "../services/classes.service";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-classes',
    standalone: true,
    imports: [
        PageContainerComponent,
        NgForOf,
    ],
    templateUrl: './classes.component.html',
    styleUrl: './classes.component.css'
})
export class ClassesComponent implements OnInit {
    classes: Class[] = [];

    constructor(private router: Router,
                private classService: ClassesService,
                private toastr: ToastrService) {
    }

    ngOnInit(): void {
        this.classService.getClasses().subscribe({
            next: data => {
                console.log('Classes fetched successfully:', data);
                this.classes = data as Class[];
            },
            error: error => {
                console.error('Error fetching classes:', error);
                this.toastr.error('Failed to fetch classes. Please try again later.');
            }
        })
    }

    navigate(path: string) {
        this.router.navigate([path]).then(r => {
            console.log('Navigation successful:', r);
        }).catch(error => {
            console.error('Navigation error:', error);
        });
    }
}
