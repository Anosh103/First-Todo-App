import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";
import axios from 'axios';

export default function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await axios.get('http://localhost:3000/todos');
                const data = res.data.todos;
                setTodos(data)
            } catch (err) { 
                console.log(err.message)
            }
        }
        getTodos(); 
        // console.log(todos);
    }, [setTodos])

    // console.log(todos)

    return (
        <div className="w-full h-screen bg-tuatara-700  flex items-center justify-center">
            <div className="bg-gray-500 w-min h-3/4  flex flex-col">
                <h4 className="mx-3 p-5 text-2xl tracking-widest font-mono italic text-tuatara-500">
                    🗒️ToDos
                </h4>
                <CreateTodo todos={todos} setTodos={setTodos} />
                <div className="bg-gray-500 p-4 mt-5 h-3/5 overflow-y-auto">
                    {todos.map((todo) => (
                        <Todo
                            id={todo._id}
                            status={todo.completed}
                            title={todo.title}
                            description={todo.description}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
