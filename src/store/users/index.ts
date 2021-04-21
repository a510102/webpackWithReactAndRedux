import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: 'idle',
    user: [],
  },
  reducers: {
    userLoading: (state, action) => {
      if(state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    userReceived: (state, action) => {
      if(state.loading === 'pending') {
        state.loading = 'idle';
        state.user = action.payload;
      }
    }
  }
});

export const { userLoading, userReceived } = userSlice.actions;

const fetchUser = () => async (dispatch) => {
  dispatch(userLoading())
  const response = await userApi.fetchAll();
  dispatch(userReceived(response.data))
}