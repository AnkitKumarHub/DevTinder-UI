import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosConfig";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axiosInstance.post("/login", {
        email,
        password,
      });

      if (res.data) {
        dispatch(addUser(res.data));
        // Force a page reload to ensure cookie is properly set
        window.location.href = "/";
        return;
      }
    } catch (err) {
      setError(err?.response?.data || "Something Went Wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axiosInstance.post("/signup", 
        { firstName, lastName, email, password }
      );

      if (res.data.data) {
        dispatch(addUser(res.data.data));
        // Force a page reload to ensure cookie is properly set
        window.location.href = "/profile";
        return;
      }
    } catch (err) {
      setError(err?.response?.data || "Something Went Wrong");
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h1 className="card-title flex justify-center my-2">
            {isLoginForm ? "LOGIN" : "SIGN UP"}
          </h1>

          {!isLoginForm && (
            <>
              <label className="input">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="text"
                  placeholder="Firstname"
                  required
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setError(""); // Clear the error when user starts typing again
                  }}
                />
              </label>
              <label className="input">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="text"
                  placeholder="Lastname"
                  required
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setError(""); // Clear the error when user starts typing again
                  }}
                />
              </label>
            </>
          )}
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              required
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
                setError(""); // Clear the error when user starts typing again
              }}
            />
          </label>
          {/* <div className="validator-hint hidden">Enter valid email address</div> */}

          {/* <div className='my-2'> */}
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              // title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(""); // Clear the error when user starts typing again
              }}
            />
          </label>
          {/* <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number
            <br />
            At least one lowercase letter
            <br />
            At least one uppercase letter
          </p> */}
          {/* </div> */}

          {error && (
            <p className="text-red-500 text-center text-sm ">{error}</p>
          )}
          <div className="card-actions justify-center my-3">
            <button
              className="btn btn-primary"
              onClick={() => {
                if (isLoginForm) {
                  handleLogin();
                } else {
                  handleSignUp();
                }
              }}
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>

          <p className="text-center mt-3 text-sm">
            <span>
              {isLoginForm ? "New User? " : "Existing User? "}
              <button
                className="text-blue-500 hover:underline hover:text-blue-600 transition-all duration-200 cursor-pointer"
                onClick={() => setIsLoginForm((value) => !value)}
              >
                {isLoginForm ? "Signup Here" : "Login Here"}
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
