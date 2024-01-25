import { User } from "../model/user.model.js";
import asyncHandler from "../utils/asyncHandler.js"
import apiError from "../utils/apiError.js"
import apiResponse from "../utils/apiResponse.js"

export const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  const { username, password } = req.body;

  //  add your validation here

  if ([username, password].some((field) => field?.trim() === "")) {
    throw new apiError(400, "All fields must be required");
  }

  // check if user already exists: username

  const existedUser = await User.findOne({ username });

  if (existedUser) {
    throw new apiError(409, "User with email or username already exists");
  }

  // create an object of the user having its details which would be uploaded in the db

  const user = await User.create({
    password,
    username: username.toLowerCase(),
  });

  // remove password from response
  const createdUser = await User.findById(user._id).select("-password");

  // check whether an user account is successfully created or not if not then display error message
  if (!createdUser) {
    throw new apiError(500, "Something went wrong while registering user");
  }

  // Now user account is successfully created return response
  return res
    .status(201)
    .json(new apiResponse(200, createdUser, "User registered successfully"));
});