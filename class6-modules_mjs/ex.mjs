class Course {
  constructor({
    name,
    classes = [],
  }) {
    this._name = name;
    this._classes = classes;
  }

  get name() {
    // Tu código aquí 👈
    return this._name 
  }

  set name(nuevoNombrecito) {
    // Tu código aquí 👈
    if (typeof nuevoNombrecito === "string") {
      const newName = nuevoNombrecito.split('')
      newName[0] = newName[0].toUpperCase()
      for (let i = 0; i < newName.length; i++) {
        if (newName[i - 1] === " ") {
          newName[i] = newName[i].toUpperCase()
        }
      }
      this._name = newName.join('')
    }
  }
}

const courseName = "curso de programación básica"
const nombreMaysuculas = new Course({
    name: courseName,
})

