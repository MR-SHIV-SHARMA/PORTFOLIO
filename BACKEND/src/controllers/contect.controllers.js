import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Contect } from "../models/contect.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const contect = asyncHandler(async (req, res) => {
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

  const contect = await Contect.create({
    firstName,
    email,
    lastName,
    company,
    phoneNumber,
    message,
    policy,
  });

  const createdcontect = await Contect.findById(contect._id).select("");

  if (!createdcontect) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdcontect, "User registered Successfully"));
});

export { contect };
