export const taskReducer = (currentTasks, action) => {
    const { id, text, isCompleted } = action;

    switch (action.type) {
        case "addTodo": {
            return [...currentTasks, { id, text, isCompleted }];
        };
        case "editTodo": {
            return currentTasks.map((task) => task.id === id ? { id, text, isCompleted } : task);
        };
        case "deleteTodo": {
            return currentTasks.filter((task) => task.id !== id);
        };
        default: {
            throw new Error(`No se reconoce la accion: ${action.type}`);
        }
    }
};