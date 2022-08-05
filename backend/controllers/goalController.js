const asyncHandler = require("express-async-handler");

// @desc - Get goals
// @route - GET /api/goals
// @acccess - Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc - Create goal
// @route - POST /api/goals
// @acccess - Private
const createGoal = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "New goal created" });
});

// @desc - Update goal
// @route - PUT /api/goals/:id
// @acccess - Private
const updateGoal = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Goal with ID-${req.params.id} is updated.` });
});

// @desc - Delete goal
// @route - DELETE /api/goals/:id
// @acccess - Private
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
