
class Student {
  constructor({
    name,
    username,
    points,
    instagram = undefined,
    facebook = undefined,
    x = undefined,
    approvedCourses,
    learningPaths
  }) {
    this.name = name;
    this.username = username;
    this.points = points;
    this.socialMedia = {
      instagram,
      facebook,
      x
    };
    this.approvedCourses = approvedCourses || [];
    this.learningPaths = learningPaths || [];
  }
}

class Class { 
  constructor({
    name,
    comments,
    questions,
    resources,
    profesor
  }) {
    this.name = name
    this.comments = comments || []
    this.questions = questions || []
    this.resources = resources || []
    this.profesor = profesor 
   }
}

class Course {
  constructor({
    name,
    classes,
    modules,
    comments,
    rate
  }) {
    this._name = name
    this._classes = classes || []
    this._modules = modules || []
    this._comments = comments || []
    this._rate = rate 
   }

   get name() { return `El nombre de este curso es ${this._name}.`}
   set name(newName) {
    if(newName === 'Curso Malito de programación básica') {
      console.error("Can't use this name")
    } else {
      this._name = newName
    }
    return this._name
   }
}

class LearningPaths {
  constructor({
    name,
    courses
  }) {
    this.name = name
    this.courses = courses || []
  }
}


const cursoGratisProgramacionBasica = new Course({
  name : 'Curso de programación básica',
  rate : 10
})