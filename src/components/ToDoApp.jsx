import { useReducer, useState } from "react";
import { ToDoForm, ListItem } from "./";
import { taskReducer } from "../helpers/taskReducer";

export const ToDoApp = () => {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [hideCompletedTasks, setHideCompletedTasks] = useState(false);

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: "addTodo",
            ...newTodo
        });
    };

    const handleEditTodo = (editedTask) => {
        dispatch({
            type: "editTodo",
            ...editedTask
        });
    };

    const handleDeleteTodo = (idTask) => {
        dispatch({
            type: "deleteTodo",
            id: idTask
        });
    };

    const tasksToShow = hideCompletedTasks ?
        tasks.filter((task) => !task.isCompleted).map((task) => (
            <ListItem
                key={task.id}
                task={task}
                onEditTodo={handleEditTodo}
                onDeleteTodo={handleDeleteTodo}
            />))
        : tasks.map((task) => (
            <ListItem
                key={task.id}
                task={task}
                onEditTodo={handleEditTodo}
                onDeleteTodo={handleDeleteTodo}
            />));

    return (
        <div className="container">
            <div className="todo-wrapper">
                <h1>Todo List</h1>
                <hr />
                <ToDoForm onAddTodo={handleAddTodo} />
                <input
                    type="checkbox"
                    name="hide-completed"
                    id="hide-completed"
                    checked={hideCompletedTasks}
                    onChange={() => setHideCompletedTasks(!hideCompletedTasks)}
                />
                <label htmlFor="hide-completed">Hide completed tasks</label>
                <div className="todo-list">
                    {
                        tasksToShow
                    }
                </div>
            </div>
        </div>

    )
};
