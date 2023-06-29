// 2. Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Инициализация свойств name, age происходит с
// помощью экземпляра класса. Создайте несколько экземпляров класса Student и
// выведите их свойства.

interface iStudent {
    name: string;
    age: string;
}

class Student2 {
    public name;
    public age;
}

const student2 = new Student2();
student2.age = '27';
student2.name = 'Misha';
console.log(student2.age, student2.name);
