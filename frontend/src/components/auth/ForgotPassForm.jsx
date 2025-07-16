import React, { useState } from "react";
import Footer from "../layout/Footer";


const ForgotPassForm = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Simulate sending reset email (replace with real API call)
      setSubmitted(true);
    }
  };

  return (
    <>
      <div className="p-6 rounded-lg text-white flex flex-col gap-6 ">
        <div className="flex flex-col gap-4">
          <p className="text-xl uppercase">FORGOT PASSWORD</p>
          <p className="text-sm">
            No worries — it happens! Enter your email to reset your password and get back to managing your projects.
          </p>
        </div>

        {submitted ? (
          <div className="text-green-400 text-sm mt-4">
            If this email is registered, you will receive a password reset link.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col align-middle">
            <div>
              <label htmlFor="email">E-mail address</label>
              <input
                type="email"
                id="email"
                className="mt-3 block w-full px-3 py-2 border text-[#8897AD] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B3995E] focus:border-transparent"
                placeholder="Example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-[#B3995E] text-black py-2 rounded-md cursor-pointer"
            >
              Send Reset Link
            </button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassForm;