import { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { ListItem } from "./ListItem";

export const ToDoApp = () => {
    const [tasks, setTasks] = useState([]);

    const handleAddTodo = (newTodo) => {
        setTasks([...tasks, newTodo]);
    };

    const handleEditTodo = (editedTask) => {
        const updatedTasks = tasks.map((task) => task.id === editedTask.id ? editedTask : task);
        setTasks(updatedTasks);
    };

    const handleDeleteTodo = (idTask) => {
        const updatedTasks = tasks.filter((task) => task.id !== idTask);
        setTasks(updatedTasks);
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

