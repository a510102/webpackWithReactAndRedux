import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks'
import { selectTodoList, selectIsLoading, todoListLoading, todoListReceived, removeTodo } from '../../store/todoList';

const TodoList = () => {
  const todoList = useAppSelector(selectTodoList);
  const isLoading = useAppSelector(selectIsLoading)
  const dispatch = useAppDispatch();

  const fetchTodoList = async () => {
    dispatch(todoListLoading())
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    if (response.ok) {
      const data = await response.json();
      dispatch(todoListReceived(data))
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <div>
      <h3>TodoList</h3>
      {isLoading === 'pending' ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {todoList.map((item) => (
            <li key={item.id} onClick={() =>dispatch(removeTodo(item.id))}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
