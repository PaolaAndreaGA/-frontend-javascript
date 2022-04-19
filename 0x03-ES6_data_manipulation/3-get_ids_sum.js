export default function getStudentIdsSum(students) {
  if (Object.getPrototypeOf(students) === Array.prototype) {
    const ids = students.map((item) => item.id);
    const reduc = (acumula, newValue) => acumula + newValue;
    return ids.reduce(reduc);
  }
  return [];
}
