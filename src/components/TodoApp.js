import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
const init = () => {
  return [
    {
      id: new Date().getTime(),
      description: '',
      done: false,
    },
  ];
};
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  return (
    <div>
      <h1 className="text-5xl pb-4 border-b-2 border-gray-300">
        TODO Aplication
      </h1>
      <h2 className="text-3xl mt-2">Number of TODOs</h2>
      <div className="flex">
        <div className="w-1/2">
          <ul>
            <p></p>
          </ul>
        </div>
        <div className="w-1/3 border-2 border-gray-500 p-5">
          <h1 className="pb-2 border-b-2 border-gray-300 text-4xl mb-3">
            Add TODO
          </h1>
          <input
            placeholder="Add New TODO"
            className="mt-5 w-full h-10 border-2 border-gray-700 rounded text-center "
          />
          <button className="w-full mt-5 px-6 py-3 rounded font-medium bg-blue-500 text-white hover:bg-white hover:text-blue-500 border-2 border-blue-500 transition duration-250	">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
