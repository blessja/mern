import React from "react";
import group from "../../assets/group.png";
import vector from "../../assets/Vector.png";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <div
        style={{ width: "1040px", height: "68px" }}
        className=" d-none d-lg-flex d-flex justify-content-between mx-lg-auto"
      >
        <div className="items1 ">
          <ul className=" nav nav-tabs ">
            <li className="nav-item">
              <a className="nav-link active" href="/allpost">
                All Posts(32)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/article">
                Article
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/event">
                Evernt
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/education">
                Education
              </a>
            </li>
            <li style={{ paddingRight: 220 }} className="nav-item">
              <a className="nav-link" href="/job">
                Job
              </a>
            </li>

            <li className="nav-item right-nav-item">
              <button
                style={{ background: "#EDEEF0" }}
                type="button"
                className=" btn "
              >
                Write a Post
                <img
                  className=" p-2"
                  style={{ width: "22px", height: "22px" }}
                  src={vector}
                  alt=""
                />
              </button>
            </li>

            <li className="nav-item">
              <button className="btn btn-primary ms-2 gap-2 d-flex align-items-center">
                <img src={group} alt="Join group" />
                Join Group
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center justify-content-between d-md-none">
        <p className="m-0">Posts(368)</p>
        <button style={{ background: "#EDEEF0" }} type="button" className="btn">
          Filter: All
          <img
            className="ml-2"
            style={{ width: "10px", height: "10px" }}
            src={vector}
            alt=""
          />
        </button>
      </div>
    </>
  );
};

export default Nav;
