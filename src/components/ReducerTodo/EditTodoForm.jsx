import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';

import useInputState from '../../hooks/useInputState';

import { DispatchContext } from './contexts/TodoContext';

const EditTodoForm = ({ id, task, toggle }) => {
  const dispatch = useContext(DispatchContext);
  const [value, onChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'EDIT', id, task: value });
        reset();
        toggle();
      }}
      style={{
        marginLeft: '1rem',
        width: '100%',
      }}
    >
      <TextField {...{ value }} {...{ onChange }} margin='normal' autoFocus />
    </form>
  );
};

export default EditTodoForm;
