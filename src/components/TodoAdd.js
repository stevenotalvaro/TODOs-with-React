import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

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

    handleAddTodo(newTodo);
    reset();
  };
  return (
    <form className="border-2 border-gray-500 p-5" onSubmit={handleSubmit}>
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
  );
};
