// 4. Реализуйте класс ServerById. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": 1
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки
class ServerById {
    middleware(obj) {
        if (!obj.hasOwnProperty('id')) throw new Error('Нет поля id')
        if (isNaN(obj.id)) throw new Error("Ошибка")
    }

    controller(obj) {
        try {
            this.middleware(obj)
            const ser = this.service(obj);
            return ser
        } catch (er) {
            return er.message
        }
    }

    service(obj) {
        const rep = this.repository(obj);
        return rep
    }

    repository(obj) {
        const arr = [
            { "id": 1, "name": "Yesenia", "age": 22 },
            { "id": 2, "name": "Hanna", "age": 22 },
            { "id": 3, "name": "Stanislau", "age": 25 },
            { "id": 4, "name": "German", "age": 18 },
            { "id": 5, "name": "Maria", "age": 27 }
        ]
        const filtered = arr.filter((el) => el.id === obj.id)
        return filtered
    }

}

const obj = JSON.parse(`{"id": 1}`)

const serverById = new ServerById();
const res = serverById.controller(obj);
console.log(res);
