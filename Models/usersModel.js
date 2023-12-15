import mongoose from "mongoose";

const userModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
});

const UserSchema = mongoose.model("UserSchema", userModelSchema);

export default UserSchema;
