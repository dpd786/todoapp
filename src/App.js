import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './addTodo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { id: 1, content: 'buy milk'},
        { id: 2, content: 'play mario'}
      ]
    };
  }

  deleteTodo = id => {
    const newTodo = this.state.todos.filter(todo => {
      return todo.id !== id;  
    })
    this.setState({
      todos: newTodo
    })
  }

  addTodo = todo => {
    todo.id = Math.random();
    const newList = [...this.state.todos, todo];
    this.setState({
      todos: newList
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
