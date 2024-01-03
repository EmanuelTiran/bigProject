const pool = require("./pool");

async function updateUser(id, username, mail) {
    const data = await pool.query(`UPDATE users SET username = ?, created_at = NOW(), mail = ? WHERE id = ?;
    `, [username, mail, id]);
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
    const updateTodo = req.body;
    const { title, completed, userId } = updateTodo;
    const data = await pool.query(`UPDATE todos SET  title = ?, completed = ?, userId=? WHERE id = ?;
    `, [title, completed, userId, id]);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}

async function getComments(id) {
    console.log(id);
    const SQL = `
SELECT * FROM pepole_schema.comment WHERE post_id = ?;
`;
    const [data] = await pool.query(SQL,[id]);
    console.log(data);
    return data;
}

async function getComment() {
    const SQL = `
    SELECT * FROM comment ORDER BY id_comment DESC LIMIT 1;
`;
    const [data] = await pool.query(SQL);
    // console.log(data[0]);
    return data[0];
}
getComment()

async function getPost() {
    const SQL = `
    SELECT * FROM post;
    `;
    const [data] = await pool.query(SQL);
    console.log(data);
    return data;
}

async function getUsers() {
    const SQL = `SELECT * FROM pepole_schema.users;`;
    const [data] = await pool.query(SQL);
    console.log(data);
    return data;
}
async function getUser(id) {
    const SQL = `SELECT * FROM pepole_schema.users WHERE pepole_schema.users.id = ${id};`
    const [data] = await pool.query(SQL);
    console.log(data);
    return data;

}

async function getTodos(id) {
    const SQL = `
SELECT * FROM pepole_schema.todos WHERE id = ${id};`;
    const [data] = await pool.query(SQL);
    console.log(data);
    console.log("ppp");
    return data;
}

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
    const SQL = `DELETE FROM comment WHERE id_comment = ${id};`
    const data = await pool.query(SQL);
    console.log(data);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}

// deleteComment(1);
async function deleteTodos(id) {
    const SQL = `DELETE FROM todos WHERE id = ${id};`
    const data = await pool.query(SQL);
    console.log(data);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}

async function addUsers(newuser, mail) {
    const SQL = `INSERT INTO users (username, created_at, mail) VALUES (?, NOW(), ?);`
    const data = await pool.query(SQL, [newuser, mail]);
    console.log(data);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}
async function addTodos(title, completed, userId) {
    const SQL = `INSERT INTO todos (title, completed, userId) VALUES (?, ?, ?);`
    const data = await pool.query(SQL, [title, completed, userId]);
    console.log(data);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}

async function addComment(name, content, mail, postId) {
    const SQL = `INSERT INTO comment (post_id, name, content, mail) VALUES ( ?, ?, ?,?);`
    const data = await pool.query(SQL, [postId, name, content, mail]);
    if (data[0].affectedRows) {
        return getComment()
    }
}

async function addPost(userId, title, content) {
    const SQL = `INSERT INTO post (userId, title, content) VALUES (?,?,?);
    `
    const data = await pool.query(SQL, [userId, title, content]);
    console.log(data);
    if (data[0].affectedRows) {
        return data[0].affectedRows;
    }
}

module.exports = {
    get: {
        users: getUsers,
        user: getUser,
        comments: getComments,
        comment: getComment,
        post: getPost,
        todos: getTodos,
    },
    add: {
        user: addUsers,
        comment: addComment,
        todos: addTodos,
        post: addPost
    },
    erase: {
        user: deleteUser,
        comment: deleteComment,
        todos: deleteTodos,
        post: deletePost,
    },
    edit: {
        user: updateUser,
        post: updatePost,
        comment: updateComment,
        todos: updateTodos,
    }
}