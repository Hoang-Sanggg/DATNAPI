const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userId: String,
    password: String,
    email: String,
    phone: String,
    name: String,
    uytin: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
