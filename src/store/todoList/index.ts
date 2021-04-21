import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

type TodoState = {
  useId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
}

interface TodoListState {
  todoList: TodoState[];
  isLoading: string;
}

const initialState: TodoListState = {
  todoList: [],
  isLoading: 'idle'
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    todoListLoading(state) {
      if (state.isLoading === 'idle') {
        state.isLoading = 'pending';
      }
    },
    todoListReceived(state, action) {
      if (state.isLoading === 'pending') {
        state.isLoading = 'idle';
        state.todoList = action.payload
      }
    },
    removeTodo: (state, action) => {
      const filterTodo = state.todoList.filter(
        (item) => item.id !== action.payload
      );
      state.todoList = filterTodo;
    }
  }
});

export const { todoListLoading, todoListReceived, removeTodo } = todoListSlice.actions;

export const selectTodoList = (state: RootState) => state.todoList.todoList;

export const selectIsLoading = (state: RootState) => state.todoList.isLoading;

export default todoListSlice.reducer;
