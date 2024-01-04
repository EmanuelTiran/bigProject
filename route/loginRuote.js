const express = require("express");

// const Joi = require("joi");
const { checkUserCredentials } = require("../db/loginFunction");

const loginRoute = express.Router();

loginRoute.post("/", (req, res) => {
    const { username, userCode } = req.body;
    console.log(username, userCode);
    checkUserCredentials(username, userCode)
        .then(result => {
            if(result === "User not found") {
                res.status(404).send(result);
                return;
            }
            if(result === "Invalid user code") {
                res.status(400).send(result);
                 
            }
            res.json(result)
        })
        .catch(error => {
            console.error(error);
            res.status(500).send();
        });
});


module.exports = loginRoute;

