// 1. Классы Employee и ProductionWorker.
// Напишите класс Employee (Сотрудник), который содержит:
// • имя сотрудника;
// • номер сотрудника.
// Затем напишите класс ProductionWorker (Рабочий), который является подклассом
// класса Employee.
// Класс ProductionWorker содержит:
// • номер смены (целое число, к примеру, 1, 2 или 3);
// • ставка почасовой оплаты труда.
// Напишите методы получатели и методы-модификаторы для каждого класса.
// После того как эти классы будут написаны, напишите программу, которая создает
// объект класса ProductionWorker и предлагает пользователю ввести данные по
// каждому атрибуту данных этого объекта. Сохраните данные в объекте и
// примените в этом объекте методы получатели, чтобы получить эти данные и
// вывести их на экран. 

class Employee {
    nameOfEmployee;
    numberOfEmployee;
    getNameOfEmployee = () => {
        return this.nameOfEmployee
    }
    getNumberOfEmployee = () => {
        return this.numberOfEmployee
    }

    setNameOfEmployee = (nameOfEmployee) => {
        this.nameOfEmployee = nameOfEmployee;
    }

    setNumberOfEmployee = (numberOfEmployee) => {
        this.numberOfEmployee = numberOfEmployee;
    }
}
class ProductionWorker extends Employee {
    change;
    bid;
    getChange = () => {
        return this.change
    }
    getBid = () => {
        this.bid
    }

    setChange = (change) => {
        this.change = change;
    }

    setBid = (bid) => {
        this.bid = bid;
    }

}
const productionWorker = new ProductionWorker();

productionWorker.setNameOfEmployee(`Seglin Michail`);
productionWorker.setNumberOfEmployee(`123456`);

productionWorker.setChange(`1`);
productionWorker.setBid(`342`);

const nameWorker = productionWorker.getNameOfEmployee();

const number = productionWorker.getNumberOfEmployee();

const change = productionWorker.getChange();
const bid = productionWorker.getBid();

console.log(nameWorker, number, change, bid);