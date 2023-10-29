import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,    
  password: { type: String, required: true },

});

export const UserModel = mongoose.model("usuario", UserSchema);