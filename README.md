# Todo App

This is a simple todo app built with React for the frontend and Node.js and PostgreSQL for the backend.

## Getting Started
Clone this repository to your local machine using git clone https://github.com/aboustany/to-do-app.git

Navigate to the todo-app directory and install dependencies using `npm install`.

First, start the backend server by running `npm start` in the **todo-backend directory**. The server will print the number of the port where the backend is running.

Next, in **`todo-frontend > package.json`**, modify the line `"proxy": "http://localhost:BACKEND_PORT"`, replacing `BACKEND_PORT` with the port number printed when the backend server is started. 

Start the frontend server by running npm start in the **todo-frontend directory**. The server will start on port 3000 by default.

Open http://localhost:3000 in your browser to view the app.

## Features
Add new todo items
Mark todo items as completed
Delete todo items
View a list of all todo items

## Technologies Used
React,
Node.js,
PostgreSQL,
Axios,
VS Code

