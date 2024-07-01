import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, company, phoneNumber, message, policy } =
    req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !company ||
    !phoneNumber ||
    !message ||
    !policy
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.create({
    firstName,
    email,
    lastName,
    company,
    phoneNumber,
    message,
    policy,
  });

  const createdUser = await User.findById(user._id).select("");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
});

export { registerUser };
