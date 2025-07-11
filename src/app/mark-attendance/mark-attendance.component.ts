import {Component} from '@angular/core';
import {PageContainerComponent} from "../.shared/page-container/page-container.component";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {AttendanceRecord, Class} from "../interfaces";
import {FormsModule} from "@angular/forms";

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

    class: Class | null = null;
    attendanceRecords: AttendanceRecord[] = [];

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            console.log('Route parameters:', params);
            this.classId = params['class-id']?? null;
            this.date = params['date']?? null;
            console.log(this.classId);
            console.log(this.date);
        })

        this.class = {
            id: 1,
            grade: 1,
            medium: 'Sinhala',
            gender: null,
            teacher: 'Mr. Perera',
            totalStudents: 50
        }

        this.attendanceRecords = [
            {studentId: 1, studentName: 'Jhon Doe', attended: true},
            {studentId: 2, studentName: 'Jane Smith', attended: false},
            {studentId: 3, studentName: 'Emily Johnson', attended: true},
            {studentId: 4, studentName: 'Michael Brown', attended: true},
            {studentId: 5, studentName: 'Sarah Davis', attended: false},
            {studentId: 6, studentName: 'David Wilson', attended: true},
            {studentId: 7, studentName: 'Laura Garcia', attended: true},
            {studentId: 8, studentName: 'James Martinez', attended: false},
            {studentId: 9, studentName: 'Linda Rodriguez', attended: true},
            {studentId: 10, studentName: 'Robert Lee', attended: true},
            {studentId: 11, studentName: 'Patricia Taylor', attended: false},
            {studentId: 12, studentName: 'Michael Anderson', attended: true},
            {studentId: 13, studentName: 'Jennifer Thomas', attended: true},
            {studentId: 14, studentName: 'William Jackson', attended: false},
            {studentId: 15, studentName: 'Elizabeth White', attended: true},
            {studentId: 16, studentName: 'Charles Harris', attended: true},
            {studentId: 17, studentName: 'Jessica Clark', attended: false},
            {studentId: 18, studentName: 'Daniel Lewis', attended: true},
            {studentId: 19, studentName: 'Sarah Walker', attended: true},
            {studentId: 20, studentName: 'Matthew Hall', attended: false},
            {studentId: 21, studentName: 'Nancy Allen', attended: true},
            {studentId: 22, studentName: 'Christopher Young', attended: true},
            {studentId: 23, studentName: 'Karen King', attended: false},
            {studentId: 24, studentName: 'George Wright', attended: true},
            {studentId: 25, studentName: 'Susan Scott', attended: true}
        ]

        this.total = this.class.totalStudents;
        this.present = this.attendanceRecords.filter(record => record.attended).length;
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
