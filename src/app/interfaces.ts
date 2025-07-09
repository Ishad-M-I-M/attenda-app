export interface Student {
    id: number;
    name: string;
    grade: number;
    medium: string;
    gender: string;
}

export interface Class {
    id: number;
    grade: number;
    medium: string;
    gender: string | null;
    teacher: string;
    totalStudents: number;
    students?: Student[]; // Optional property to hold students in the class
}
