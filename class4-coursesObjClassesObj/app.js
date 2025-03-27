
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
    this.name = name
    this.classes = classes || []
    this.modules = modules || []
    this.comments = comments || []
    this.rate = rate 
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

// Clases comunes (algunas repetidas entre cursos)
const introProgrammingClass = new Class({ 
  name: 'Introducción a la Programación', 
  profesor: 'Carlos Pérez' });

  const oopClass = new Class({ 
  name: 'Programación Orientada a Objetos', 
  profesor: 'Laura Gómez' });

const jsBasicsClass = new Class({ name: 'JavaScript Básico', profesor: 'Miguel Soto' });
const advancedJsClass = new Class({ name: 'JavaScript Avanzado', profesor: 'Miguel Soto' });
const cssBasicsClass = new Class({ name: 'CSS desde cero', profesor: 'Andrea Díaz' });
const reactBasicsClass = new Class({ name: 'Introducción a React', profesor: 'Sofía Martínez' });
const flutterBasicsClass = new Class({ name: 'Introducción a Flutter', profesor: 'Pedro Rivas' });
const databasesClass = new Class({ name: 'Bases de Datos', profesor: 'Ricardo Morales' });
const webPerformanceClass = new Class({ name: 'Optimización de Web', profesor: 'Lucía Torres' });

// Cursos (algunos cursos con clases repetidas)
const programmingFundamentals = new Course({
  name: 'Fundamentos de Programación',
  classes: [introProgrammingClass, oopClass, jsBasicsClass, advancedJsClass, cssBasicsClass, databasesClass],
  rate: 5
});

const frontendBasics = new Course({
  name: 'Frontend desde Cero',
  classes: [introProgrammingClass, jsBasicsClass, cssBasicsClass, reactBasicsClass, webPerformanceClass, advancedJsClass],
  rate: 4.7
});

const mobileDevelopment = new Course({
  name: 'Desarrollo de Apps Móviles',
  classes: [introProgrammingClass, flutterBasicsClass, reactBasicsClass, oopClass, jsBasicsClass, databasesClass],
  rate: 4.8
});

const advancedFrontend = new Course({
  name: 'Frontend Avanzado',
  classes: [advancedJsClass, webPerformanceClass, reactBasicsClass, cssBasicsClass, databasesClass, jsBasicsClass],
  rate: 4.9
});

const reactCourse = new Course({
  name: 'Curso Completo de React',
  classes: [reactBasicsClass, advancedJsClass, jsBasicsClass, cssBasicsClass, webPerformanceClass, oopClass],
  rate: 5
});

// Learning Paths (algunas rutas con cursos repetidos)
const webDevelopmentPath = new LearningPaths({
  name: 'Ruta Desarrollo Web',
  courses: [programmingFundamentals, frontendBasics, advancedFrontend]
});

const mobileDevelopmentPath = new LearningPaths({
  name: 'Ruta Desarrollo Móvil',
  courses: [programmingFundamentals, mobileDevelopment, reactCourse]
});

const frontendProfessionalPath = new LearningPaths({
  name: 'Ruta Frontend Profesional',
  courses: [frontendBasics, advancedFrontend, reactCourse]
});

// Estudiante usando las rutas
const anthony = new Student({
  name: 'Anthony Arellano',
  username: 'aceAnthony',
  points: 1200,
  learningPaths: [webDevelopmentPath, mobileDevelopmentPath, frontendProfessionalPath]
});

// Puedes probar imprimiendo la estructura completa:
// Learning Paths
const webDevelopmentPath2 = new LearningPaths({
  name: "Web Development Master Path",
  courses: []
});

const dataScientistPath = new LearningPaths({
  name: "Data Science Professional Path",
  courses: []
});

const cybersecurityPath = new LearningPaths({
  name: "Cybersecurity Expert Path",
  courses: []
});

// Reusable Classes
const introToProgrammingClass = new Class({
  name: "Introduction to Programming",
  comments: ["Great for beginners!", "Clear explanations"],
  questions: ["What is a variable?", "How do loops work?"],
  resources: ["Cheat sheet", "Sample code repository"]
});

