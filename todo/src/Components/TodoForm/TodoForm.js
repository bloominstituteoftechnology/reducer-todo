import React from 'react';
import { useForm } from '../../hooks/useForm';
import '../../App.css'

const initialValues = {
  todo: ''
};

const TodoForm = props => {
  const {
    handleAddTodo,
    clearCompletedItems
  } = props;

  const [values, handleChange] = useForm(initialValues);

  const handleSubmit = e => {
    handleAddTodo(e, values.todo);
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'>
          <input
            type='text'
            name='todo'
            id='todo'
            value={values.todo}
            onChange={handleChange}
          />
        </label>
        <button
          type='submit'
        >
          Add Item
                </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            clearCompletedItems();
          }}
        >
          Clear Completed
                </button>
      </form>
    </div>
  );
};

export default TodoForm;