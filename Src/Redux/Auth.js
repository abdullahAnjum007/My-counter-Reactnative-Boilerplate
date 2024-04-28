import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  // other authentication-related state properties can be added here
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // add more reducers as needed for other authentication-related actions
  },
});

export const {setToken} = authSlice.actions;

export default authSlice.reducer;
