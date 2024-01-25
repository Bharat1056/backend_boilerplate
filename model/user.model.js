import mongoose, { Schema } from "mongoose";

//here we decide the entire configuration of each input field
const aliasSchema = new Schema(
  {
    //schema for username field
    username: {
      type: String, //type of input it will accept
      require: true, //whether we want to set it as a required field or not
      unique: true,
      lowercase: true, //string will accept only lowercase
      trim: true,
      index: true,
    },

    //schema for password field
    password: {
      type: String,
      require: [true, "Password is required"],
    },
  },

  { timestamps: true } // at what time the user created user object is mongoDB database
);

export const Alias = mongoose.model("Alias", aliasSchema);
