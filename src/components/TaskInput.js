import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { TextField, Button, Box } from "@mui/material";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <Box display="flex" mb={2}>
      <TextField
        fullWidth
        variant="outlined"
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
      />
      <Button
        variant="contained"
        color="success"
        onClick={handleAddTask}
        style={{ marginLeft: "10px" }}
      >
        Add
      </Button>
    </Box>
  );
};

export default TaskInput;
