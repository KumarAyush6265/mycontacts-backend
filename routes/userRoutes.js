const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");

const router = express.router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;