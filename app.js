const {get,add,erase,edit} = require('../bigProject/db/generyFunction');
const express = require("express");
const usersRoute = require("../bigProject/route/usersRoute");
const postRoute = require("../bigProject/route/postRoute");
const todosRoute = require("../bigProject/route/todosRoute");
const loginRoute = require("./route/loginRuote");
const commentRoute = require("../bigProject/route/commentRoute");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
app.use("/api", loginRoute);
app.use("/api/users", usersRoute);
app.use("/api/user/post", postRoute);
app.use("/api/user/todos", todosRoute);
app.use("/comment", commentRoute);

const port = process.env.PORT || 5300;
app.listen(port, () => {
    console.log("server is running on port " + port);
});
