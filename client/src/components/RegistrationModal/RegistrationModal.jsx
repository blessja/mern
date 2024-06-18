import React from "react";
import { useState } from "react";
import { Notify } from "../../utils";
import { useNavigate } from "react-router-dom";
import atg from "../../assets/atg_illustration.png";
import visibility from "../../assets/visibility.png";
import google from "../../assets/search.png";
import facebook from "../../assets/f_logo.png";
import { AuthState } from "../../context/AuthProvider";
import { Spinner } from "react-bootstrap";

function RegistrationModal() {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between Sign In and Sign Up

  const [credentials, setCredentials] = useState({
    name: "",
    last: "",
    email: "",
    password: "",
    confirmPassword: "",
    // profilePic: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { setAuth } = AuthState();

  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // If any field is missing
    if (
      !credentials.name ||
      !credentials ||
      !credentials.email ||
      !credentials.password ||
      !credentials.confirm
    ) {
      setIsLoading(false);
      return Notify("Please Fill all the Feilds", "warn");
    }

    // If password and confirm password doesn't match
    if (credentials.password !== credentials.confirm) {
      setIsLoading(false);
      return Notify("Passwords Do Not Match", "warn");
    }

    // If password is less than 8 characters
    if (credentials.password.length < 8) {
      setIsLoading(false);
      return Notify("Password must be at least 8 characters", "warn");
    }

    try {
      // Register user
      const response = await fetch(
        "https://mern-2-lu3d.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credentials.name,
            last: credentials.last,
            email: credentials.email,
            password: credentials.password,
            // profilePic: credentials.profilePic,
          }),
        }
      );
      const data = await response.json();

      if (data.success) {
        localStorage.setItem("auth", JSON.stringify(data)); // Save auth details in local storage
        setAuth(data);
        setIsLoading(false);
        navigate("/"); // Go to home page
        return Notify("Your account has been successfully created", "success");
      } else {
        setIsLoading(false);
        return Notify(data.error, "error");
      }
    } catch (error) {
      setIsLoading(false);
      return Notify("Internal server error", "error");
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-content">
            <div className="modal-header custom-modal-header d-flex justify-content-center mb-4 ">
              "Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼"
            </div>

            <div className="modal-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="d-flex fw-bold">
                  {isSignIn ? "Sign In" : "Create Account"}
                </h4>
                <p className="btn" onClick={() => setIsSignIn(!isSignIn)}>
                  {isSignIn
                    ? "Don't have an account? Create Account"
                    : "Already have an account? "}
                  {!isSignIn && (
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "blue",
                      }}
                    >
                      Sign In
                    </span>
                  )}
                </p>
              </div>
              <div className="container text-center">
                <form action="Post" onSubmit={registerHandler}>
                  <div className="row">
                    <div className="col">
                      <div className="d-flex flex-column ">
                        {!isSignIn && (
                          <div className="">
                            <div className="d-flex">
                              <input
                                type="text"
                                name="name"
                                className="form-control rounded-0 custom-input custom-grey-bg"
                                placeholder="First Name"
                                value={credentials.name}
                                onChange={(e) => handleCredentials(e)}
                              />
                              <input
                                type="text"
                                name="last"
                                className="form-control rounded-0 custom-input custom-grey-bg"
                                placeholder="Last Name"
                                value={credentials.last}
                                onChange={(e) => handleCredentials(e)}
                              />
                            </div>
                            <input
                              type="email"
                              name="email"
                              className="form-control rounded-0 custom-input custom-grey-bg"
                              placeholder="Email"
                              value={credentials.email}
                              onChange={(e) => handleCredentials(e)}
                            />
                            <div className="d-flex align-items-center justify-content-between position-relative">
                              <input
                                name="password"
                                type="password"
                                className="form-control rounded-0 custom-input custom-grey-bg"
                                placeholder="Password"
                                value={credentials.password}
                                onChange={(e) => handleCredentials(e)}
                              />

                              <button
                                className="btn position-absolute"
                                style={{ right: 10 }}
                              >
                                <img
                                  src={visibility}
                                  alt="eye"
                                  width="18px"
                                  height="18px"
                                />
                              </button>
                            </div>
                            <input
                              type="password"
                              name="confirm"
                              className="form-control rounded-0 mb-4 custom-input custom-grey-bg"
                              placeholder="Confirm password"
                              value={credentials.confirm}
                              onChange={(e) => handleCredentials(e)}
                            />
                          </div>
                        )}

                        {isSignIn && (
                          <div>
                            <input
                              type="email"
                              className="form-control rounded-0 custom-input custom-grey-bg"
                              placeholder="Email"
                            />

                            <div className="d-flex align-items-center justify-content-between position-relative mb-4">
                              <input
                                type="password"
                                className="form-control rounded-0 custom-input custom-grey-bg"
                                placeholder="Password"
                              />

                              <button
                                className="btn position-absolute"
                                style={{ right: 10 }}
                              >
                                <img
                                  src={visibility}
                                  alt="eye"
                                  width="18px"
                                  height="18px"
                                />
                              </button>
                            </div>
                          </div>
                        )}

                        <button
                          className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
                          data-bs-dismiss="modal"
                          type="submit"
                          disabled={isLoading}
                          onClick={registerHandler}
                        >
                          {isLoading ? (
                            <Spinner
                              animation="border"
                              role="status"
                              size="sm"
                            />
                          ) : isSignIn ? (
                            "Sign In"
                          ) : (
                            "Create Account"
                          )}
                        </button>

                        <div className="d-flex flex-column gap-2">
                          <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
                            <img src={facebook} alt="facebook" />
                            Sign In with Facebook
                          </button>
                          <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                            <img src={google} alt="google" />
                            Sign In with Google
                          </button>
                        </div>
                        {isSignIn && (
                          <button className="btn d-none d-lg-block text-center forgot mt-4">
                            Forgot Password?
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="col">
                      <div className="d-flex flex-column">
                        <img src={atg} alt="atg-illustration" />
                        {!isSignIn && (
                          <p className="info-signup">
                            By signing up, you agree to our Terms &amp;
                            conditions, Privacy policy
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationModal;
