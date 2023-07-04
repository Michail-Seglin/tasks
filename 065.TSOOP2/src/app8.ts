// 8. Создайте класс PasswordGenerator, который будет иметь метод generatePassword,
// позволяющий генерировать случайные безопасные пароли заданной длины.
// Метод generatePassword принимает в качестве параметра длину пароля.
// Использовать Generics

class PasswordGenerator {
    generatePassword<Mytypee>(pwdLength: Mytypee) {
        if (typeof pwdLength === 'number') {
            const symbols: string = 'qwertyuiopasdfghjklzxcvbnm,./1234567890-=!@#$%^&&*()_+=';
            let password: string = '';
            for (let i = 0; i < pwdLength; i++) {
                password += symbols[Math.round(Math.random() * symbols.length)];
            }
            return password
        }
    }
}

const passwordGenerator = new PasswordGenerator();
console.log(passwordGenerator.generatePassword<number>(30));
