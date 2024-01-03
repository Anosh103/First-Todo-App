require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.mongoose_connection_str);

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model("Todo", todoSchema);

module.exports = { todo };
