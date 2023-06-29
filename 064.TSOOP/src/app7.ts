// 7. Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций

interface iTodoList {
    task: string[];
    addTask(newTask: string): void;
    removeTask(): void;
    getTask(): string[];
}

class TodoList {
    public task: string[] = ['Погулять', 'Покушать'];

    addTask(newTask: string) { this.task.push(newTask) };

    removeTask() { this.task.pop() };

    getTask() {
        return this.task;
    };
}

const todoList: iTodoList = new TodoList();
todoList.addTask('Забронировать');
todoList.removeTask();
console.log(todoList.getTask());


