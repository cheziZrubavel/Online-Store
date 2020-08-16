const express = require("express");
const authLogic = require("../bll/auth-logic");
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require("../models/user");

router.post("/register", async (request, response) => {
    // Save new user to the database (if username not exist)
    let username = request.body.username;
    try {
        if (authLogic.isUsernameAlreadyExistAsync(username) === true) {
            response.status(403).send("username already exists");
        } else {
            const user = new User(request.body);
            const addedUser = await authLogic.registerUserAsync(user);
            // Create new Token: 
            const token = jwt.sign({ addedUser }, config.jwt.secretKey, { expiresIn: "30m" });

        // Send back the token to the client: 
        response.status(201).json({ addedUser, token });
        }
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// Login: 
router.post("/login", async (request, response) => {
    try {
        // Check in database if user exist: 
        const user = await authLogic.isUserExistAsync(request.body);
        if (!user) {
            response.status(403).send("Incorrect username or password");
            return;
        } else {
            
        // Save in the session that user is logged in, and user's role: 
        request.session.isLoggedIn = true;
        request.session.role = user.role ? "admin" : "customer";

        // Create new Token: 
        const token = jwt.sign({ user }, config.jwt.secretKey, { expiresIn: "60m" });

        // Send back the token to the client: 
        response.json({ user, token });

        }
    } catch (err) {
        response.status(500).send(err.message);
    }
});

// Check if identity exist: 
router.post("/check-identity", async (request, response) => {
    try {

        // Check in database if identity exist: 
        const identity = await authLogic.isIdentityExistAsync(request.body.identity);
        if (identity) {
            response.status(403).send("this identity already exist in the system!");
            return;
        } else {
            response.json(identity);
        }
    } catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;