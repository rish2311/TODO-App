# React To-Do Application

## Description

This is a simple To-Do application built with React and Redux. The application allows users to add, view, edit, delete, and mark tasks as completed. It also includes persistent storage to save tasks between page reloads.

## Features

- Add tasks
- View tasks
- Edit tasks
- Delete tasks
- Mark tasks as completed
- Persistent storage using local storage

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Getting Started

Follow these steps to set up and run the application on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app

This is the Project Structure.

todo-app/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskList.js
│   │   └── TaskItem.js
│   ├── redux/
│   │   ├── store.js
│   │   ├── tasksSlice.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── index.css
├── package.json
└── README.md

Component Breakdown:

TaskInput
Purpose: To input new tasks.
Description: Contains a text field and a button to add tasks to the list.

TaskList
Purpose: To display the list of tasks.
Description: Maps through the tasks from the Redux store and renders TaskItem components.

TaskItem
Purpose: To represent each task.
Description: Displays task text with options to edit, delete, and mark as completed.

Redux Setup
store.js
Purpose: Configures and exports the Redux store.

tasksSlice.js
Purpose: Contains the initial state, reducers, and actions for managing tasks.
Location: src/redux/tasksSlice.js

Styling
Main CSS file: src/index.css
Component-styling: src/App.css

Persistent Storage
Implementation: Uses localStorage to save and load tasks.
