// 6. Реализуйте класс ServerPut. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": 1, "name": "Test", "age": 1
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки
class ServerPut {
    middleware(data) {
        if (!data.hasOwnProperty('name') || !data.hasOwnProperty('age')) throw new Error('Неккоректыне входные данные');
        if (!isNaN(data.name)) throw new Error('неккоректные name');
        if (isNaN(data.age)) throw new Error('неккоректные age');
    }

    controller(data) {
        try {
            this.middleware(data)
            const ser = this.service(data)
            return ser
        } catch (er) {
            return er.message
        }
    }

    service(data) {
        const rep = this.repository(data)

        return rep
    }

    repository(data) {
        const arr = [
            { "id": 1, "name": "Yesenia", "age": 22 },
            { "id": 2, "name": "Hanna", "age": 22 },
            { "id": 3, "name": "Stanislau", "age": 25 },
            { "id": 4, "name": "German", "age": 18 },
            { "id": 5, "name": "Maria", "age": 27 }
        ]
        const filtered = arr.filter(el => el.id !== data.id);
        if (arr.length === filtered.length) throw new Error('id нету');
        filtered.push(data);
        return filtered
    }
}

const data = JSON.parse(`{"id": 1, "name": "Test", "age": 1}`);
const serverPut = new ServerPut();
const response = serverPut.controller(data);
console.log(response);