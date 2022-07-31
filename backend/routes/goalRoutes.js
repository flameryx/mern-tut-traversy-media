const express = require("express");
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController");

// CRUD:
//   C -> Create
//   R -> Read
//   U -> Update
//   D -> Delete

// get is used to read content from the backend
// post is used to create/add content to the backend
// This is abbreviation is possible because both requests use the same route path
router.route("/").get(getGoals).post(setGoal);

// put is used to update content in the backend
// delete is used to delete content in the backend
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
