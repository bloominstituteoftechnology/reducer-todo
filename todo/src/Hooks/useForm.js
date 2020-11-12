// Making the custom hook
import { useState } from 'react';

export const useForm = initialValues => {
  const [values, setTodo] = useState(initialValues);

  const handleChange = e => {
    setTodo(
      {
        todo: e.target.value
      }
    );
  };

  return [values, handleChange];
};