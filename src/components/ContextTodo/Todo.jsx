import React, { useContext } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import EditTodoForm from './EditTodoForm';

import useToggle from '../../hooks/useToggle';

import { TodosContext } from './contexts/TodoContext';

const Todo = ({ id, task, completed }) => {
  const { removeTodo, toggleTodo } = useContext(TodosContext);
  const [isEditing, toggle] = useToggle(false);
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm {...{ id }} {...{ task }} {...{ toggle }} />
      ) : (
        <React.Fragment>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{
              textDecoration: completed ? 'line-through' : 'none',
            }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </React.Fragment>
      )}
    </ListItem>
  );
};

export default Todo;
