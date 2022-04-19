export default function getListStudents(students) {
  if (Array.isArray(students)) {
    return students.map((item) => item.id);
  }
  return [];
}
