const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

// CRUD:
//   C -> Create
//   R -> Read
//   U -> Update
//   D -> Delete

// get is used to read content from the backend
// post is used to create/add content to the backend
// This is abbreviation is possible because both requests use the same route path
router.route("/").get(protect, getGoals).post(protect, setGoal);

// put is used to update content in the backend
// delete is used to delete content in the backend
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
