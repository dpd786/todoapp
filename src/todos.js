import React from 'react';
import './todos.css';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span className="item" onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">No todos left</p>
    );
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;