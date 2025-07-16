import React, { useState, useRef } from 'react';
import Footer from "../layout/Footer";



const VerifyCodeForm = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    alert("OTP entered: " + otp.join(''));
  };

  return (
    <>
      <div className="p-6 rounded-lg text-white flex flex-col gap-6 ">
        <div className="flex flex-col gap-4">
          <p className="text-xl uppercase">VERIFICATION CODE</p>
          <p className="text-sm">
            We have sent the verification code to your email address
          </p>
        </div>

        <div className="flex justify-between gap-2 mb-4 px-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 text-center border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B3995E]"
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-[#B3995E] text-black py-3 rounded-4xl  cursor-pointer"
        >
          Confirm
        </button>
      </div>
      <Footer />
    </>
  );
};

export default VerifyCodeForm;
