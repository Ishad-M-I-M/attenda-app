export interface Student {
    id: number;
    name: string;
    grade: number;
    medium: string;
    gender: string;
}

export interface Teacher {
    ID: number;
    name: string;
    gender: string;
    mobile: string;
}

export interface Class {
    ID: number;
    name: string;
    description: string;
    teacher_id: number;
    teacher: Teacher;
}

export interface ClassAttendanceResponse {
    class_id: number;
    class_name: string;
    students: {
        student_id: number;
        student_name: string;
        present: boolean;
    }[];
    date: Date;
}

export interface AttendanceSummaryResponse {
    total: number;
    present: number;
    date: Date;
    classes: {
        class: string;
        total: number;
        present: number;
    }[];
}
