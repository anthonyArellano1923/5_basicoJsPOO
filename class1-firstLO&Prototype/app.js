// - Crea un html básico para usar la terminal de chrome. Mantén para todas las clases.
// - Crea un objeto vacío y observa el proto_. OK
// - Crea un objeto literal que represente un estudiante de platzi
//     - Nombre, edad, lista de cursos aprobados.
//     - Utiliza el método push() para inyectar un nuevo curso aprobado al objeto natalia. 
//     - Haz lo mismo pero en la consola del navegador. Cambia desde el navegador el nombre del objeto. Suma 1 a su edad. imprime en consola. OK
//     - Crea un método llamado aprobarCurso para inyectar un nuevo curso aprobado, que reciba como argumento un nuevo curso aprobado.
// - Crea un prototipo Student. Define los parámetros edad, nombre y cursos aprobados. Añade un método de saludo. OK
//     - En el inspector, crea una nueva instancia del prototipo Student, pasándole los argumentos correspondientes. OK
//     - Añade una función aporbarCurso(nuevoCurso) al proto_ de Student.
//     - Ejecuta dicha función en el inspector.

//Creando un objeto literal.

// const student = {
//     name: 'Natalia',
//     age: 25,
//     courses: ['Curso 1', 'Curso 2', 'Curso 3']
// }

// student.courses.push('Curso 4');

//Creando un prototipo

function Student(name, age, courses) {
    this.name = name;
    this.age = age;
    this.courses = courses;
    this.greet = function() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años`);
    }
}