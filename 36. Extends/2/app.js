// 2. Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте экземпляр класса Customer в простой программе

class Person {
    name;
    addres;
    phone;

    getName = () => { return this.name };
    getAddres = () => { return this.addres };
    getPhone = () => { return this.phone };

    setName = (name) =>
        this.name = name;

    setAddres = (addres) =>
        this.addres = addres;
    setPhone = (phone) =>
        this.phone = phone;



}
class Customer extends Person {
    phoneCustomer;
    bool;

    getPhoneCustomer = () => { return this.phoneCustomer };
    getBool = () => { return this.bool };

    setPhoneCustomer = (phoneCustomer) =>
        this.phoneCustomer = phoneCustomer;
    setBool = (bool) =>
        this.bool = bool;

}

const customer = new Customer();


customer.setName('Vasya Pupkin');
customer.setAddres('Minsk');
customer.setPhone('+375333333333');
customer.setBool(true);
customer.setPhoneCustomer(123);

const name = customer.getName();
const addres = customer.getAddres();
const phone = customer.getPhone();
const bool = customer.getBool();
const phoneCustomer = customer.getPhoneCustomer();
console.log(name, addres, phone, bool, phoneCustomer);