import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
  };

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
     logInUser(state, action) {
        state.user = action.payload
      },
     logOutUser(state, action){
        state.user = null
     }
    },
  });

  export const {logInUser, logOutUser} = authSlice.actions
export default authSlice.reducer
