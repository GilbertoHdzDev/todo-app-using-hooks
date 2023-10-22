import { useState } from "react";

export const ListItem = ({ task, onEditTodo, onDeleteTodo }) => {
    // console.log("Me volvi a renderizar :(")
    const { text, isCompleted, id } = task;
    const [isEditing, setIsEditing] = useState(false);
    const [inputTask, setInputTask] = useState(text);

    const handleEditing = () => {
        setIsEditing(true);
    };

    const handleSaving = () => {
        setIsEditing(false);
        onEditTodo({
            id,
            text: inputTask,
            isCompleted
        });
    }

    const handleInputChange = (evt) => {
        const { value } = evt.target;
        setInputTask(value);
    };

    const handleCheckBox = (evt) => {
        const isChecked = evt.target.checked;
        onEditTodo({
            id,
            text,
            isCompleted: isChecked,
        })
    };

    const handleDelete = () => {
        onDeleteTodo(id);
    }

    return (
        <div className="todo">
            {
                isEditing
                    ? (
                        <>
                            <input type="text" name="task" value={inputTask} onChange={handleInputChange} />
                            <button onClick={handleSaving}>Save</button>
                        </>
                    )
                    : (
                        <>
                            <input type="checkbox" checked={isCompleted} onChange={handleCheckBox} id="is-completed" />
                            <label htmlFor="is-completed">{inputTask}</label>
                            <button onClick={handleEditing}>Edit</button>
                            <button onClick={handleDelete}>Delete</button>
                        </>
                    )
            }

        </div>
    );
};