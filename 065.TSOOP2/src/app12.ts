// 12. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая: controller -> service -> repository, где:
// Задание:
// Необходимо вывести в консоль массив из репозитория

interface iServerFetAll {
    controller(): number[];
    service(): number[];
    repository(): number[];
}

class ServerGetAll implements iServerFetAll {
    controller(): number[] {
        return this.service()
    };
    service(): number[] {
        return this.repository()
    };
    repository(): number[] {
        const arr = [1, 2, 3];
        return arr
    };
}

const serverGetAll = new ServerGetAll();
console.log(serverGetAll.controller());