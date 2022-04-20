export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Object.getPrototypeOf(students) !== Array.prototype){
    return [];
  }
  if (Object.getPrototypeOf(newGrades) !== Array.prototype){
    return [];
  }
  return students.filter((student) => student.location === city).map((student) => {
    const [newGrades] = newGrades.filter((item) => item.studId === student.id);
    return {...student, grade: newGrades ? newGrades.grade: 'N/A'};
  });
}
