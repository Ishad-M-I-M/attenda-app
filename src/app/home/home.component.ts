import {Component} from '@angular/core';
import {NavigationComponent} from "../navigation/navigation.component";
import {Router} from "@angular/router";

import Chart from 'chart.js/auto';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Class} from "../interfaces";

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

    selectedDate: String | null = null;
    as: any;

    constructor(private router: Router) {
    }

    selectedClass: Class | null = null;

    classes: Class[] = [];

    ngOnInit() {
        // TODO: Fetch from the end points
        this.classes = [
            {id: 1, grade: 1, medium: 'Sinhala', gender: null, teacher: 'Mr. Perera', totalStudents: 50},
            {id: 2, grade: 1, medium: 'Tamil', gender: null, teacher: 'Ms. Nirmala', totalStudents: 40},
            {id: 10, grade: 10, medium: 'Sinhala', gender: 'Boys', teacher: 'Mr. Perera', totalStudents: 30},
        ];
        this.selectedDate = new Date().toISOString().split('T')[0]; // Set to today's date in YYYY-MM-DD format

        let data = {
            labels: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8',
                'Grade 9', 'Grade 10', 'Grade 11'],
            datasets: [
                {
                    label: 'Total',
                    data: [40, 38, 36, 61, 50, 25, 26, 30, 29, 15, 21],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                },
                {
                    label: 'Present',
                    data: [38, 38, 30, 40, 25, 20, 20, 26, 27, 15, 18],
                    fill: false,
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                }
            ]
        }

        this.renderChart(data, this.calculateTotal(data), this.calculatePresent(data))
    }

    private calculateTotal(data: any): number {
        return data.datasets[0].data.reduce((sum: number, current: number) => sum + current, 0);
    }

    private calculatePresent(data: any): number {
        return data.datasets[1].data.reduce((sum: number, current: number) => sum + current, 0);
    }

    renderChart(data: any, total: number, present: number) {
        const canvas = document.getElementById('attendance-summary') as HTMLCanvasElement | null;
        if (this.chartInstance) {
            this.chartInstance.destroy(); // Destroy previous instance if it exists
        }

        this.total = total;
        this.present = present;


        if (canvas) {
            this.chartInstance = new Chart(canvas, {
                type: 'line',
                data: data,
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
}
