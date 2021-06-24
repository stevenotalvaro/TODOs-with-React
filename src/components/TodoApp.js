import React, { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
const init = () => {
  return JSON.parse(localStorage.getItem('todos'));
};
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = valueId => {
    const action = {
      type: 'delete',
      payload: valueId,
    };

    dispatch(action);
  };

  const handleToggle = valueId => {
    const action = {
      type: 'toggle',
      payload: valueId,
    };

    dispatch(action);
  };

  const handleAddTodo = newTodo => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };
  let numtodos = todos.length;
  return (
    <div className="border-2 border-gray-400 p-4 height ">
      <h1 className="text-5xl pb-4 border-b-2 border-gray-300">
        TODO Aplication
      </h1>
      <h2 className="text-3xl mt-2">Number of TODOs {numtodos}</h2>
      <div className="flex justify-between">
        <div className="w-1/2">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className="w-1/2 ml-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
