export default class HolbertonCourse {
    constructor(name, length, students) {
	// Type validations
	if (Object.getPrototypeOf(name) !== String.prototype) throw TypeError('name must be String');
	if (Object.getPrototypeOf(length) !== Number.prototype) throw TypeError('length must be Number');
	if (Object.getPrototypeOf(students) !== Array.prototype) throw TypeError('students must be an Array');

	students.forEach((student) => {
	    if (Object.getPrototypeOf(student) !== String.prototype) throw TypeError('student must be an Array');
	});

	// create attributes
	this._name = name;
	this._length = length;
	this._students = students;
    }
    //getters
    get name() {
	return this._name;
    }

    get length() {
	return this._length;
    }

    get students() {
	return this_students;
    }

    
    //setters
    set name(myName) {
	if (Object.getPrototypeOf(myName) !== String.prototype) throw TypeError('name must be String');
	this._name = myName;
    }
    
    set length(myLength) {
	if (Object.getPrototypeOf(myLength) !== Number.prototype) throw TypeError('length must be Number');
	this._length = myLength;
    }
    set students(myStudents) {
	if (Object.getPrototypeOf(myStudents) !== Array.prototype) throw TypeError('students must be an Array');
	students.forEach((student) => {
	    if (Object.getPrototypeOf(myStudent) !== String.prototype) throw TypeError('student must be an Array');
	});
	this._students = students;
    }
}
