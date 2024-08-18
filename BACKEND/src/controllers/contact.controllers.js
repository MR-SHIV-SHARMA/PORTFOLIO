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

  let contact = await Contact.findOne({ email });

  if (contact) {
    contact.firstName = firstName;
    contact.lastName = lastName;
    contact.company = company;
    contact.phoneNumber = phoneNumber;
    contact.message = message;
    contact.policy = policy;
  } else {
    contact = new Contact({
      firstName,
      lastName,
      email,
      company,
      phoneNumber,
      message,
      policy,
    });
  }

  await contact.save();

  return res
    .status(201)
    .json(new ApiResponse(200, contact, "User sent message successfully"));
});

export { contact };
