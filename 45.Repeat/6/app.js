// 2. Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив) при условии, что email уникальный. Создать
// генерацию нового id. Обязательными функциями считаются функции middleware,
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении

class Server {
    middleware() {

    }

    controller(obj) {
        try {
            const con = this.service(obj);
            return con;
        } catch (er) {
            return er.message
        }
    }

    service(obj) {
        const ser = this.repository(obj);
        return ser;
    }

    repository(obj) {
        const arr = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
        ]
        const res = arr.filter((el) => {
            if (el.email === obj.email) {
                return true;
            }
        })
        if (res.length > 0) throw new Error('Есть совпадение')
        arr.push({ id: arr.length + 1, ...obj });
        return arr;
    }
}


class Client {

    isValid(inp1, inp2) {
        if (!/^[a-zA-Z0-9\_\.]+\@+[a-z]+\.+[a-z]+$/gm.test(inp1)) throw new Error('Недопустимя почта');
        if (inp2.length < 8) throw new Error('Пароль должен содержать не менее 8 символов')
    }
    sendRequest() {
        document.querySelector('button').addEventListener('click', () => {
            try {
                const inp1 = document.querySelector('.inp1');
                const inp2 = document.querySelector('.inp2');
                const div = document.querySelector('div');

                this.isValid(inp1.value, inp2.value);

                const server = new Server();
                const response = server.controller({ email: inp1.value , pwd : inp2.value});

                div.innerHTML = JSON.stringify(response);
            } catch (er) {
                alert(er.message)
            }
        })
    }
}

const client = new Client();
client.sendRequest();
