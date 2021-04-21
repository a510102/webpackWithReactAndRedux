import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import counterReducer from './counter/counterSlice';
import todoListReducer from './todoList';

export const store = configureStore({
  reducer: {
    // posts: postReducer,
    // comments: commentsReducer,
    // users: userReducer,
    counter: counterReducer,
    todoList: todoListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
