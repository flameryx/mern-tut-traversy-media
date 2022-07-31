const express = require("express");
const router = express.Router();

// CRUD:
//   C -> Create
//   R -> Read
//   U -> Update
//   D -> Delete

// get is used to read content from the backend
router.get("/", (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// post is used to create/add content to the backend
router.post("/", (req, res) => {
  res.status(200).json({ message: "Set goal" });
});

// put is used to update content in the backend
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = router;
