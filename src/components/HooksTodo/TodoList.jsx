import React from 'react';
import { Paper, List, Divider } from '@material-ui/core';

import Todo from './Todo';

const TodoList = ({
  todos,
  removeTodo,
  toggleTodo,
  editTodo,
}) => {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment>
              <Todo
                key={todo.id}
                {...todo}
                {...{ removeTodo }}
                {...{ toggleTodo }}
                {...{ editTodo }}
              />
              {i < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
