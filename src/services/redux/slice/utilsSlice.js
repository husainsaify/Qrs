import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    count: 0,
  };

const utilsSlice = createSlice({
    name: 'utilsReducer',
    initialState,
    reducers: {
     requestSent(state) {
        state.loading = true
      },
     responseRecived(state) {
        state.loading = false
      },
      receivedError(state, action) {
        state.loading = false
        state.error =  action.payload
      },
      emptyErrors(state, action) {
        state.loading = false
        state.error =  null
      },
      setCountsAction(state, action) {
        state.loading = false
        state.count =  action.payload
      },
    },
  });

  export const { requestSent, responseRecived, receivedError, emptyErrors, setCountsAction } = utilsSlice.actions
export default utilsSlice.reducer
