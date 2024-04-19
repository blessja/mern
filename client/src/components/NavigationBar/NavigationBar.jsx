import { useState } from "react";
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

import IMAGES from "../../assets"; // Importing images from single "IMAGES" object
import myImage from "../../assets/whole.png";
import { AuthState } from "../../context/AuthProvider";
import ProfileModal from "../ProfileModal/ProfileModal";

import "./NavigationBar.css";

const NavigationBar = () => {
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();
  const { auth, setAuth } = AuthState();

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    setAuth(null);
    return navigate("/login");
  };

  return (
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
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
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
              <Dropdown.Item as="button" onClick={() => setModalShow(true)}>
                Profile
              </Dropdown.Item>
              <ProfileModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <Dropdown.Divider />
              <Dropdown.Item as="button" onClick={logoutHandler}>
                Log out
              </Dropdown.Item>
            </DropdownButton>
          ) : (
            <Nav.Item>
              <span>
                Create account.
                <a href="http://localhost:3000/register" className="ms-2">
                  It's free
                </a>
              </span>
            </Nav.Item>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
