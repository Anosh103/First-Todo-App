# Todo App Documentation

## Overview

The Todo app is a simple web application developed using React.js for the frontend, Express.js for the backend, Zod for basic data validation, Axios for fetching data from the backend, and MongoDB for storing the database. The app provides basic CRUD (Create, Read, Update, Delete) functionality for managing todos.

## Frontend (React.js)

The frontend of the Todo app is built using React.js. 

## Backend (Express.js)

The backend of the Todo app is powered by Express.js. It provides a set of API endpoints to handle CRUD operations on todos.

### API Endpoints

1. **Add Todo:**

   - Endpoint: `/todos`
   - Method: `POST`
   - Description: Adds a new todo to the database.
   - Request Body:
     - Example:
       ```json
       {
         "title": "Complete Documentation",
         "description": "Write documentation for the Todo app",
         (only the title and description is sent from the frontend, completed is set to false in the object that is used to create the todo)
       }
       ```
   - Response:
     - Example:
       ```json
       {
         "id": "1234567890",
         "title": "Complete Documentation",
         "description": "Write documentation for the Todo app",
         "completed": false
       }
       ```

2. **Get All Todos:**

   - Endpoint: `/todos`
   - Method: `GET`
   - Description: Retrieves all existing todos from the database.
   - Response:
     - Example:
       ```json
       [
         {
           "id": "1234567890",
           "title": "Complete Documentation",
           "description": "Write documentation for the Todo app",
           "completed": false
         },
         // ... other todos
       ]
       ```

3. **Mark Todo as Done:**

   - Endpoint: `/completed`
   - Method: `PUT`
   - Description: Marks a todo as completed.
   - Request Body:
     - Example:
       ```json
       {
         "id": "1234567890"
       }
       ```

4. **Delete Todo:**

   - Endpoint: `/deleted`
   - Method: `DELETE`
   - Description: Deletes a todo from the database.
   - Request Body:
     - Example:
       ```json
       {
         "id": "1234567890"
       }
       ```

## Data Validation (Zod)

Zod is used for basic data validation to ensure that the data sent to the backend API endpoints adheres to the expected format.

## Data Fetching (Axios)

Axios is used to fetch data from the backend API endpoints.

## Database (MongoDB)

MongoDB is the used database to store todo data. The data model includes fields such as  `title`, `description`, and `completed`.

