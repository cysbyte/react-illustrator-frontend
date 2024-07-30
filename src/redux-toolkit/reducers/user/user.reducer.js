import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const initialState = {
  token: '',
  profile: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: {
      addUser: (state, action) => {
        const { token, profile } = action.payload;
        state.token = token;
        state.profile = profile;
      },
      
    }
  }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
