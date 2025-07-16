import React, { useState } from "react";
import Footer from "../layout/Footer";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Simple email regex for validation
  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      // Simulate login (replace with real API call)
      setTimeout(() => {
        setLoading(false);
        alert("Logged in! (Replace with real login logic)");
      }, 1000);
    }
  };

  return (
    <>
      <div className="p-6 rounded-lg text-white flex flex-col gap-6 ">
        <div className="flex flex-col gap-4">
          <p className="text-xl">Welcome Back 👋🏻</p>
          <p className="text-sm">
            Today is a new day. It's your day. You shape it. Sign in to start
            managing your projects.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 align-middle">
          <div>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border text-[#8897AD] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B3995E] focus:border-transparent"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 text-[#8897AD] bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B3995E] focus:border-transparent"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <div>
            <p>
              <a
                href="/forgotpassword"
                className="text-white float-end hover:underline text-sm"
              >
                Forgot Password?
              </a>
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-[#B3995E] text-black py-2 rounded-md  cursor-pointer"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <p className="login-or">
          <span>or</span>
        </p>
        <div>
          <button
            type="button"
            className=" flex justify-center align-middle gap-4 w-full bg-white text-black py-2 rounded-md border border-gray-300 hover:bg-gray-100"
            disabled={loading}
            onClick={() => alert("Google login not implemented")}
          >
            <img src="./assets/google-icon.png" alt="google icon" className="h-[20px] m-0"/>
            Login with Google
          </button>
        </div>

        <div className="text-sm">
          <p className="text-white text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#B3995E] hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;