const { todo } = require("./db/index");
const { TodoSchema } = require("./data_schema/index");
const express = require("express");
const cors = require("cors");

require("dotenv").config({path: "./vars/.env"});

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
    cors({
        origin: process.env.react_connection_str,
    })
);

app.post("/todos", async (req, res) => {
    const bodyPayload = req.body;
    const parsedPayload = TodoSchema.safeParse(bodyPayload);

    if (parsedPayload.success) {
        try {
            const newTodo = await todo.create({
                title: bodyPayload.title,
                description: bodyPayload.description,
                completed: false,
            });
            res.json({
                msg: "Todo added successfully",
                id: newTodo._id,
            });
        } catch (err) {
            res.json({
                msg: err.message,
            });
        }
    } else {
        res.json({
            msg: "Invalid input type",
        });
    }
});

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos: todos,
    });
});

app.put("/completed", async (req, res) => {
    const todoId = req.body.id;

    try {
        await todo.findByIdAndUpdate({ _id: todoId }, { completed: true });
        res.json({
            msg: "Todo marked as completed",
        });
    } catch (err) {
        res.json({
            msg: err.message,
        });
    }
});

app.delete("/deleted", async (req, res) => {
    const todoId = req.body.id;

    try {
        await todo.deleteOne({ _id: todoId });
        res.json({
            msg: "Todo deleted successfully",
        });
    } catch (err) {
        res.json({
            msg: err.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
