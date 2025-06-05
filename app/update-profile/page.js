"use client"
import { updateProfile } from "@/actions/userActions";
import React, { useState } from "react";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cover: "",
    razorpayId: "",
    razorpaySecret: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
        <h1 className="text-3xl text-center my-4 font-medium  manrope-font">Welcome to your Dashboard</h1>
    <div className="flex justify-center items-center h-[72vh] px-4">
      <form
        action={handleSubmit}
        className="flex flex-col my-12 gap-4 p-6 border shadow-lg rounded-xl w-full max-w-2xl"
        >
        <label htmlFor="name" className="text-xl font-medium jakarta-font">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          className="p-2 border rounded-lg outline-blue-300"
          value={formData.name}
          onChange={handleChange}
          />

        <label htmlFor="email" className="text-xl font-medium jakarta-font">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          className="p-2 border rounded-lg outline-blue-300"
          value={formData.email}
          onChange={handleChange}
          />

        <label htmlFor="cover" className="text-xl font-medium jakarta-font">
          Cover
        </label>
        <input
          id="cover"
          name="cover"
          type="text"
          placeholder="Enter cover image URL"
          className="p-2 border rounded-lg outline-blue-300"
          value={formData.cover}
          onChange={handleChange}
          />

        <label
          htmlFor="razorpayId"
          className="text-xl font-medium jakarta-font"
          >
          Razorpay ID
        </label>
        <input
          id="razorpayId"
          name="razorpayId"
          type="text"
          placeholder="Enter Razorpay ID"
          className="p-2 border rounded-lg outline-blue-300"
          value={formData.razorpayId}
          onChange={handleChange}
          />

        <label
          htmlFor="razorpaySecret"
          className="text-xl font-medium jakarta-font"
          >
          Razorpay Secret
        </label>
        <input
          id="razorpaySecret"
          name="razorpaySecret"
          type="text"
          placeholder="Enter Razorpay Secret"
          className="p-2 border rounded-lg outline-blue-300"
          value={formData.razorpaySecret}
          onChange={handleChange}
          />

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
          Save
        </button>
      </form>
    </div>
            </>
  );
};

export default UpdateProfile;
