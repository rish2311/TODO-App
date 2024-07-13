import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/tasksSlice";
import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  TextField,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import "../App.css";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleComplete = () => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedTask.trim()) {
      dispatch(updateTask({ ...task, text: editedTask }));
      setIsEditing(false);
    }
  };

  return (
    <ListItem id="taskItems">
      <Checkbox checked={task.completed} onChange={handleToggleComplete} />
      {isEditing ? (
        <TextField
          fullWidth
          variant="outlined"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          onBlur={handleSave}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSave();
            }
          }}
        />
      ) : (
        <ListItemText
          primary={task.text}
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        />
      )}
      <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
        <Edit />
      </IconButton>
      <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
        <Delete />
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;
