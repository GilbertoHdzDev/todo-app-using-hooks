import { useRef, useState } from "react";
import { getUniqueId } from "../helpers/createUniqueId";

export const ToDoForm = ({ onAddTodo }) => {
    const [taskInput, setTaskInput] = useState("");
    const inputRef = useRef();

    const handleAddTodo = (evt) => {
        evt.preventDefault();
        const newTodo = {
            id: getUniqueId(),
            text: inputRef.current.value.trim(),
            isCompleted: false,
        };

        onAddTodo(newTodo);
        setTaskInput("");
    }

    const handleInputChange = (evt) => {
        const { value } = evt.target;
        setTaskInput(value);
    };

    return (
        <form onSubmit={handleAddTodo} className="todo-form">
            <input ref={inputRef} type="text" name="new-todo" onChange={handleInputChange} value={taskInput} />
            <button>Add Task</button>
        </form>
    );
};