const gitBasicsClass = new Class({
  name: "Git Version Control Basics",
  comments: ["Essential for developers", "Practical examples"],
  questions: ["What is a commit?", "How to merge branches?"],
  resources: ["Git cheat sheet", "Online repository"]
});

const htmlFundamentalsClass = new Class({
  name: "HTML Fundamentals",
  comments: ["Solid foundation", "Easy to understand"],
  questions: ["What are semantic tags?", "How to structure a webpage?"],
  resources: ["MDN Web Docs", "HTML5 Reference"]
});

const cssStylesClass = new Class({
  name: "CSS Styling Techniques",
  comments: ["Beautiful designs start here", "Responsive design tips"],
  questions: ["What is flexbox?", "How to create responsive layouts?"],
  resources: ["CSS Grid Guide", "Flexbox Tutorial"]
});

const javascriptBasicsClass = new Class({
  name: "JavaScript Basics",
  comments: ["Interactive web programming", "Fun exercises"],
  questions: ["What are closures?", "How do promises work?"],
  resources: ["ES6 Cheat Sheet", "Async Programming Guide"]
});

const networkSecurityClass = new Class({
  name: "Network Security Fundamentals",
  comments: ["Critical for cybersecurity", "Real-world scenarios"],
  questions: ["What is a firewall?", "How to detect intrusions?"],
  resources: ["Security Protocols Guide", "Threat Analysis Handbook"]
});

// Courses
const webDevelopmentFoundationsCourse = new Course({
  name: "Web Development Foundations",
  classes: [
    introToProgrammingClass, 
    gitBasicsClass, 
    htmlFundamentalsClass, 
    cssStylesClass, 
    javascriptBasicsClass,
    networkSecurityClass
  ],
  comments: ["Comprehensive web dev course", "Great for beginners"]
});

const frontendMasteryCourse = new Course({
  name: "Frontend Mastery",
  classes: [
    htmlFundamentalsClass, 
    cssStylesClass, 
    javascriptBasicsClass, 
    gitBasicsClass,
    new Class({
      name: "Advanced CSS Layouts",
      comments: ["Responsive design deep dive"]
    }),
    new Class({
      name: "Modern JavaScript Frameworks",
      comments: ["React, Vue, and Angular basics"]
    })
  ],
  comments: ["Take your frontend skills to the next level"]
});

const pythonDataScienceCourse = new Course({
  name: "Python for Data Science",
  classes: [
    introToProgrammingClass,
    new Class({
      name: "Python Fundamentals",
      comments: ["From basics to advanced concepts"]
    }),
    new Class({
      name: "Data Analysis with Pandas",
      comments: ["Powerful data manipulation"]
    }),
    new Class({
      name: "Machine Learning Basics",
      comments: ["Introduction to ML algorithms"]
    }),
    new Class({
      name: "Data Visualization",
      comments: ["Create insightful graphics"]
    }),
    networkSecurityClass
  ],
  comments: ["Comprehensive data science journey"]
});

// Populating Learning Paths
webDevelopmentPath2.courses = [
  webDevelopmentFoundationsCourse, 
  frontendMasteryCourse, 
  pythonDataScienceCourse
];

dataScientistPath.courses = [
  pythonDataScienceCourse,
  new Course({
    name: "Advanced Statistics",
    classes: [
      new Class({
        name: "Statistical Inference",
        comments: ["Deep dive into statistical methods"]
      }),
      new Class({
        name: "Experimental Design",
        comments: ["Design and analyze experiments"]
      })
    ]
  }),
  webDevelopmentFoundationsCourse
];

cybersecurityPath.courses = [
  new Course({
    name: "Cybersecurity Foundations",
    classes: [
      networkSecurityClass,
      new Class({
        name: "Ethical Hacking Basics",
        comments: ["Learn to think like a hacker"]
      }),
      new Class({
        name: "Cryptography Fundamentals",
        comments: ["Secure communication techniques"]
      })
    ]
  }),
  pythonDataScienceCourse,
  frontendMasteryCourse
];

console.log("Learning Paths, Courses, and Classes created successfully!");
