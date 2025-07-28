import {Component} from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {ClassAttendanceResponse} from "../interfaces";
import {FormsModule} from "@angular/forms";
import {ClassesService} from "../services/classes.service";

@Component({
    selector: 'app-mark-attendance',
    standalone: true,
    imports: [
        PageContainerComponent,
        NgIf,
        FormsModule,
        NgForOf
    ],
    templateUrl: './mark-attendance.component.html',
    styleUrl: './mark-attendance.component.css'
})
export class MarkAttendanceComponent {

    classId: string | null = null;
    date: string | null = null;
    total: number = 0;
    present: number = 0;

    classAttendance: ClassAttendanceResponse | null = null;

    constructor(private route: ActivatedRoute, private router: Router, private classService: ClassesService) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.classId = params['class-id']?? null;
            this.date = params['date']?? null;

            if (this.classId == null || this.date == null) {
                console.error('class-id or date not found');
                return;
            }

            this.classService.getClassAttendances(this.classId, this.date).subscribe(classAttendances => {
                this.classAttendance = classAttendances as ClassAttendanceResponse;
            })

        })


    }

    navigate(path: string) {
        this.router.navigate([path]).then(r => {
            console.log('Navigation successful:', r);
        }).catch(error => {
            console.error('Navigation error:', error);
        });
    }

    submitAttendance() {}
}
