export default function getStudentsByLocation(students, city) {
  if (Object.getPrototypeOf(students) === Array.prototype) {
    return students.filter((item) => item.location === city);
  }
  return [];
}
