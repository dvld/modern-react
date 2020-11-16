import React from 'react';
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

const Todo = ({
  id,
  task,
  completed,
  removeTodo,
  toggleTodo,
  editTodo,
}) => {
  const [isEditing, toggle] = useToggle(false);
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm
          {...{ id }}
          {...{ editTodo }}
          {...{ task }}
          {...{ toggle }}
        />
      ) : (
        <React.Fragment>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{
              textDecoration: completed
                ? 'line-through'
                : 'none',
            }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label='Delete'
              onClick={() => removeTodo(id)}
            >
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
