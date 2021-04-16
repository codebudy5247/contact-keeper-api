const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//Test Routes
app.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

//const PORT = process.env.PORT || 5000;

//app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
module.exports = app;
