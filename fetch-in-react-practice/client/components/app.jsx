import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(
        todos => {
          this.setState({
            todos: todos
          });
        }
      );
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            todos: this.state.todos.concat(data)
          });
        }
      );
  }

  toggleCompleted(todoId) {
    const todoList = this.state.todos;
    const todoIndex = todoList.findIndex(todo => todo.todoId === todoId);
    const currentStatus = todoList[todoIndex].isCompleted;
    const toggleCompleted = { isCompleted: !currentStatus };
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toggleCompleted)
    })
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            todos: this.state.todos.map(todo => todo.todoId !== todoList[todoIndex].todoId ? todo : data)
          });
        }
      );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
