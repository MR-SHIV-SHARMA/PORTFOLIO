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
      console.error("Error submitting contact form:", error);
      setSuccessMessage("");
      setErrorMessage("Failed to send the message. Please try again later.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        <div className="border-2 border-gray-800 shadow-md"></div>
        <div className="bg-white sm:mt-11 px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="hidden lg:block relative h-full">
                <img
                  src="https://images.pexels.com/photos/4526419/pexels-photo-4526419.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="Contact Image"
                  className="w-full h-full object-cover object-center rounded-lg shadow-md"
                  style={{ maxHeight: "100%", minHeight: "500px" }}
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-800 mb-4">
                  Contact Me
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-7 text-gray-600 mb-8">
                  I would love to hear from you. Please fill out the form below
                  to get in touch.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 border-2 border-gray-800"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-lg border-2 border-gray-800 px-3 py-2 text-sm placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-lg border-2 border-gray-800 px-3 py-2 text-sm placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold leading-6 text-gray-700"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        id="company"
                        autoComplete="organization"
                        className="mt-2 block w-full rounded-lg border-2 border-gray-800 px-3 py-2 text-sm placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        id="email"
                        autoComplete="email"
                        className="mt-2 block w-full rounded-lg border-2 border-gray-800 px-3 py-2 text-sm placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-semibold leading-6 text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        id="phone-number"
                        placeholder="Phone Number"
                        autoComplete="tel"
                        className="mt-2 block w-full rounded-lg border-2 border-gray-800 px-3 py-2 text-sm placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        id="message"
                        placeholder="Write your message..."
                        rows="4"
                        className="mt-2 block w-full rounded-lg border-2 border-gray-800 px-3 py-2 text-sm placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-indigo-500"
                      ></textarea>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          name="policy"
                          checked={formData.policy}
                          onChange={handleChange}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-2 border-gray-800 rounded"
                        />
                        <span className="ml-2 text-xs sm:text-sm leading-5 text-gray-600">
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
                  <div className="mt-6 sm:mt-8">
                    <button
                      type="submit"
                      className="block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-800"
                    >
                      Let's Talk
                    </button>
                  </div>
                  {errorMessage && (
                    <p className="mt-4 text-center text-sm sm:text-base font-medium text-red-600">
                      {errorMessage}
                    </p>
                  )}
                  {successMessage && (
                    <p className="mt-4 text-center text-sm sm:text-base font-medium text-green-600">
                      {successMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
