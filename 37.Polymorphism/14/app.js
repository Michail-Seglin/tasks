// 14. Наследование. Работа с геттерами и сеттерами. Классы Person и Customer.
// Напишите класс Person с атрибутами данных для имени, фамилии. Затем напишите
// класс Customer, который является подклассом класса Person. Класс Customer
// должен иметь поле телефонного номера человека. Продемонстрируйте экземпляр
// класса Customer вызвав геттеры и сеттеры собственного класса и базового
class Person {
    name;
    surName;

    setName(name) { this.name = name }
    setSurName(surName) { this.surName = surName }

    getName() { return this.name }
    getSurname() { return this.surName }
}


class Customer extends Person {
    phone;

    setPhone(phone) { this.phone = phone }

    getPhone() { return this.phone }

    dataWorker() {
        return `${this.name} ${this.surName} ${this.phone}`
    }
}

const customer = new Customer();
customer.setName('Misha');
customer.setSurName('Braim');
customer.setPhone('+375291234567');

const workerName = customer.getName();
const workerSurname = customer.getSurname();
const workerPhone = customer.getPhone();

console.log(customer.dataWorker());