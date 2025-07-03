import {Component} from '@angular/core';
import {BlockButtonComponent} from "../.shared/block-button/block-button.component";
import {Router} from "@angular/router";
import {NavigationComponent} from "../navigation/navigation.component";

import Chart from 'chart.js/auto';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        BlockButtonComponent,
        NavigationComponent,
        FormsModule
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    private chartInstance: Chart | null = null;
    summary_selection = "all"
    total: string | number = "N/A"
    present: string | number = "N/A"

    constructor() {
    }

    attendance_summary = {
        all:
            {
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
            },
        girls: {
            labels: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8',
                'Grade 9', 'Grade 10', 'Grade 11'],
            datasets: [
                {
                    label: 'Total',
                    data: [20, 19, 18, 30, 50, 25, 26, 30, 29, 15, 21],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                },
                {
                    label: 'Present',
                    data: [19, 19, 16, 15, 25, 20, 20, 26, 27, 15, 18],
                    fill: false,
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                }
            ]
        },
        boys: {
            labels: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8',
                'Grade 9', 'Grade 10', 'Grade 11'],
            datasets: [
                {
                    label: 'Total',
                    data: [20, 19, 18, 30, 50, 25, 26, 30, 29, 15, 21],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                },
                {
                    label: 'Present',
                    data: [10, 19, 16, 15, 25, 20, 20, 26, 27, 15, 18],
                    fill: false,
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                }
            ]
        }
    }

    ngOnInit() {
        this.renderChart()
    }

    onSummarySelectionChange() {
        this.renderChart()
    }

    renderChart() {
        let data = this.attendance_summary.all;
        if (this.summary_selection == "girls") {
            data = this.attendance_summary.girls
        } else if (this.summary_selection == "boys") {
            data = this.attendance_summary.boys
        }

        this.total = data.datasets[0].data.reduce((a, b) => a + b, 0);
        this.present = data.datasets[1].data.reduce((a, b) => a + b, 0);

        if (this.chartInstance) {
            this.chartInstance.destroy();
        }

        const canvas = document.getElementById('attendance-summary') as HTMLCanvasElement | null;
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
}
