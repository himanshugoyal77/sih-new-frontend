import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../config/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../context/userSlice";
import { Spin } from "antd";

import Lottie from "lottie-react";
import otpAnimation from "../assets/lottie/animation_lncv0j49.json";
import verifyAnimation from "../assets/lottie/animation_lncv2x5z.json";

const Otp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        phoneNumber: ph,
      });
      console.log(res);
      if (res.status === 200) {
        dispatch(setUserDetails(res.data));
        alert("User already exists");
        return true;
      }
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  function onCaptchVerify() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
          console.log(response);
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      }
    );
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    console.log("phone", ph);
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        const result = await getUser();
        if (result === true) {
          setLoading(false);
          navigate("/", {
            state: { phoneNumber: ph },
            replace: true,
          });
          return;
        }
        navigate("/register", {
          state: { phoneNumber: ph },
          replace: true,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section
      id="otp"
      className="flex items-center justify-center gap-10 h-screen"
    >
      {!user && <Lottie animationData={otpAnimation} loop={true} />}
      <div className="">
        <Toaster toastOptions={{ duration: 4000 }} />
        {showOTP ? (
          <div className="hidden"></div>
        ) : (
          <div className="ml-12 mb-4" id="recaptcha-container"></div>
        )}
        {user ? (
          <Lottie animationData={verifyAnimation} loop={true} />
        ) : (
          <div className="bg-white w-96 flex flex-col gap-4 border rounded-lg py-14 px-10 shadow-md">
            <h1 className="text-center leading-normal font-thin text-2xl mb-6">
              Welcome to{" "}
              <span className="text-center leading-normal font-bold text-3xl mb-6">
                Nyay-Sevak
              </span>
            </h1>
            {showOTP ? (
              <>
                <div className="bg-gray-200 shadow shadow-gray-400  w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label htmlFor="otp" className="font-bold text-xl  text-center">
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-black w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="bg-gray-200 shadow shadow-gray-400  w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <label htmlFor="" className="font-bold text-xl  text-center">
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  className="bg-black w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Otp;
