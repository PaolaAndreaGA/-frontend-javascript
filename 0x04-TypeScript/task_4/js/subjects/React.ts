/// <reference path="Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class React extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for React';
    }
    getAvailableTeacher() {
      if (this.teacher.experienceTeachingC === 0) {
        return 'No available teacher'
      }
      return 'Available Teacher: <${this.teacher.firsName}>';
    }
  }
}
