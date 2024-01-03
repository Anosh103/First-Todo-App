import { useState } from "react";
import axios from "axios";

const CreateTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const { todos, setTodos } = props;

    const clickHandler = async () => {
        try {
            const res = await axios.post("http://localhost:3000/todos", {
                title: title,
                description: desc,
            });
            const id = res.data.id;
            console.log(id);
            console.log(todos)
            alert(res.data.msg);
            setTodos([...todos, { id: id, title: title, description: desc }]);
        } catch (err) {
            console.log(err.message);
        }

        // setTodos([...todos, { title: title, description: desc }]);
        setTitle("");
        setDesc("");
    };

    return (
        <div className="flex gap-5 bg-granite-green-500 rounded-3xl justify-between shadow">
            <input
                type="text"
                placeholder="Title"
                className="p-4 mx-5 text-2xl text-tuatara-950 bg-granite-green-500 border-none outline-none focus:outline-none "
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Description"
                className="p-4 mx-5 text-2xl text-tuatara-950 bg-granite-green-500 focus:outline-none"
                value={desc}
                onChange={(e) => {
                    setDesc(e.target.value);
                }}
            />
            <button
                className="text-2xl  bg-tuatara-900 m-3 p-2 rounded-full hover:bg-tuatara-800 shadow-sm"
                onClick={clickHandler}>
                ➕
            </button>
        </div>
    );
};

export default CreateTodo;
