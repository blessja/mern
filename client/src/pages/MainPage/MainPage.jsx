import React from "react";
import "./MainPage.css";
import leisure from "../../assets/leisure.png";
import activism from "../../assets/activism.png";
import mba from "../../assets/mba.png";
import philosophy from "../../assets/philosophy.png";
import arrowback from "../../assets/back.png";
import Nav from "../../components/Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPen,
  faExclamationCircle,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/Card/Card";

const MainPage = () => {
  return (
    <>
      <section
        style={{ maxWidth: "100%", height: 2477 }}
        className="main-content"
      >
        <div style={{ width: "100%" }} className=" container-fluid p-0 ">
          <div
            style={{ height: "440px" }}
            className="hero bg-overlay container-fluid d-flex flex-row align-items-center align-content-center"
          >
            <div className=" container d-flex flex-column">
              <div class="d-flex d-lg-none justify-content-between mt-3">
                <button class="btn">
                  <img src={arrowback.png} alt="back" />
                </button>
                <button class="btn group">Leave Group</button>
              </div>
              <div>
                {" "}
                <h1 className=" text-white">Computer Engineering</h1>
                <p className=" text-white mb-5">
                  142,765 Computer Engineers follow this
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <Nav />
        </div>

        <section
          style={{ maxWidth: 1040 }}
          className="py-3 py-md-5 py-xl-8 mx-auto"
        >
          <div
            style={{ width: 1140 }}
            className="container overflow-hidden gap-5 d-flex flex-row"
          >
            <Card />

            <div
              style={{ width: 300 }}
              className=" col mx-auto d-flex flex-column align-items-center gy-4 gy-lg-0"
            >
              <div style={{ width: 234 }} className="d-flex flex-row">
                <div className=" d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <input
                    type="text"
                    placeholder="Enter Your Location"
                    className=" input-text"
                  />
                </div>
                <button className=" border-0 bg-white">
                  <FontAwesomeIcon
                    icon={faPen}
                    style={{ background: "#fff" }}
                  />
                </button>
              </div>
              <div style={{ width: 243 }} className=" border border-1"></div>
              <div style={{ width: 243 }} className="toolti mt-4 d-flex  gap-2">
                <FontAwesomeIcon icon={faExclamationCircle} />
                <p style={{ fontSize: 12 }}>
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>
              <div className="recomended_groups d-flex gap-2 justify-content-around mt-2">
                <FontAwesomeIcon icon={faThumbsUp} />
                <span className="text-recommended">Recommended Groups</span>
              </div>
              <div
                div
                style={{ width: 243 }}
                className=" d-flex flex-column gap-2"
              >
                <div className=" d-flex align-content-center justify-content-between  mt-4 gap-5">
                  <div className=" d-flex align-items-center gap-2">
                    <img src={leisure} alt="" />
                    <div>Leisure</div>
                  </div>
                  <div className=" align-content-center">
                    <a
                      style={{ height: 24 }}
                      className="btn rounded-5  following d-flex align-items-center"
                      href="#"
                    >
                      Follow
                    </a>
                  </div>
                </div>

                <div className=" d-flex align-content-center justify-content-between  mt-2 gap-5">
                  <div className=" d-flex align-items-center gap-2">
                    <img src={activism} alt="" />
                    <div>Activism</div>
                  </div>
                  <div className=" align-content-center">
                    <a
                      style={{ height: 24 }}
                      className="btn rounded-5  following d-flex align-items-center"
                      href="#"
                    >
                      Follow
                    </a>
                  </div>
                </div>

                <div className=" d-flex align-content-center justify-content-between  mt-2 gap-5">
                  <div className=" d-flex align-items-center gap-2">
                    <img src={mba} alt="" />
                    <div>MBA</div>
                  </div>
                  <div className=" align-content-center">
                    <a
                      style={{ height: 24 }}
                      className="btn rounded-5  following d-flex align-items-center"
                      href="#"
                    >
                      Follow
                    </a>
                  </div>
                </div>

                <div className=" d-flex align-content-center justify-content-between  mt-2 gap-5">
                  <div className=" d-flex align-items-center gap-2">
                    <img src={philosophy} alt="" />
                    <div>Philosophy</div>
                  </div>
                  <div className=" align-content-center">
                    <a
                      style={{ height: 24 }}
                      className="btn rounded-5  following d-flex align-items-center"
                      href="#"
                    >
                      Follow
                    </a>
                  </div>
                </div>
              </div>
              <div className="see_more d-flex align-items-end">
                <button className="btn text-end mt-5 text-primary text-capitalize">
                  see more...
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default MainPage;
