import {
  Container,
  Dropdown,
  DropdownButton,
  Image,
  Nav,
  Navbar,
  Form,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import myImage from "../../assets/whole.png";
import atg from "../../assets/atg_illustration.png";
import visibility from "../../assets/visibility.png";
import google from "../../assets/search.png";
import search_bar from "../../assets/search_bar.png";
import facebook from "../../assets/f_logo.png";
import { AuthState } from "../../context/AuthProvider";
import ProfileModal from "../ProfileModal/ProfileModal";

import "./NavigationBar.css";

const NavigationBar = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = AuthState();

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    setAuth(null);
    return navigate("/login");
  };

  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between Sign In and Sign Up
  return (
    <>
      <Navbar collapseOnSelect expand="md" variant="dark" id="nav">
        <Container className=" d-none d-lg-flex align-items-center justify-content-between p-3">
          <div></div>
          <Navbar.Brand as={Link} to="/" style={{ marginRight: 300 }}>
            <img
              alt="mern"
              src={myImage}
              width="163"
              height="24"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <form className="d-flex" style={{ width: 360, borderRadius: 21 }}>
            <button className="search" type="submit">
              <img
                alt="Search"
                src={search_bar}
                style={{ width: 22, height: 22 }}
              />
            </button>
            <input
              className="form-control custom-input-search"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
          </form>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            {auth ? (
              <DropdownButton
                variant=""
                align="end"
                className="me-2"
                title={
                  <Image
                    id="profileDropdownIcon"
                    src={auth.profilePic}
                    alt="Navbar profile image"
                    roundedCircle
                  />
                }
              >
                <Dropdown.Item as="button">Profile</Dropdown.Item>
                <ProfileModal />
                <Dropdown.Divider />
                <Dropdown.Item as="button" onClick={logoutHandler}>
                  Log out
                </Dropdown.Item>
              </DropdownButton>
            ) : (
              <Nav.Item>
                <button
                  type="button"
                  className="btn p-0 m-0 custom-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Create account.{" "}
                  <span className="ms-2 text-primary fw-bold">It's free</span>
                </button>
              </Nav.Item>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
                <button className="btn" onClick={() => setIsSignIn(!isSignIn)}>
                  {isSignIn
                    ? "Don't have an account? Create Account"
                    : "Already have an account? Sign In"}
                </button>
              </div>
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <div className="d-flex flex-column gap-2">
                      <input
                        type="email"
                        className="form-control custom-input"
                        placeholder="Email"
                      />
                      <div className="d-flex align-items-center justify-content-between position-relative">
                        <input
                          type="password"
                          className="form-control custom-input"
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
                      {isSignIn && (
                        <input
                          type="password"
                          className="form-control mb-4 custom-input"
                          placeholder="Confirm password"
                        />
                      )}
                      {!isSignIn && (
                        <>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="First Name"
                          />
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Last Name"
                          />
                        </>
                      )}
                      <button
                        className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
                        data-bs-dismiss="modal"
                      >
                        {isSignIn ? "Sign In" : "Sign Up"}
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
                        <button className="btn d-none d-lg-block text-center forgot">
                          Forgot Password?
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex flex-column">
                      <img src={atg} alt="atg-illustration" />
                      <p className="info-signup">
                        By signing up, you agree to our Terms &amp; conditions,
                        Privacy policy
                      </p>
                    </div>
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

export default NavigationBar;
