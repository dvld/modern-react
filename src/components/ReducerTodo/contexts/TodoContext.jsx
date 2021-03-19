import React, { createContext } from 'react';

import TodoReducer from '../reducers/TodoReducer';

import { useLocalStorageReducer } from '../../../hooks/useLocalStorageReducer';

const defaultTodos = [
  { id: 1, task: 'Mow lawn', completed: false },
  { id: 2, task: 'Release Lady Bugs', completed: true },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useLocalStorageReducer(
    'todos',
    defaultTodos,
    TodoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};
