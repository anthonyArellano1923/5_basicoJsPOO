// - Crea un objeto literal, llamado juan, con los parámetros: name, username, points, social media( X, Facebook, Instagram), cursos aprobados (lista de cursos), learningPaths (array de objetos). Cada ruta es un objeto que tiene los parámetros: nombre de ruta y cursos de esa ruta.
//     - Crea otro objeto literal con sus propios atributos.
// - Ahora, crea una clase que en su constructor reciba un objeto con todos los parámetros de los objetos anteriores. A los atributos opcionales asignales undefined.
//     - Para las RRSS, crea un atributo interno de la clase que sea un objeto cuyos parámetros sean cada una de las redes.

const juan = {
  name: "Juan Pérez",
  username: "juanp_dev",
  points: 1200,
  socialMedia: {
    x: "@juanpx",
    facebook: "juan.perez.fb",
    instagram: "@juan.ig"
  },
  approvedCourses: [
    "Curso Básico de JavaScript",
    "Curso de Frontend Developer",
    "Curso Práctico de HTML y CSS"
  ],
  learningPaths: [
    {
      name: "Desarrollo Web",
      courses: [
        "Curso de HTML y CSS",
        "Curso de JavaScript",
        "Curso de Responsive Design"
      ]
    },
    {
      name: "Data Science",
      courses: [
        "Curso de Introducción a la Ciencia de Datos",
        "Curso de Python para Ciencia de Datos"
      ]
    }
  ]
};


const maria = {
  name: "María López",
  username: "marialopez92",
  points: 950,
  socialMedia: {
    x: "@marialx",
    facebook: "maria.lopez.fb",
    instagram: "@maria.ig"
  },
  approvedCourses: [
    "Curso Básico de Programación",
    "Curso de Fundamentos de Ingeniería de Software"
  ],
  learningPaths: [
    {
      name: "Ingeniería de Software",
      courses: [
        "Curso de Fundamentos de Ingeniería de Software",
        "Curso de UML y Diagramación"
      ]
    },
    {
      name: "Backend con Node.js",
      courses: [
        "Curso de Node.js",
        "Curso de APIs con Express"
      ]
    }
  ]
};

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

class LearningPaths {
  constructor({
    name,
    courses,
    proffesor,
    rate
  }) {
    this.name = name
    this.courses = courses || []
    this.proffesor = proffesor
    this.rate = rate
  }
}

const desarrolloWeb = new LearningPaths({
  name: 'Desarrollo Web',
  courses : [
    'React.js',
    'Curso Básico de HTML y CSS'
  ],
  proffesor : 'Diana Calzadilla',
  rate : 10
})

const finanzas = new LearningPaths({
  name: 'Finanzas',
  courses : [
    'Curso de finanzas personales.',
    'Introducción a la bolsa de valores.'
  ],
  proffesor : 'Frey Charles',
  rate : 12
})

const patricia = new Student({
  name: 'Patricia Lópz',
  x : '@patricialx',
  username: 'patricialopez',
  points: 500,
  approvedCourses: [
    'Curso de Introducción a la Programación',
    'Curso de Programación Orientada a Objetos'
  ]
})

const miguel = new Student({
  name: 'Miguel López',
  username: 'miguellopez',
  points: 700,
  facebook: 'miguel.lopez.fb',
  learningPaths: [
    {
      name: 'Desarrollo Web',
      courses: [
        'Curso de HTML y CSS',
        'Curso de JavaScript'
      ]
    },
    {
      name: 'Desarrollo Móvil',
      courses: [
        'Curso de React Native',
        'Curso de Flutter'
      ]
    }
  ]
})

