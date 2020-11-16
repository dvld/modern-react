import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid/dist/v4';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

import useTodoState from '../../hooks/useTodoState';

const HooksTodo = () => {
  const initialTodos = [
    { id: uuid(), task: 'Pet Dog', completed: false },
  ];

  const {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
  } = useTodoState(initialTodos);

  return (
    <React.Fragment>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: '100vh',
          backgroundColor: '#fafafa',
        }}
        elevation={0}
      >
        <AppBar
          color='primary'
          position='static'
          style={{ height: '64px' }}
        >
          <Toolbar>
            <Typography color='inherit'>
              Todos With Hooks
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid
          container
          justify='center'
          style={{ marginTop: '1rem' }}
        >
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm {...{ addTodo }} />
            <TodoList
              {...{ todos }}
              {...{ removeTodo }}
              {...{ toggleTodo }}
              {...{ editTodo }}
            />
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default HooksTodo;
