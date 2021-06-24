import React from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
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
        {index + 1}: {todo.desc}
      </p>
      <button
        onClick={() => handleDelete(todo.id)}
        className="px-5 py-4 rounded font-medium bg-red-500 text-white hover:bg-red-900 transition duration-250"
      >
        Delete
      </button>
    </li>
  );
};
