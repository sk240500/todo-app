# todo-app
To-Do App Documentation

Project Structure

The project structure is organized in a simple manner, consisting of the following key files:

App.js: The main component where the state and main logic of the application are handled. It includes the task creation form and renders the TaskList component.

TaskList.js: A component responsible for rendering the list of tasks. It receives tasks as props and maps through them to display individual tasks. It also handles task-related actions like deletion, completion toggling, and editing.

Task.js: A component that represents an individual task. It displays task details, including the title, description, due date, and completion status. It also provides buttons for task deletion and editing.

App.css: The stylesheet for styling the components. It includes basic styling for alignment, spacing, and responsiveness.

Component Functionality
1. App.js
State:

tasks: An array that holds the list of tasks.
newTask: An object representing the current task being added.
Functions:

handleInputChange: Handles input changes for the task creation form.
addTask: Adds a new task to the list of tasks.
deleteTask: Deletes a task from the list.
toggleCompletion: Toggles the completion status of a task.
editTask: Edits the details of an existing task.
Rendering:

Renders the task creation form.
Renders the TaskList component with the list of tasks.
2. TaskList.js
Props:

tasks: An array of tasks to be displayed.
deleteTask: A function to delete a task.
toggleCompletion: A function to toggle the completion status of a task.
editTask: A function to edit the details of a task.
Rendering:

Maps through the list of tasks and renders individual Task components.
3. Task.js
Props:

task: An individual task object.
index: The index of the task in the list.
deleteTask: A function to delete the task.
toggleCompletion: A function to toggle the completion status of the task.
editTask: A function to edit the details of the task.
Rendering:

Displays task details, including title, description, due date, and completion status.
Provides buttons for task deletion and editing.
Styling
The application includes basic styling to improve the visual appearance and responsiveness. Styles are defined in the App.css file and cover components, form elements, and task lists.

Usage

Clone the project repository.

Navigate to the project directory.

Run npm install react-scripts --save

Run npm start to start the development server.

Open the browser and access the application at http://localhost:3000.
