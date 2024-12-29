const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();

// define the routes for registration and login

router.post("/register", registerUser)
router.post("/login", loginUser)

module.exports = router;