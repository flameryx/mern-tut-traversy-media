const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController");

// CRUD:
//   C -> Create
//   R -> Read
//   U -> Update
//   D -> Delete

// get is used to read content from the backend
router.get("/", getGoals);

// post is used to create/add content to the backend
router.post("/", setGoal);

// put is used to update content in the backend
router.put("/:id", updateGoal);

// delete is used to delete content in the backend
router.delete("/:id", deleteGoal);

module.exports = router;
