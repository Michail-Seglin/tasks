// 1. Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Создайте несколько экземпляров класса Student и
// выведите их свойства
var Student = /** @class */ (function () {
    function Student() {
        this.name = 'Misha';
        this.age = '26';
    }
    return Student;
}());
var student = new Student();
console.log(student.age, student.name);
