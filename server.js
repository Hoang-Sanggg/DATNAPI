const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const giohangRoutes = require("./routes/cart.routes");
const historyRoutes = require("./routes/history.routes");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/ten_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/users", userRoutes);
app.use("/api/cart", giohangRoutes);
app.use("/api/history", historyRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to your Node.js, Express, and MongoDB server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
