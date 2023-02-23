class ToDo {
    public title: string;
    public description: string;
    public dueDate: string;
    public priority: string;
    public isComplete: boolean;
  
    constructor(title: string, description: string, dueDate: string, priority: string) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.isComplete = false;
    }
  
    public completeTask(): void {
      this.isComplete = true;
    }
  }
  
  class ToDoList {
    private todos: ToDo[];
  
    constructor() {
      this.todos = [];
    }
  
    public addTask(todo: ToDo): void {
      this.todos.push(todo);
      console.log(`New task added: ${todo.title}`);
    }
  
    public listAllTasks(): void {
      this.todos.forEach((todo) => {
        console.log(`Title: ${todo.title}, Description: ${todo.description}, Due Date: ${todo.dueDate}, Priority: ${todo.priority}, Status: ${todo.isComplete ? "Complete" : "Incomplete"}`);
      });
    }
  
    public listCompletedTasks(): void {
      const completedTasks = this.todos.filter((todo) => todo.isComplete);
      completedTasks.forEach((todo) => {
        console.log(`Title: ${todo.title}, Description: ${todo.description}, Due Date: ${todo.dueDate}, Priority: ${todo.priority}, Status: Complete`);
      });
    }
  }
  
  const todo1 = new ToDo("Hoàn thành dự án", "Hoàn thành dự án và nộp trước thời hạn", "2023-02-28", "High");
  const todo2 = new ToDo("Mua hàng tạp hóa", "Mua sữa, bánh mì và trứng từ cửa hàng tạp hóa", "2023-02-24", "Medium");
  const todoList = new ToDoList();
  
  todoList.addTask(todo1);
  todoList.addTask(todo2);
  todoList.listAllTasks();

  todo1.completeTask();
  todoList.listCompletedTasks();
  