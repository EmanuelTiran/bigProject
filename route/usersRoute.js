const express = require("express");
const Joi = require("joi");
const { get, add, erase, edit } = require("../db/generyFunction");

const usersRoute = express.Router();

usersRoute.get("/", async (req, res) => {
    try {
        const users = await get.users();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});


usersRoute.get("/:id", async (req, res) => {
    try {
        const user = await get.user(req.params.id);
        if (user) {
            res.json(user);
            return;
        }
        res.status(404).send();
    } catch (error) {
        res.status(500).send();
    }
});


usersRoute.post("/", async (req, res) => {
    console.log(req.body);
    const { name, mail } = req.body;
    try {
        const user = await add.user(name, mail);
        if (user) {
            res.status(201).json(user);
            return;
        }
        res.status(400).send();
    } catch (error) {
        res.status(500).send();
    }
});

usersRoute.put("/:id", async (req, res) => {
    try {
        const { username, mail } = req.body;

        const user = await edit.user(req.params.id, username, mail);
        if (user) {
            res.json(user);
            return;
        }
        res.status(404).send();
    } catch (error) {
        res.status(500).send();
    }
}
);

usersRoute.delete("/:id", async (req, res) => {
    try {
        const user = await erase.user(req.params.id);
        if (user) {
            res.json(user);
            return;
        }
        res.status(404).send();
    } catch (error) {
        res.status(500).send();
    }
});
module.exports = usersRoute;
