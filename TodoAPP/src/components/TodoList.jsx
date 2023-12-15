import React from 'react';
import { Todo } from './Todo';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  const completedTodos = todos.filter((todo) => todo.state);
  const incompleteTodos = todos.filter((todo) => !todo.state);

  const pendingTodos = incompleteTodos.sort((a, b) => (a.priority ? -1 : b.priority ? 1 : 0));

  return (
    <div className='mt-2'>
      <h1 className='text-center'>Lista de tareas</h1>
      <ul>
        {pendingTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))}
      </ul>
        <div className="completed-todos-container">

            <ul>
                {completedTodos.map((todo) => (
                    <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                    ))}
            </ul>
        </div>
    </div>
  );
};

export default TodoList;
