const pool = require("./db/pool");

async function putUsers(newuser,mail) {
    const SQL = `INSERT INTO users (username, created_at, mail) VALUES (?, NOW(), ?);`
    const data = await pool.query(SQL,[newuser,mail]);
    console.log(data);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}
async function putTodos(title,completed,userId) {
    const SQL = `INSERT INTO todos (title, completed, userId) VALUES (?, ?, ?);`
    const data = await pool.query(SQL,[title,completed,userId]);
    console.log(data);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}

async function putComment(post_id, name, content, mail) {
    const SQL = `INSERT INTO comment (post_id, name, content, mail) VALUES (?, ?, ?, ?);`
    const data = await pool.query(SQL,[post_id, name, content, mail]);
    console.log(data);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}
async function putPost(userId, title, content) {
    const SQL = `INSERT INTO post (userId, title, content) VALUES ('ציון_משתמש', 'כותרת', 'תוכן');
    `
    const data = await pool.query(SQL,[userId, title, content]);
    console.log(data);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}

module.exports = {
    user: putUsers,
    comment: putComment,
    todos: putTodos,
    post: putPost,
}