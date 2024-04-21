const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hello! :)",
    user: "Asia",
    added: new Date(),
  },
  {
    text: "How are you?",
    user: "Kitty",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

/* new message */
router.get("/new", (req, res, next) => {
  res.render("form", { title: "Add a message" });
});

router.post("/new", (req, res, next) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});
module.exports = router;
