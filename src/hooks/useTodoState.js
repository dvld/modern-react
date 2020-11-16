import useLocalStorage from './useLocalStorage';
import uuid from 'uuid/dist/v4';

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorage(
    'todos',
    initialTodos
  );

  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([
        ...todos,
        { id: uuid(), task: newTodoText, completed: false },
      ]);
    },
    removeTodo: (todoId) => {
      const updatedTodos = todos.filter(
        ({ id }) => id !== todoId
      );

      setTodos(updatedTodos);
    },
    toggleTodo: (todoId) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      );

      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId
          ? { ...todo, task: newTask }
          : todo
      );

      setTodos(updatedTodos);
    },
  };
};
