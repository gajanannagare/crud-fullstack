import mongoose, { Model, Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isDeveloper: Boolean,
});

const UserModel = mongoose.model("users", UserSchema);

export { UserModel };
