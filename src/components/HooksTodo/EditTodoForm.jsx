import React from 'react';
import { TextField } from '@material-ui/core';

import useInputState from '../../hooks/useInputState';

const EditTodoForm = ({ id, task, editTodo, toggle }) => {
  const [value, onChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
      }}
      style={{
        marginLeft: '1rem',
        width: '100%',
      }}
    >
      <TextField
        {...{ value }}
        {...{ onChange }}
        margin='normal'
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
