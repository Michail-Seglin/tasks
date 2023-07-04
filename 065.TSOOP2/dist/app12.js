// 12. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая: controller -> service -> repository, где:
// Задание:
// Необходимо вывести в консоль массив из репозитория
class ServerGetAll {
    controller() {
        return this.service();
    }
    ;
    service() {
        return this.repository();
    }
    ;
    repository() {
        const arr = [1, 2, 3];
        return arr;
    }
    ;
}
const serverGetAll = new ServerGetAll();
console.log(serverGetAll.controller());
