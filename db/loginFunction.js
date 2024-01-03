const pool = require("./pool")
async function checkUserCredentials(username, userCode) {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

        if (rows.length === 0) {
            return "User not found";
        }
        const user = rows[0];
        const userId = user.id;

        const [passwordRows] = await pool.query('SELECT * FROM password WHERE user_id = ? AND password = ?', [userId, userCode]);

        if (passwordRows.length === 0) {
            return "Invalid user code";
        }

        return user;
}

module.exports = { checkUserCredentials };


