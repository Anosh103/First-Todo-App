import { useState } from "react";
import axios from "axios";

const Todo = (props) => {
    const { id, status, title, description, todos, setTodos } = props;

    const [isDone, setIsDone] = useState(status);

    // console.log(todos)

    const getTodos = async () => {
        const res = await axios.get("http://localhost:3000/todos");
        setTodos(res.data.todos);
    };

    const updateTodo = async () => {
        try {
            const res = await axios.put("http://localhost:3000/completed", {
                id: id,
            });
            console.log(id);
            console.log(res);
            alert(res.data.msg);
        } catch (err) {
            console.log(err.message);
        }
    };

    const deleteTodo = async () => {
        try {
            const res = await axios.delete("http://localhost:3000/deleted", {
                data: { id: id },
            });
            getTodos();
            alert(res.data.msg);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="flex gap-2 bg-iron-600 rounded-2xl justify-between shadow mt-10">
            <h1
                className={
                    !isDone
                        ? "py-4 mx-3 text-xl text-tuatara-950 bg-iron-600"
                        : "py-4 mx-3 text-xl text-tuatara-950 bg-iron-600 line-through"
                }>
                {title}
            </h1>
            <h2
                className={
                    !isDone
                        ? "py-4 mx-3 text-xl text-tuatara-950 bg-iron-600"
                        : "py-4 mx-3 text-xl text-tuatara-950 bg-iron-600 line-through"
                }>
                {description}
            </h2>
            <button
                className="text-xl hover:opacity-65 rounded px-1"
                onClick={() => {
                    if (isDone) {
                        deleteTodo();
                        // const arr = todos.filter((todo) => todo.title != title);
                        // setTodos(arr);
                    } else {
                        setIsDone(true);
                        updateTodo();
                    }
                }}>
                {!isDone ? "✔️" : "❌"}
            </button>
        </div>
    );
};

export default Todo;
