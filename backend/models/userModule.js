import { Schema, model } from "mongoose";

let userSchema = new Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

let user = model("user", userSchema);

export { user };
