interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: 'Matias',
  lastName: 'Correa',
  age: 13,
  location: 'Mosquera',
}

const secondStudent: Student = {
  firstName: 'Daniel',
  lastName: 'Garzon',
  age: 14,
  location: 'Bogota',
}

const studentsList: Array<Student> = [firstStudent, secondStudent]