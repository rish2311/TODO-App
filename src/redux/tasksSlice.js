import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      const updatedState = [...state, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedState));
      return updatedState;
    },
    deleteTask: (state, action) => {
      const updatedState = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedState));
      return updatedState;
    },
    updateTask: (state, action) => {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      if (taskIndex >= 0) {
        const updatedState = [...state];
        updatedState[taskIndex] = action.payload;
        localStorage.setItem("tasks", JSON.stringify(updatedState));
        return updatedState;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
