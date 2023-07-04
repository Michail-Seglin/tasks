// 7. Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.task = ['Погулять', 'Покушать'];
    }
    TodoList.prototype.addTask = function (newTask) { this.task.push(newTask); };
    ;
    TodoList.prototype.removeTask = function () { this.task.pop(); };
    ;
    TodoList.prototype.getTask = function () {
        return this.task;
    };
    ;
    return TodoList;
}());
var todoList = new TodoList();
todoList.addTask('Забронировать');
todoList.removeTask();
console.log(todoList.getTask());
