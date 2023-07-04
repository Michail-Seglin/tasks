// 4. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, surname происходит в getter, setter класса.
// Создайте несколько экземпляров класса Student и выведите их свойства.
var Student4 = /** @class */ (function () {
    function Student4() {
    }
    Student4.prototype.getName = function () {
        return this.name;
    };
    Student4.prototype.getAge = function () {
        return this.age;
    };
    Student4.prototype.setName = function (name) {
        this.name = name;
    };
    Student4.prototype.setAge = function (age) {
        this.age = age;
    };
    return Student4;
}());
var student4 = new Student4();
student4.setName('Misha');
student4.setAge('27');
console.log(student4.getName(), student4.getAge());
