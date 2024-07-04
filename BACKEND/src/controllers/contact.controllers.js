import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Contact } from "../models/contact.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const contact = asyncHandler(async (req, res) => {
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

  const contact = await Contact.create({
    firstName,
    email,
    lastName,
    company,
    phoneNumber,
    message,
    policy,
  });

  const createdcontact = await Contact.findById(contact._id).select("");

  if (!createdcontact) {
    throw new ApiError(500, "Something went wrong while sending the message");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdcontact, "User send message Successfully"));
});

export { contact };
