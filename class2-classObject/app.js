// - Crea una clase llamada Student2 y replica el comportamiento del prototipo Student.
// - Llama al método aporbarCurso() desde afuera de la función para verificar su funcionamiento.
class Student2 {
    constructor(name, age, courses) {
        this.name = name;
        this.age = age;
        this.courses = courses;
    }
    greet() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años`);
    }
}