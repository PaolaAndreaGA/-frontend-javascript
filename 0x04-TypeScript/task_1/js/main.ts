interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName : string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'Juan',
  lastName: 'Duarte',
  location: 'Mississauga',
  fullTimeEmployee: false,
  numberOfReports: 15,
};
console.log(director1);

function printTeacher(firstName: string, lastName:string): string {
  return `${firstName[0]}.${lastName}`;
}
console.log(printTeacher("John", "Doe"));
