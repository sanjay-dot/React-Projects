import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  
  initialState,
  
  reducers: {

      add: (state, action) => {
      state.push(action.payload);
      return state;
    },
    remove: (state, action) => {
        return state.filter((item) => item.id !== action.payload);
      },
   
  },
  
});

export const { add } = addTodoReducer.actions;
export const { remove } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
