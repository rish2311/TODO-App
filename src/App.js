import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Container, Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography
        style={{ margin: "2vh" }}
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
      >
        To-Do List
      </Typography>
      <TaskInput />
      <TaskList />
    </Container>
  );
}

export default App;
