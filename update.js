const pool = require("./db/pool");


async function updateUser(id) {
    const updateUser = await req.body;
    const { name, date, mail } = updateUser;
    const data = await pool.query(`UPDATE users SET username = ?, created_at = ?, mail = ? WHERE id = ?;
    `, [name, date, mail, id]);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}

async function updatePost(id) {
    const updatePost = await req.body;
    const { id_post, title, content } = updatePost;
    const data = await pool.query(`UPDATE comment SET id_post = ?, title = ?, content = ? WHERE id = ?;
    `, [id_post, title, content, id]);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}

async function updateComment(id) {
    const updateComment = await req.body;
    const { id_post, name, content, mail } = updateComment;
    const data = await pool.query(`UPDATE comment SET id_post = ?, name = ?, content = ?, mail=? WHERE id = ?;
    `, [id_post, name, content, mail, id]);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}

async function updateTodos(id) {
    const updateTodo = await req.body;
    const { id_td, title, completed, userId } = updateTodo;
    const data = await pool.query(`UPDATE todos SET id = ?, title = ?, completed = ?, userId=? WHERE id = ?;
    `, [id_td, title, completed, userId, id]);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}

module.exports = {
    user: updateUser,
    post: updatePost,
    comment: updateComment,
    todos: updateTodos,
}