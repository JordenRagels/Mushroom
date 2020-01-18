const router = require("express").Router();
const bookController = require("./book.controller");
const authController = require("./auth.controller");
const cognitiveController = require("./cognitive.controller");

// API Routes
router.use("/api/cognitive", cognitiveController);

router.use("/api/book", bookController);

// Auth Routes
router.use("/auth", authController)

module.exports = router;
