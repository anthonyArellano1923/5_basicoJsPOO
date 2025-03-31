// No usaremos módulos, retiramos todo lo relacionado. 
// Importante agregar a clase Course el atributo isFree, además, el atributo lenguaje (.lang)
// Crea subclases que extiendan de Student
//     FreeStudent
//         Añade un método que reciba como parámetro un newCourse, que verifique si es gratis. Si lo es, que sea añadido a la lista de cursos aprobados. Si no, que envíe un mensaje de advertencia en consola que indique que solo puede tomar cursos gratuitos.
//     BasicStudent
//         En este caso, crea un método que verifique con .lang si el curso es en inglés (course. lang = 'nombre del curso en inglés'). Si no lo es, añadir a lista de aprobados. Si lo es, enviar advertencia en consola que indique que el estudiante no puede tomar cursos en inglés.
//     ExpertStudent
//         Simplemente añade el curso a la lista aprovedCourses.
// Añade las instancias de los 3 tipos de estudiantes, 3 instancias de courses modificando las propiedades añadidas y validando el método creado para los distintos estudiantes.

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
    rate,
    isFree,
    lang
  }) {
    this._name = name
    this._classes = classes || []
    this._modules = modules || []
    this._comments = comments || []
    this._rate = rate || 0
    this._isFree = isFree || false
    this._lang = lang || 'spanish'
   }

   get isFree() { return this._isFree }
   set isFree(isFree) { this._isFree = isFree }

   get lang() { return this._lang }
   set lang(lang) { this._lang = lang }

   get name() { return this._name }
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

class FreeStudent extends Student {
  constructor(props) {
    super(props)
  }

  approveCourse(newCourse) {
    if(newCourse.isFree) {
      this.approvedCourses.push(newCourse)
      console.log(`${newCourse.name} añadido a lista de cursos satisfactoriamente.`)
    } else {
      console.warn(`${this.name} tiene una suscrpción gratuita, no puede tomar este curso.`)
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props)
  }

  approveCourse(newCourse) {
    if(newCourse.lang === 'spanish') {
      this.approvedCourses.push(newCourse)
      console.log(`${newCourse.name} añadido a lista de cursos satisfactoriamente.`)
    } else {
      console.warn(`${this.name} tiene una suscrpción basic, solo puede tomar cursos en español.`)
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props)
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse)
    console.log(`${newCourse.name} añadido a lista de cursos satisfactoriamente.`)
  }
}

const freeSpanishCourse = new Course({
  name: "Curso Gratis de HTML",
  isFree: true,
});

const paidSpanishCourse = new Course({
  name: "Curso Avanzado de CSS",
});

const paidEnglishCourse = new Course({
  name: "Advanced JavaScript Course",
  lang: "english"
});

const studentFree = new FreeStudent({
  name: "Ana",
  username: "ana_free",
  points: 100,
  approvedCourses: [],
  learningPaths: []
});

const studentBasic = new BasicStudent({
  name: "Luis",
  username: "luis_basic",
  points: 200,
  approvedCourses: [],
  learningPaths: []
});

const studentExpert = new ExpertStudent({
  name: "María",
  username: "maria_expert",
  points: 300,
  approvedCourses: [],
  learningPaths: []
});

function testMembership() {
  const coursesList = [freeSpanishCourse, paidSpanishCourse, paidEnglishCourse]
  const studentsList = [studentFree, studentBasic, studentExpert]

  coursesList.forEach( course => {
    studentsList.forEach( student => student.approveCourse(course))
  })
}

testMembership()