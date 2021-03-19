import React, { useContext } from 'react';
import { Paper, TextField } from '@material-ui/core';

import useInputState from '../../hooks/useInputState';

import { DispatchContext } from './contexts/TodoContext';

const TodoForm = () => {
  const [value, onChange, reset] = useInputState('');
  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(value);
          dispatch({ type: 'ADD', task: value });
          reset();
        }}
      >
        <TextField
          {...{ value }}
          {...{ onChange }}
          margin='normal'
          label='Add New Todo'
          fullWidth
        ></TextField>
      </form>
    </Paper>
  );
};

export default TodoForm;
