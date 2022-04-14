export default class HolbertonCourse {
  constructor(name, length, students) {

    if (Object.getPrototypeOf(name) !== String.prototype) throw TypeError('Name must be a string');
    if (Object.getPrototypeOf(length) !== Number.prototype) throw TypeError('Length must be a number');
    if (Object.getPrototypeOf(students) !== Array.prototype) throw TypeError('Students mus be an array of Strings');

    students.forEach((student) => {
      if (Object.getPrototypeOf(student) !== String.prototype) throw TypeError('Student must be an Array of Strings');
    });


     this._name = name;
     this._length = length;
     this._students = students;
  }

  set name(myName) {
      if (Object.getPrototypeOf(myName) !== String.prototype) throw TypeError('Name must be a string');
      this._name = myName;
  }
    
  set length(myLength) {
      if (Object.getPrototypeOf(myLength) !== Number.prototype) throw TypeError('Length must be a number');
      this._length = myLength;
  }
  set students(myStudents) {
      if (Object.getPrototypeOf(myStudents) !== Array.prototype) throw TypeError('Students mus be an array of Strings');
      students.forEach((student) => {
	  if (Object.getPrototypeOf(myStudent) !== String.prototype) throw TypeError('Student must be an Array of Strings');
      });
      this._students = students;
  }
  get name() {
      return this._name;
  }

  get length() {
      return this._length;
  }

  get students() {
      return this_students;
  }
}
