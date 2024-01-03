const pool = require("./db/pool");

async function getComment() {
    const SQL = `
SELECT * FROM pepole_schema.comment;
`;
    const [data] = await pool.query(SQL);
    console.log(data);
    return data;
}

async function getPost() {
    const SQL = `
SELECT * FROM pepole_schema.post;
`;
    const [data] = await pool.query(SQL);
    console.log(data);
    return data;
}

async function getUsers(id) {
    if (id) {
        const SQL = `SELECT * FROM pepole_schema.users WHERE pepole_schema.users.id = ${id};
`
        const [data] = await pool.query(SQL);

        console.log(data);
        return data;
    }
    else {
        const SQL = `
SELECT * FROM pepole_schema.users;
`;
        const [data] = await pool.query(SQL);
        console.log(data);
        return data;
    }
}

async function getTodos() {
    const SQL = `
SELECT * FROM pepole_schema.todos;
`;
    const [data] = await pool.query(SQL);
    console.log(data);
    console.log("ppp");
    return data;

}

const port = process.env.PORT || 5500;

module.exports = {
    comment: getComment,
    post: getPost,
    todos: getTodos,
    users: getUsers
};