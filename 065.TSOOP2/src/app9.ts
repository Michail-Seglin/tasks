// 9. Создать интерфейс iValidation. Создайте класс Validation с приватными методами
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
// Validation. Конструктор принимает поля email, date, path и инициализирует их как
// поля класса. В каждом методе напишите соответствующую проверку

interface iValidation {
    email: string;
    date: string;
    path: string;
}

class Validation implements iValidation {
    email: string;
    date: string;
    path: string;

    constructor(email: string, date: string, path: string) {
        this.email = email;
        this.date = date;
        this.path = path;

        this.isValidEmail();
        this.isValidDate();
        this.isValidPath();
    }

    private isValidEmail(): void {
        /^[a-zA-Z0-9\_\-] +@[a-z]{2,10}.[a-z]{2,10}$/gm.test(this.email) ? console.log('ok') : console.log('no ok');

    };
    private isValidDate(): void {
        /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/gm.test(this.date) ? console.log('ok') : console.log('no ok');
    };
    private isValidPath(): void {
        /^[A-Z]{1}\:\\\\[a-zA-Z0-9\\а-яА-Я \.]+\.[a-z]{2-4}$/gm.test(this.path) ? console.log('ok') : console.log('no ok');

    };
}

const validation = new Validation(`misha_gt@mail.ru`, `09/02/1996`, `C:\\Users\\Dev\\OneDrive\\Рабочий стол\\daily\\Templates\\05typescript\\app.js`);
