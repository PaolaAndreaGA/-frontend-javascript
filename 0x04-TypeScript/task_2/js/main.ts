interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak():string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak():string;
  workDirectorTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getToWork(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(firstName: string, lastName: string, salary: number | string ): Director | Teacher {
  if(salary as number && salary < 500) {
    return new Teacher();
  }
  else {
    return new Director();
  }
}

console.log(createEmployee('Camilo ', 'Torres ', 200));
console.log(createEmployee('Simon ', 'Bolivar ', 1000));
console.log(createEmployee('Antonio ','Nariño ', '$500'));
