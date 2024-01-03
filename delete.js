const pool = require("./db/pool");

async function deleteUser(id) {
    const SQL = `DELETE FROM users WHERE id = ${id};`
    const data = await pool.query(SQL);
    console.log(data);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}
async function deletePost(id) {
    const SQL = `DELETE FROM post WHERE id = ${id};`
    const data = await pool.query(SQL);
    console.log(data);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}
async function deleteComment(id) {
    const SQL = `DELETE FROM comment WHERE id = ${id};`
    const data = await pool.query(SQL);
    console.log(data);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}
async function deleteTodos(id) {
    const SQL = `DELETE FROM todos WHERE id = ${id};`
    const data = await pool.query(SQL);
    console.log(data);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}

module.exports = {
    user: deleteUser,
    comment: deleteComment,
    todos: deleteTodos,
    post: deletePost,
}