import mongoose, { Schema, model, Document } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  email: string;
  image?: string;
  stared?: string[];
}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: [true, "please add your name"] },
  email: { type: String, required: [true, "please add your email"] },
  image: { type: String, required: false },
  stared: { type: [String], required: false },
});

// mongoose.models = {};

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
