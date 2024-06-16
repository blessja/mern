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

        <section
          className="py-3 py-md-5 py-xl-8 mx-auto"
          style={{ maxWidth: 1040 }}
        >
          <div className="container d-flex flex-column flex-lg-row gap-5">
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
        <button className="circle-write-post position-fixed d-flex justify-content-center align-items-center btn d-md-none d-block">
          <img src={pencil} />
        </button>
      </div>
    </>
  );
};

export default MainPage;
