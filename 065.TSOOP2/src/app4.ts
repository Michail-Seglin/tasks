// 4. Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.

interface iAccount {
    deposit(money: number): void;
    withdraw(money: number): void;
    getBalance(): number;
}

class Account implements iAccount {
    private balance: number = 0;

    deposit(money: number): void {
        this.balance += money;
    }

    withdraw(money: number): void {
        if (this.balance > money) {
            this.balance -= money;
        }
    }

    getBalance(): number {
        return this.balance
    }
}

const account: iAccount = new Account();

account.deposit(12);
account.withdraw(5);
console.log(account.getBalance());




