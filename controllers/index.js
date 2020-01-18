const router = require("express").Router();
const bookController = require("./book.controller");
const authController = require("./auth.controller");
const cognitiveController = require("./cognitive.controller");
const motorController = require("./motor.controller");
const socialController = require("./social.controller");
const verbalController = require("./verbal.controller");

// API Routes
router.use("/api/cognitive", cognitiveController);
router.use("/api/motor", motorController);
router.use("/api/social", socialController);
router.use("/api/verbal", verbalController);

router.use("/api/book", bookController);

// Auth Routes
router.use("/auth", authController)

module.exports = router;
