// - Crea una nueva clase, Coments, que reciba los parámetros: contenido del curso(content), nombre del estudiante (studentName), rol del estudiante (studentRol) prestablecido en el valor 'estudiante'. Por último, una cantidad de likes (likes = 0)
// - Crea un método en la clase Coments, .publicar(),  para publicar un comentario con esta forma:
//     - StudentName (StudentRole) \n Likes: likesNumber \n Comment.
// - Crea un método en Students, publicarComentario(), que cree una nueva instancia de Coments, pasándole los parámetros correspndientes como coment y StudentName. Luego, que aplique el método .publicar() de esa clase.
// - Crea un nuevo objeto (TeacherStudent) que extienda del prototipo Student, con los mismos privilegios de un ExpertStudent. Pero en este caso, sobrescribiendo el método publicarComentario(), le enviaremos un tercer argumento, que es el studentRole = 'profesor'.
// - Creamos una instancia del objeto TeacherStudent con los datos de Freddy Vega, por ejemplo.
// - Prueba agregar un comentario con los distintos tipos de Student.

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
  publicarComentario(comment){
    const studentComment = new Comments({
      studentName : this.name,
      content : comment
  })
  studentComment.publicar()
  }
}

class Comments {
  constructor({content, studentName, studentRole}){
    this.content = content
    this.studentName = studentName
    this.studentRole = studentRole || 'estudiante'
    this.likes = 0
  }
  publicar() {
    console.log(`${this.studentName} (${this.studentRole})`)
    console.log(`Likes: ${this.likes}`)
    console.log(`Comentó: ${this.content}`)
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

class TeacherStudent extends Student {
  constructor(props) {
    super(props)
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse)
    console.log(`${newCourse.name} añadido a lista de cursos satisfactoriamente.`)
  }
  publicarComentario(comment){
    const studentComment = new Comments({
      studentName : this.name,
      studentRole : 'profesor',
      content : comment
  })
  studentComment.publicar()
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
})

const teacherStudent = new TeacherStudent({
  name: "Anthony Arellano",
  username: "anthony_teacher",
  points: 30000,
  approvedCourses: [],
  learningPaths: []
})


teacherStudent.publicarComentario('Falta contenido audiovisual.')
studentExpert.publicarComentario('Mucho texto.')
studentBasic.publicarComentario('Me gustó mucho.')
studentFree.publicarComentario('Encuentro entretenida la clase.')



