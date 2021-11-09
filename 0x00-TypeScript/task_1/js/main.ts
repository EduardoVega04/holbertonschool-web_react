interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number
    location: string;
    [property: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
  
console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
};

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("Eduardo", "Vega"));

interface Student {
    firstName: string;
    lastName: string;
}
  
interface studentMethods {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements Student, studentMethods {
    firstName: string;
    lastName: string;

    constructor(student_name: Student) {
        this.firstName = student_name.firstName;
        this.lastName = student_name.lastName;
    }

    workOnHomework() {
        return "Currently working";
    }

    displayName() {
        return this.firstName;
    }
}

let new_student = new StudentClass({firstName: "Eduardo", lastName: "Vega"});
console.log(new_student.workOnHomework(), new_student.displayName());
