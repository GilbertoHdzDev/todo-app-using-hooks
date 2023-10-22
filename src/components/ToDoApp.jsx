import { useReducer } from "react";
import { ToDoForm, ListItem } from "./";
import { taskReducer } from "../helpers/taskReducer";

export const ToDoApp = () => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

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

    return (
        <div className="container">
            <div className="todo-wrapper">
                <h1>Todo List</h1>
                <hr />
                <ToDoForm onAddTodo={handleAddTodo} />
                <div className="todo-list">
                    {
                        tasks.map((task) => (
                            <ListItem
                                key={task.id}
                                task={task}
                                onEditTodo={handleEditTodo}
                                onDeleteTodo={handleDeleteTodo}
                            />))
                    }
                </div>
            </div>
        </div>

    )
};

// const createUniqueId = () => {
//     const dateString = Date.now().toString(36);
//     const randomness = Math.random().toString(36).substring(2);
//     console.log(dateString, randomness);
//     return `${randomness}${dateString};`
// }

