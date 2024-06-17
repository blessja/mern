import React from "react";
import { useState } from "react";

import atg from "../../assets/atg_illustration.png";
import visibility from "../../assets/visibility.png";
import google from "../../assets/search.png";
import facebook from "../../assets/f_logo.png";

function RegistrationModal() {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between Sign In and Sign Up

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
                <div className="row">
                  <div className="col">
                    <div className="d-flex flex-column ">
                      {!isSignIn && (
                        <div className="">
                          <div className="d-flex">
                            <input
                              type="text"
                              className="form-control rounded-0 custom-input custom-grey-bg"
                              placeholder="First Name"
                            />
                            <input
                              type="text"
                              className="form-control rounded-0 custom-input custom-grey-bg"
                              placeholder="Last Name"
                            />
                          </div>
                          <input
                            type="email"
                            className="form-control rounded-0 custom-input custom-grey-bg"
                            placeholder="Email"
                          />
                          <div className="d-flex align-items-center justify-content-between position-relative">
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
                          <input
                            type="password"
                            className="form-control rounded-0 mb-4 custom-input custom-grey-bg"
                            placeholder="Confirm password"
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
                      >
                        {isSignIn ? "Sign In" : "Create Account"}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationModal;
