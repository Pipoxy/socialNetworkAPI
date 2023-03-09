const { model, Schema } = require("mongoose");
const { ObjectId } = require("mongoose").Types;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: [
    {
      type: ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
});

module.exports = model("user", userSchema);
