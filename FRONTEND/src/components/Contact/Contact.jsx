import { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
    policy: false,
  });

  const [successMessage, setSuccessMessage] = useState(""); // State to manage the success message
  const [errorMessage, setErrorMessage] = useState(""); // State to manage the error message

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "policy") {
        console.log("Policy checkbox state:", updatedFormData.policy);
      }

      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    const {
      firstName,
      lastName,
      company,
      email,
      phoneNumber,
      message,
      policy,
    } = formData;
    if (
      !firstName ||
      !lastName ||
      !company ||
      !email ||
      !phoneNumber ||
      !message ||
      !policy
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("/api/v1/users/register", formData); // Send POST request to backend
      console.log("Contact form submitted:", response.data);
      setSuccessMessage("Message sent successfully!"); // Show success message
      setErrorMessage(""); // Clear any previous error messages
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phoneNumber: "",
        message: "",
        policy: false,
      }); // Reset form fields
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSuccessMessage(""); // Clear any previous success messages
      setErrorMessage(
        "Failed to send the message. You sent the message one time."
      ); // Show error message
    }
  };

  return (
    <>
      <div className="min-h-screen text-gray-900">
        <div className="bg-slate-400 px-6 pb-8 pt-16 sm:pt-20 sm:pb-10 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Contact me
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-700">
              Let&apos;s connect! Ask your questions, give suggestions.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-4 max-w-xl sm:mt-8"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6"
                >
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6"
                >
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    id="phone-number"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    className="block w-full gap-2 rounded-md border-0 px-3.5 py-2 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id="message"
                    placeholder="Write your message..."
                    rows="4"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <input
                    type="checkbox"
                    name="policy"
                    checked={formData.policy}
                    onChange={handleChange}
                    className="mr-2 form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="text-sm leading-6 text-gray-600">
                    By selecting this, you agree to our{" "}
                    <a href="#" className="font-semibold text-indigo-600">
                      privacy policy
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let&apos;s talk
              </button>
            </div>
            {errorMessage && (
              <p className="mt-4 text-center text-lg font-medium text-red-600">
                {errorMessage}
              </p>
            )}
            {successMessage && (
              <p className="mt-4 text-center text-lg font-medium text-gray-800">
                {successMessage}
              </p>
            )}
            <h1 className="mt-10 text-2xl font-bold text-gray-900">
              Connect with me
            </h1>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <ul className="list-none space-y-2">
                <li className="text-lg font-medium text-indigo-600 hover:underline">
                  <a href="#">LinkedIn</a>
                </li>
                <li className="text-lg font-medium text-indigo-600 hover:underline">
                  <a href="#">GitHub</a>
                </li>
              </ul>
              <ul className="list-none space-y-2">
                <li className="text-lg font-medium text-indigo-600 hover:underline">
                  <a href="#">About Me</a>
                </li>
                <li className="text-lg font-medium text-indigo-600 hover:underline">
                  <a href="#">Projects</a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
