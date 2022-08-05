const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3500;
const { logger } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const { urlencoded } = require("express");

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
