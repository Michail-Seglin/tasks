//7. Реализуйте класс ServerDelete. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:на вход подается JSON вида:
// `{ "id": 1}`
// Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
// проверки
class ServerDelete {

    middleware(data) {

    }

    controller(data) {
        try {

            const ser = this.service(data);
            return ser
        } catch (er) {
            er.message
        }
    }

    service(data) {
        const rep = this.repository(data);
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
        
    }
}

const data = JSON.parse(`{ "id": 1}`);
const serverDelete = ServerDelete();
