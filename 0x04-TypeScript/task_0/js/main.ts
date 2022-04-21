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

const newTable = document.createElement('table');
const bodyTable = document.createElement('body');

studentsList.forEach((obj) => {
  const myrow = document.createElement('row');
  const cellstName = document.createElement('tfn');
  const cellLocation = document.createElement('tlc');
  cellstName.textContent = obj.firstName;
  cellLocation.textContent =obj.location;
  myrow.appendChild(cellstName);
  myrow.appendChild(cellLocation);
  bodyTable.appendChild(myrow);
});

newTable.appendChild(bodyTable);
document.body.appendChild(newTable);
