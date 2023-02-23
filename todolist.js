var ToDo = /** @class */ (function () {
    function ToDo(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = false;
    }
    ToDo.prototype.completeTask = function () {
        this.isComplete = true;
    };
    return ToDo;
}());
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.todos = [];
    }
    ToDoList.prototype.addTask = function (todo) {
        this.todos.push(todo);
        console.log("New task added: ".concat(todo.title));
    };
    ToDoList.prototype.listAllTasks = function () {
        this.todos.forEach(function (todo) {
            console.log("Title: ".concat(todo.title, ", Description: ").concat(todo.description, ", Due Date: ").concat(todo.dueDate, ", Priority: ").concat(todo.priority, ", Status: ").concat(todo.isComplete ? "Complete" : "Incomplete"));
        });
    };
    ToDoList.prototype.listCompletedTasks = function () {
        var completedTasks = this.todos.filter(function (todo) { return todo.isComplete; });
        completedTasks.forEach(function (todo) {
            console.log("Title: ".concat(todo.title, ", Description: ").concat(todo.description, ", Due Date: ").concat(todo.dueDate, ", Priority: ").concat(todo.priority, ", Status: Complete"));
        });
    };
    return ToDoList;
}());
var todo1 = new ToDo("Hoàn thành dự án", "Hoàn thành dự án và nộp trước thời hạn", "2023-02-28", "High");
var todo2 = new ToDo("Mua hàng tạp hóa", "Mua sữa, bánh mì và trứng từ cửa hàng tạp hóa", "2023-02-24", "Medium");
var todoList = new ToDoList();
todoList.addTask(todo1);
todoList.addTask(todo2);
todoList.listAllTasks();
todo1.completeTask();
todoList.listCompletedTasks();
