// 4. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, surname происходит в getter, setter класса.
// Создайте несколько экземпляров класса Student и выведите их свойства.

interface iStudent {
    name: string;
    age: string;
    getName(): string;
    getAge(): string;
    setName(name: string): void;
    setAge(age: string): void;

}

class Student4 {
    public name: string;
    public age: string;

    getName(): string {
        return this.name
    }

    getAge(): string {
        return this.age
    }

    setName(name: string) {
        this.name = name;
    }

    setAge(age: string) {
        this.age = age;
    }
}

const student4: iStudent = new Student4();

student4.setName('Misha');
student4.setAge('27');

console.log(student4.getName(), student4.getAge());
