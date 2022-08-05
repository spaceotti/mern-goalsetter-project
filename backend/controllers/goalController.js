const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc - Get goals
// @route - GET /api/goals
// @acccess - Private
const getGoals = asyncHandler(async (req, res) => {
  const result = await Goal.find();
  res.status(200).json(result);
});

// @desc - Create goal
// @route - POST /api/goals
// @acccess - Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req?.body?.text) {
    return res.status(400).json({ message: "You have to enter a goal." });
  }
  try {
    const goal = await Goal.create({
      text: req.body.text,
    });
    res.status(201).json(goal);
  } catch (err) {
    console.log(err);
  }
});

// @desc - Update goal
// @route - PUT /api/goals/:id
// @acccess - Private
const updateGoal = asyncHandler(async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "Goal ID required." });

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res
    .status(200)
    .json({ message: `Goal with ID ${req.params.id} is updated.` });

  /* const goal = await Goal.findOne({ _id: req.params.id });
  if (!goal) {
    return res
      .status(204)
      .json({ message: `No goal matches ID ${req.params.id}.` });
  }
  if (req.body?.text) goal.text = req.body.text;
  const result = await goal.save();
  res.json(result); */
});

// @desc - Delete goal
// @route - DELETE /api/goals/:id
// @acccess - Private
const deleteGoal = asyncHandler(async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "Goal ID required." });

  const goal = await Goal.findById(req.params.id);
  if (!goal) return res.status(400).json({ message: "Goal not found." });
  await goal.remove();
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
