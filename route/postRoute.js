const express = require("express");
// const Joi = require("joi");
const { get, add, erase, edit } = require("../db/generyFunction");
const { checkUserCredentials } = require("../db/loginFunction");

const postRoute = express.Router();

// async function authenticate(req, res, next) {
//     const auth = req.headers.auth
//     if(!auth){
//         res.status(400).send();
//         return;
//     }
//     const [username, password] = auth.split(":");
//     if(!username || !password) {
//         res.status(400).send();
//         return;
//     }
//     const user = await checkUserCredentials(username, password);
//     console.log(typeof user !== 'object');
//     if(typeof user !== 'object'){
//         res.status(401).send();
//         return
//     }
//     req.user = user;
//     next();
// }

postRoute.get("/", async (req, res) => {
    try {
        // console.log("try");
        const posts = await get.post();
        // console.log(posts);
        res.json(posts);
    } catch (error) {
        // console.log("catch");
        console.log(error);
        res.status(500).send();
    }
});




postRoute.post("/", async (req, res) => {
    try {
        const { userId, title, content } = req.body
        const user = await add.post(userId, title, content);
        if (user) {
            res.status(201).json(user);
            return;
        }
        res.status(400).send();
    } catch (error) {
        res.status(500).send();
    }
});

postRoute.put("/:id", async (req, res) => {
    try {
        const post = await edit.post(req.params.id);
        if (post) {
            res.json(post);
            return;
        }
        res.status(404).send();
    } catch (error) {
        res.status(500).send();
    }
}
);

postRoute.delete("/:id", async (req, res) => {
    try {
        const post = await erase.post(req.params.id);
        if (post) {
            res.json(post);
            return;
        }
        res.status(404).send();
    } catch (error) {
        res.status(500).send();
    }
});
module.exports = postRoute;
