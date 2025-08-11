import {Component} from '@angular/core';
import {NavigationComponent} from "../navigation/navigation.component";
import {Router} from "@angular/router";

import Chart from 'chart.js/auto';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {AttendanceSummaryResponse, Class} from "../interfaces";
import {ClassesService} from "../services/classes.service";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        NavigationComponent,
        FormsModule,
        NgForOf
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    private chartInstance: Chart | null = null;
    total: number = 0;
    present: number = 0;

    selectedDate: string | null = null;
    as: AttendanceSummaryResponse | null = null;

    constructor(private router: Router,
                private classService: ClassesService,
                private toastr: ToastrService) {
    }

    selectedClass: Class | null = null;

    classes: Class[] = [];

    ngOnInit() {
        this.classService.getClasses().subscribe({
            next: data => {
                console.log('Classes fetched successfully:', data);
                this.classes = data as Class[];
            },
            error: error => {
                console.error('Error fetching classes:', error);
            }
        })
        this.selectedDate = new Date().toISOString().split('T')[0]; // Set to today's date in YYYY-MM-DD format
        this.loadChart(this.selectedDate);
    }

    renderChart(data: AttendanceSummaryResponse) {
        const canvas = document.getElementById('attendance-summary') as HTMLCanvasElement | null;
        if (this.chartInstance) {
            this.chartInstance.destroy(); // Destroy previous instance if it exists
        }
        const labels = data.classes.map(c => c.class);
        const totalData = data.classes.map(c => c.total);
        const presentData = data.classes.map(c => c.present);

        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: 'Total',
                    data: totalData,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                },
                {
                    label: 'Present',
                    data: presentData,
                    fill: false,
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                }
            ]
        };

        if (canvas) {
            this.chartInstance = new Chart(canvas, {
                type: 'line',
                data: chartData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        } else {
            console.error('Element with ID "attendance-summary" not found.');
        }
    }

    navigate(path: string, params: {}) {
        this.router.navigate([path], {queryParams: params}).then(r => {
            console.log('Navigation successful:', r);
        }).catch(error => {
            console.error('Navigation error:', error);
        });
    }

    updateChart(dateInput: HTMLInputElement) {
        this.loadChart(dateInput.value)
    }

    loadChart(date: string) {
        this.classService.getAttendanceSummary(date).subscribe({
            next: data => {
                console.log('Attendance summary fetched successfully:', data);
                this.as = data as AttendanceSummaryResponse;
                this.total = this.as.total;
                this.present = this.as.present;
                this.renderChart(this.as);
            },
            error: error => {
                console.error('Error fetching attendance summary:', error);
                this.toastr.error("Failed to fetch attendance summary.");
            }
        });
    }
}
