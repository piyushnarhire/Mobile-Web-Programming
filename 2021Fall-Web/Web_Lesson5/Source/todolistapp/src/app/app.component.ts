import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//  declare todo list
todos = [];
// to add task to the table data
  addTodo(newTodolabel)
  {
    const newTodo = {
      label: newTodolabel,
      status: 'pending'
    };
    this.todos.push(newTodo);
  }
  // to delete task from table data
  deleteTodo(todo)
  {
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }

  changeStatus(todoKey)
  {
    if (this.todos[todoKey].status === 'pending')
    {
      this.todos[todoKey].status = 'completed';
    }
    else {
      this.todos[todoKey].status = 'pending';
    }
  }


}
