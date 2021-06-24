import React, { useEffect, useReducer } from 'react';
import { useForm } from '../hooks/useForm';
import { todoReducer } from './todoReducer';
const init = () => {
  //   return [
  //     {
  //       id: new Date().getTime(),
  //       desc: 'Hola',
  //       done: false,
  //     },
  //   ];
  return JSON.parse(localStorage.getItem('todos'));
};
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = e => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

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

  console.log(todos);

  return (
    <div className="border-2 border-gray-400 p-4 height ">
      <h1 className="text-5xl pb-4 border-b-2 border-gray-300">
        TODO Aplication
      </h1>
      <h2 className="text-3xl mt-2">Number of TODOs {todos.length}</h2>
      <div className="flex justify-between">
        <div className="w-1/2">
          <ul>
            {todos.map((todo, i) => (
              <li
                className="py-1 my-2 flex justify-between border-t-2 border-b-2 border-b-gray-300 "
                key={todo.id}
              >
                <p
                  onClick={() => handleToggle(todo.id)}
                  className={`${
                    todo.done && 'complete bg-green-500 rounded p-1'
                  } my-auto `}
                >
                  {i + 1}: {todo.desc}
                </p>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="px-5 py-4 rounded font-medium bg-red-500 text-white hover:bg-red-900 transition duration-250"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/2 ml-5">
          <form
            className="border-2 border-gray-500 p-5"
            onSubmit={handleSubmit}
          >
            <h1 className="pb-2 border-b-2 border-gray-300 text-4xl mb-3">
              Add TODO
            </h1>
            <input
              type="text"
              placeholder="Add New TODO"
              name="description"
              autoComplete="off"
              className="mt-5 w-full h-10 border-2 border-gray-700 rounded text-center "
              onChange={handleInputChange}
              value={description}
            />
            <button
              type="submit"
              className="w-full mt-5 px-6 py-3 rounded font-medium bg-blue-500 text-white hover:bg-white hover:text-blue-500 border-2 border-blue-500 transition duration-250	"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
