import React, { createContext } from 'react';

import useTodoState from '../../../hooks/useTodoState';

const defaultTodos = [
  { id: 1, task: 'Mow lawn', completed: false },
  { id: 2, task: 'Release Lady Bugs', completed: true },
];

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const todos = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todos}>{children}</TodosContext.Provider>
  );
};
