import {
  Container,
  Dropdown,
  DropdownButton,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import myImage from "../../assets/whole.png";
import search_bar from "../../assets/search_bar.png";
import { AuthState } from "../../context/AuthProvider";
import ProfileModal from "../ProfileModal/ProfileModal";
import RegistrationModal from "../RegistrationModal/RegistrationModal";

import "./NavigationBar.css";

const NavigationBar = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = AuthState();

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    setAuth(null);
    return navigate("/");
  };

  return (
    <div className=" d-none d-md-block">
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
      <RegistrationModal />
    </div>
  );
};

export default NavigationBar;
