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
      const response = await axios.post(
        "https://shivs-io.vercel.app/api/contact",
        formData
      );
      console.log("Contact form submitted:", response.data);
      setSuccessMessage("Message sent successfully!");
      setErrorMessage("");
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phoneNumber: "",
        message: "",
        policy: false,
      });
    } catch (error) {
      console.error("Error submitting contact form backend:", error);
      setSuccessMessage("");
      setErrorMessage("Failed to send the message. Please try again later.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <div className="bg-white px-6 pb-8 sm:pb-10 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-800">
              Contact Me
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              I would love to hear from you. Please fill out the form below to
              get in touch.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 max-w-2xl bg-white shadow-md rounded-lg p-8"
          >
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-6">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-700"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-lg border-gray-300 px-4 py-2 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-700"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-lg border-gray-300 px-4 py-2 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-700"
                >
                  Company
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-lg border-gray-300 px-4 py-2 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-700"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-lg border-gray-300 px-4 py-2 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    id="phone-number"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    className="block w-full rounded-lg border-gray-300 px-4 py-2 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-700"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id="message"
                    placeholder="Write your message..."
                    rows="4"
                    className="block w-full rounded-lg border-gray-300 px-4 py-2 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  ></textarea>
                </div>
              </div>
              <div className="flex gap-x-4 sm:col-span-2 items-start">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="policy"
                    checked={formData.policy}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm leading-6 text-gray-600">
                    By selecting this, you agree to our{" "}
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:underline"
                    >
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
                className="block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Let&apos;s Talk
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
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
