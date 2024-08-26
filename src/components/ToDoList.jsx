import { useState } from "react";

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const editTask = (index) => {
        const updatedTask = prompt("Enter new task");
        if (updatedTask !== null && updatedTask !== "") {
            const newTasks = [...tasks];
            newTasks[index] = updatedTask;
            setTasks(newTasks);
        }
    };

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    return (
        <div className="todo-content">
            <div className="todo-header">
                <h1 className="todo-title">ToYDo</h1>
                <input
                    className="input-bar"
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="add-button" onClick={addTask}>Add Task</button>
            </div>
            <div className="tasks-list-container">
                <ul className="tasks-list">
                    {tasks.map((task, index) => (
                        <li key={index} className="task-item">
                            <span>{task}</span>
                            <div className="action-buttons">
                                <button className="edit-button" onClick={() => editTask(index)}>Edit</button>
                                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                                <button className="up-button" onClick={() => moveTaskUp(index)}>☝️</button>
                                <button className="down-button" onClick={() => moveTaskDown(index)}>👇</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}