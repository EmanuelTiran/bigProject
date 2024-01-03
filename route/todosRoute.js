const express = require("express");
// const Joi = require("joi");
const { get, add, erase, edit } = require("../db/generyFunction");

const todosRoute = express.Router();

todosRoute.get("/:userId", async (req, res) => {
    try {
        console.log("try");
        const todos = await get.todos(req.params.userId);
        console.log(todos);
        res.json(todos);
    } catch (error) {
        console.log("catch");
        console.log(error);
        res.status(500).send();
    }
});




todosRoute.post("/:id", async (req, res) => {
    try {
        const { title, completed } = req.body
        const todos = await add.todos(title, completed, req.params.id);
        if (todos) {
            res.status(201).json(todos);
            return;
        }
        res.status(400).send();
    } catch (error) {
        res.status(500).send();
    }
});

todosRoute.put("/:id", async (req, res) => {
    try {
        const todos = await edit.todos(req.params.id);
        if (todos) {
            res.json(todos);
            return;
        }
        res.status(404).send();
    } catch (error) {
        res.status(500).send();
    }
}
);

todosRoute.delete("/:id", async (req, res) => {
    try {
        const todos = await erase.todos(req.params.id);
        if (todos) {
            res.json(todos);
            return;
        }
        res.status(404).send();
    } catch (error) {
        res.status(500).send();
    }
});
module.exports = todosRoute;
