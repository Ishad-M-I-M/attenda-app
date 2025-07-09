import {Component} from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-mark-attendance',
    standalone: true,
    imports: [
        PageContainerComponent
    ],
    templateUrl: './mark-attendance.component.html',
    styleUrl: './mark-attendance.component.css'
})
export class MarkAttendanceComponent {

    classId: string | null = null;
    date: string | null = null;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            console.log('Route parameters:', params);
            this.classId = params['class-id']?? null;
            this.date = params['date']?? null;
            console.log(this.classId);
            console.log(this.date);
        })
    }
}
