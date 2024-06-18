import React from "react";
import "./MainPage.css";
import leisure from "../../assets/leisure.png";
import activism from "../../assets/activism.png";
import mba from "../../assets/mba.png";
import philosophy from "../../assets/philosophy.png";
import pencil from "../../assets/pencil.png";
import arrowback from "../../assets/back.png";
import Nav from "../../components/Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faLocationDot,
  faPen,
  faExclamationCircle,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/Card/Card";
import visibility from "../../assets/visibility.png";
import google from "../../assets/search.png";
import facebook from "../../assets/f_logo.png";

const MainPage = () => {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between Sign In and Sign Up

  return (
    <>
      <section className="main-content w-100" style={{ height: 2477 }}>
        <div className="container-fluid p-0">
          <div
            className="hero bg-overlay container-fluid d-flex flex-column align-items-center justify-content-center"
            style={{ height: "440px", position: "relative" }}
          >
            <div className="container d-flex flex-column">
              <div className="d-flex d-lg-none justify-content-between top-buttons">
                <button className="btn">
                  <img src={arrowback} alt="back" />
                </button>
                <button className="btn group">Leave Group</button>
              </div>
            </div>

            <div className="container d-flex flex-column  content">
              <div>
                <h1 className="text-white">Computer Engineering</h1>
                <p className="text-white mb-5">
                  142,765 Computer Engineers follow this
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 sticky-lg-top bg-white">
          <Nav />
        </div>

        <section className="py-3 py-md-5 py-xl-8 mx-auto">
          <div
            style={{ maxWidth: 1040 }}
            className="container d-flex flex-column flex-lg-row gap-5 px-0"
          >
            <div className="flex-fill">
              <Card />
            </div>

            <div
              className="d-flex flex-column align-items-center gy-4 gy-lg-0 d-none d-md-flex"
              style={{ width: 300 }}
            >
              <div className="d-flex flex-row" style={{ width: 234 }}>
                <div className="d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <input
                    type="text"
                    placeholder="Enter Your Location"
                    className="form-control"
                  />
                </div>
                <button className="btn bg-white border-0">
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </div>
              <div className="border-top my-3" style={{ width: 243 }}></div>
              <div className="mt-4 d-flex gap-2" style={{ width: 243 }}>
                <FontAwesomeIcon icon={faExclamationCircle} />
                <p className="small">
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>
              <div className="recommended-groups d-flex gap-2 justify-content-around mt-2">
                <FontAwesomeIcon icon={faThumbsUp} />
                <span className="text-recommended">Recommended Groups</span>
              </div>
              <div className="d-flex flex-column gap-2" style={{ width: 243 }}>
                {[
                  { src: leisure, label: "Leisure" },
                  { src: activism, label: "Activism" },
                  { src: mba, label: "MBA" },
                  { src: philosophy, label: "Philosophy" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-between mt-2 gap-5"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <img src={item.src} alt={item.label} />
                      <div>{item.label}</div>
                    </div>
                    <div>
                      <a
                        className="btn btn-outline-primary rounded-5 following d-flex align-items-center"
                        href="/follow"
                      >
                        Follow
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="see-more mt-5">
                <button className="btn text-primary text-capitalize">
                  see more...
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div>
        <button
          data-toggle="modal"
          type="button"
          data-target="#exampleModalLong"
          className="circle position-fixed d-flex justify-content-center align-items-center btn d-md-none d-block"
        >
          <img src={pencil} alt="Open Modal" />
        </button>

        <div
          className="modal bottom fade"
          id="exampleModalLong"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {isSignIn ? "Welcome back!" : "Create Account"}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="">
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
                              className="form-control rounded-0 custom-inpu custom-grey-bg"
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

                      <div className=" d-flex justify-content-between align-items-center">
                        <button
                          className="btn btn-primary w-50 rounded-5 d-flex justify-content-center align-items-center mb-4"
                          data-bs-dismiss="modal"
                        >
                          {isSignIn ? "Sign In" : "Create Account"}
                        </button>
                        <p
                          className="btn text-decoration-underline "
                          onClick={() => setIsSignIn(!isSignIn)}
                        >
                          {isSignIn ? "or, Create Account" : "or, Sign In"}
                        </p>
                      </div>
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
                        <button className="btn   text-center forgot mt-4">
                          Forgot Password?
                        </button>
                      )}
                    </div>
                  </div>

                  <div className=" p-3">
                    {!isSignIn && (
                      <p className=" text-center">
                        By signing up, you agree to our Terms &amp; conditions,
                        Privacy policy
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
