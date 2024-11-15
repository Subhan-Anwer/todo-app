'use client'
import { useState } from "react"

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            const newTask = {
                id: Date.now(),
                text: inputValue,
                completed: false,
            };
            setTodos([...todos, newTask]);
            setInputValue("");
        }
    };

    const handleDeleteTask = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleToggleComplete = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div className="flex flex-col w-full max-w-[285px] sm:max-w-[540px] bg-[#212121] text-[#b8b8b8] mt-[100px] mx-auto mb-[20px] pt-[40px] px-[30px] pb-[70px] rounded-[15px]">
            <form className="flex flex-col items-center sm:flex-row sm:justify-center sm:w-[90%] sm:mx-auto sm:mb-[50px]">
                <input type="text" placeholder="Write your task here"
                    className="h-[50px] w-[250px] sm:w-[400px] rounded-[60px] sm:rounded-r-[0px] border-[3px] sm:border-r-0 border-solid border-[#303030] bg-[#161616] px-[20px] active:bg-outline-none focus:outline-none"
                    value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={handleAddTask}
                    className="sm:h-[50px] h-[45px] w-[250px] sm:w-[80px] bg-[#303030] sm:rounded-l-[0] rounded-[50px] sm:m-0 m-2 z-[1] active:bg-outline-none focus:outline-none">Add</button>
            </form>
            <ul id="list-container" className="sm:w-[445px] w-[250px] self-center sm:mt-0 mt-5">

                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className={todo.completed ? "checked" : ""}
                        onClick={() => handleToggleComplete(todo.id)}
                    >
                        {todo.text}
                        <span
                            className=""
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent marking task as complete
                                handleDeleteTask(todo.id);
                            }}>
                        </span>
                    </li>
                ))}



            </ul>
        </div>
    )
}

export default TodoList;