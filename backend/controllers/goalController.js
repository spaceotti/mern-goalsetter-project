const asyncHandeler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

const createGoal = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "New goal created" });
});

const updateGoal = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Goal with ID-${req.params.id} is updated.` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Goal with ID-${req.params.id} is deleted.` });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
