import React from "react";
import nature from "../../assets/nature.jpg";
import wood from "../../assets/wood.jpg";
import car from "../../assets/car.jpg";
import proPic from "../../assets/pro_pic.png";
import eye from "../../assets/eye.png";
import share from "../../assets/share-icon.png";
import sarawest from "../../assets/Sarah_West.png";
import ronal from "../../assets/Ronal.png";
import joseph from "../../assets/Joseph.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { Image } from "react-bootstrap";

const Card = () => {
  return (
    <>
      <div className="col mx-lg-auto d-flex flex-column align-items-center gy-4 gy-lg-0">
        <div className=" flex-column d-flex border border-1 rounded rounded-2 ">
          <article>
            <div className="card border-0 d-flex flex-column">
              <img
                style={{ height: "220px" }}
                className="img-fluid bsb-scale bsb-hover-scale-up"
                loading="lazy"
                src={nature}
                alt="Nature"
              />

              <div className="card-body   bg-white p-4">
                <div className="entry-header mb-3">
                  <ul className="entry-meta list-unstyled d-flex mb-2">
                    <li>
                      <a className="link-dark text-decoration-none" href="#!">
                        ✍️ Article
                      </a>
                    </li>
                  </ul>
                  <h2 className="card-title entry-title h4 mb-0">
                    <a className="link-dark text-decoration-none" href="#!">
                      What if famous brands had regular fonts? Meet
                      RegulaBrands!
                    </a>
                  </h2>
                </div>
                <p
                  style={{ maxWidth: 692 }}
                  className="card-text entry-summary text-secondary mb-3 text-truncate overflow-hidden "
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minus eaque reprehenderit quos hic enim, aspernatur
                  praesentium quod ullam sit ipsa libero eos officia. Provident
                  eaque magnam officiis quis modi, ipsum aspernatur odio cum
                  facere ducimus temporibus iste. Illum modi cupiditate nulla
                  obcaecati, unde totam placeat doloribus. Saepe facere sequi
                  cumque?
                </p>
              </div>
              <div className="bg-white d-flex justify-content-between align-items-center  p-2">
                <div className="profile-info d-flex align-items-center gap-2">
                  <div className="profile">
                    <Image
                      roundedCircle
                      src={proPic}
                      alt=""
                      style={{ width: 48, height: 48 }}
                    />
                  </div>
                  <p className="myText fs-6 pt-3">Sarthak Kamra</p>
                </div>
                <div className="views d-flex justify-content-between align-items-center">
                  <div className="">
                    <img
                      className="pe-2"
                      style={{ width: 30, height: 30 }}
                      src={eye}
                      alt="eye"
                    />
                    <span>1.4k views</span>
                  </div>
                  <button className="btn border-0">
                    <img
                      style={{ width: 20, height: 20 }}
                      src={share}
                      alt="share icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="col-12 border border-1 rounded rounded-2 ">
          <article>
            <div className="card border-0">
              <img
                style={{ height: "220px" }}
                className="img-fluid bsb-scale bsb-hover-scale-up"
                loading="lazy"
                src={wood}
                alt="Nature"
              />

              <div className="card-body   bg-white p-4">
                <div className="entry-header mb-3">
                  <ul className="entry-meta list-unstyled d-flex mb-2">
                    <li>
                      <a className="link-dark text-decoration-none" href="#!">
                        🔬️ Education
                      </a>
                    </li>
                  </ul>
                  <h2 className="card-title entry-title h4 mb-0">
                    <a className="link-dark text-decoration-none" href="#!">
                      Tax Benefits for Investment under National Pension Scheme
                      launched by Government
                    </a>
                  </h2>
                </div>
                <p
                  style={{ maxWidth: 692 }}
                  className="card-text entry-summary text-secondary mb-3 text-truncate overflow-hidden "
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minus eaque reprehenderit quos hic enim, aspernatur
                  praesentium quod ullam sit ipsa libero eos officia. Provident
                  eaque magnam officiis quis modi, ipsum aspernatur odio cum
                  facere ducimus temporibus iste. Illum modi cupiditate nulla
                  obcaecati, unde totam placeat doloribus. Saepe facere sequi
                  cumque?
                </p>
              </div>
              <div className="bg-white d-flex justify-content-between align-items-center  p-2">
                <div className="profile-info d-flex align-items-center gap-2">
                  <div className="profile">
                    <Image
                      roundedCircle
                      src={sarawest}
                      alt=""
                      style={{ width: 48, height: 48 }}
                    />
                  </div>
                  <p className="myText fs-6 pt-3">Sarah West</p>
                </div>
                <div className="views d-flex justify-content-between align-items-center">
                  <div className="">
                    <img
                      className="pe-2"
                      style={{ width: 30, height: 30 }}
                      src={eye}
                      alt="eye"
                    />
                    <span>1.4k views</span>
                  </div>
                  <button className="btn border-0">
                    <img
                      style={{ width: 20, height: 20 }}
                      src={share}
                      alt="share icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="col-12 mt-4 border border-1 rounded rounded-2  ">
          <article>
            <div className="card border-0">
              <img
                style={{ height: "220px" }}
                className="img-fluid bsb-scale bsb-hover-scale-up"
                loading="lazy"
                src={car}
                alt="Nature"
              />

              <div className="card-body   bg-white p-4">
                <div className="entry-header mb-3">
                  <ul className="entry-meta list-unstyled d-flex mb-2">
                    <li>
                      <a className="link-dark text-decoration-none" href="#!">
                        🗓️ Meetup
                      </a>
                    </li>
                  </ul>
                  <h2 className="card-title entry-title h4 mb-0">
                    <a className="link-dark text-decoration-none" href="#!">
                      Finance & Investment Elite Social Mixer @Lujiazui
                    </a>
                  </h2>
                  <ul className=" d-flex list-unstyled align-items-center gap-5 pt-2">
                    <li className=" gap-1 align-items-center d-flex">
                      <FontAwesomeIcon icon={faCalendarDay} /> Fri, 12 Oct, 2018
                    </li>
                    <li className=" gap-1 align-items-center d-flex">
                      <FontAwesomeIcon icon={faLocationDot} /> Ahmedabad, India
                    </li>
                  </ul>
                  <button
                    style={{ width: "100%", color: "#E56135" }}
                    className="btn_link btn mb-4 "
                  >
                    Visit Website
                  </button>
                </div>
                <p
                  style={{ maxWidth: 692 }}
                  className="card-text entry-summary text-secondary mb-3 text-truncate overflow-hidden "
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minus eaque reprehenderit quos hic enim, aspernatur
                  praesentium quod ullam sit ipsa libero eos officia. Provident
                  eaque magnam officiis quis modi, ipsum aspernatur odio cum
                  facere ducimus temporibus iste. Illum modi cupiditate nulla
                  obcaecati, unde totam placeat doloribus. Saepe facere sequi
                  cumque?
                </p>
              </div>
              <div className="bg-white d-flex justify-content-between align-items-center  p-2">
                <div className="profile-info d-flex align-items-center gap-2">
                  <div className="profile">
                    <Image
                      roundedCircle
                      src={ronal}
                      alt=""
                      style={{ width: 48, height: 48 }}
                    />
                  </div>
                  <p className="myText fs-6 pt-3">Ronal Jones</p>
                </div>
                <div className="views d-flex justify-content-between align-items-center">
                  <div className="j">
                    <img
                      className="pe-2"
                      style={{ width: 30, height: 30 }}
                      src={eye}
                      alt="eye"
                    />
                    <span>1.4k views</span>
                  </div>
                  <button className="btn border-0">
                    <img
                      style={{ width: 20, height: 20 }}
                      src={share}
                      alt="share icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div
          style={{ height: "296px" }}
          className="col-12 mt-4 border border-1 rounded rounded-2  "
        >
          <article>
            <div className="card border-0">
              <div className="card-body   bg-white p-4">
                <div className="entry-header mb-3">
                  <ul className="entry-meta list-unstyled d-flex mb-2">
                    <li>
                      <a className="link-dark text-decoration-none" href="#!">
                        💼️ Job
                      </a>
                    </li>
                  </ul>
                  <h2 className="card-title entry-title h4 mb-0">
                    <a className="link-dark text-decoration-none" href="#!">
                      Software Developer
                    </a>
                  </h2>
                  <ul className=" d-flex list-unstyled align-items-center gap-5 pt-2">
                    <li className=" gap-1 align-items-center d-flex">
                      <FontAwesomeIcon icon={faCalendarDay} /> Innovaccer
                      Analytics Private Ltd.
                    </li>
                    <li className=" gap-1 align-items-center d-flex">
                      <FontAwesomeIcon icon={faLocationDot} /> Ahmedabad, India
                    </li>
                  </ul>
                  <button
                    style={{ width: "100%", color: "#02B875" }}
                    className="btn_link btn mb-1 "
                  >
                    Apply on Timesjobs
                  </button>
                </div>
              </div>
              <div className="bg-white d-flex justify-content-between align-items-center  p-2">
                <div className="profile-info d-flex align-items-center gap-2">
                  <div className="profile">
                    <Image
                      roundedCircle
                      src={joseph}
                      alt=""
                      style={{ width: 48, height: 48 }}
                    />
                  </div>
                  <p className="myText fs-6">Joseph Gray</p>
                </div>
                <div className="views d-flex justify-content-between align-items-center">
                  <div className="j">
                    <img
                      className="pe-2"
                      style={{ width: 30, height: 30 }}
                      src={eye}
                      alt="eye"
                    />
                    <span>1.4k views</span>
                  </div>
                  <button className="btn border-0">
                    <img
                      style={{ width: 20, height: 20 }}
                      src={share}
                      alt="share icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Card;
