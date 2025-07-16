import React, { useState } from "react";
import Footer from "../layout/Footer";


const DetailsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!date) newErrors.date = "Date is required";
    else if (parseInt(date) < 1 || parseInt(date) > 31) newErrors.date = "Invalid date";
    if (!month) newErrors.month = "Month is required";
    else if (parseInt(month) < 1 || parseInt(month) > 12) newErrors.month = "Invalid month";
    if (!year) newErrors.year = "Year is required";
    else if (parseInt(year) < 1900 || parseInt(year) > new Date().getFullYear()) newErrors.year = "Invalid year";
    if (!gender) newErrors.gender = "Gender is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit logic here (e.g., send to backend)
      alert("Details saved! (Replace with real logic)");
    }
  };

  return (
    <>
      <div className="p-6 rounded-lg text-white flex flex-col gap-4 ">
        <div className="flex flex-col gap-4">
          <p className="text-xl uppercase">Almost There</p>
          <p className="text-sm">HOW SHALL WE ADDRESS YOU?</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 align-middle">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="mt-1 block w-full px-3 py-2 border text-[#8897AD] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B3995E] focus:border-transparent"
              placeholder="Enter your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              className="mt-1 block w-full px-3 py-2 border text-[#8897AD] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B3995E] focus:border-transparent"
              placeholder="Enter your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
          </div>
          <div>
            <label htmlFor="email">E-mail address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border text-[#8897AD] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B3995E] focus:border-transparent"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="w-full">
            <label htmlFor="date" className="">
              Date of Birth
            </label>
            <div className="flex max-w-[100%] gap-2">
              <input
                type="number"
                id="date"
                className="mt-1 block w-[33%] px-3 py-2 text-[#8897AD] bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B3995E] focus:border-transparent "
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="number"
                id="month"
                className="mt-1 block w-[33%] px-3 py-2 text-[#8897AD] bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B3995E] focus:border-transparent"
                placeholder="Month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
              <input
                type="number"
                id="year"
                className="mt-1 block w-[33%] px-3 py-2 text-[#8897AD] bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B3995E] focus:border-transparent"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            {(errors.date || errors.month || errors.year) && (
              <p className="text-red-400 text-xs mt-1">
                {[errors.date, errors.month, errors.year].filter(Boolean).join(" ")}
              </p>
            )}
          </div>
          <div>
            <div className="flex flex-col gap-2 mb-4">
              <p>Gender preference</p>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Male
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Female
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Other"
                  checked={gender === "Other"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Other
              </label>
              {errors.gender && <p className="text-red-400 text-xs mt-1">{errors.gender}</p>}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-[#B3995E] text-black py-2 rounded-md  cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default DetailsForm;