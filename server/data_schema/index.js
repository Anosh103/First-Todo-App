const zod = require('zod');

const TodoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
});

module.exports = { TodoSchema };
