import React from "react";
import nature from "../../assets/nature.jpg";
import wood from "../../assets/wood.jpg";
import car from "../../assets/car.jpg";
import proPic from "../../assets/pro_pic.png";
import eye from "../../assets/eye.png";
import share from "../../assets/share-icon.png";
import { Image } from "react-bootstrap";
import "./MainPage.css";
import { FaEye } from "react-icons/fa";

const MainPage = () => {
  return (
    <>
      <section
        style={{ maxWidth: "100%", height: 2477 }}
        className="main-content"
      >
        <div style={{ width: "100%" }} className=" container-fluid p-0 ">
          <div style={{ height: "440px" }} className="hero bg-overlay ">
            <div
              style={{ position: "absolute", top: 358, left: 500 }}
              className=""
            >
              {" "}
              <h2 className=" text-white">Computer Engineering</h2>
              <p className=" text-white">
                142,765 Computer Engineers follow this
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div
            style={{ width: "1040px", height: "68px" }}
            className=" d-flex justify-content-between mx-auto"
          >
            <div className="items1 ">
              <ul className=" nav nav-tabs ">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    All Posts(32)
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Article
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Evernt
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Job
                  </a>
                </li>
              </ul>
            </div>
            <div className="items2 d-flex my-2 align-items-center">
              <button type="button" className=" btn btn-secondary">
                Write a Post
              </button>
              <button className="btn btn-primary ms-2 gap-2 d-flex align-items-center">
                Join Group
              </button>
            </div>
          </div>
        </div>
        <hr className=" mx-auto " style={{ maxWidth: 1040 }} />

        <section
          style={{ maxWidth: 1040 }}
          class="py-3 py-md-5 py-xl-8 mx-auto"
        >
          <div
            style={{ width: 1040 }}
            class="container overflow-hidden d-flex flex-row"
          >
            <div class="col mx-auto d-flex flex-column align-items-center gy-4 gy-lg-0">
              <div class="col-12 ">
                <article>
                  <div class="card border-0">
                    <img
                      style={{ height: "220px" }}
                      class="img-fluid bsb-scale bsb-hover-scale-up"
                      loading="lazy"
                      src={nature}
                      alt="Nature"
                    />

                    <div class="card-body   bg-white p-4">
                      <div class="entry-header mb-3">
                        <ul class="entry-meta list-unstyled d-flex mb-2">
                          <li>
                            <a
                              class="link-primary text-decoration-none"
                              href="#!"
                            >
                              ✍️ Article
                            </a>
                          </li>
                        </ul>
                        <h2 class="card-title entry-title h4 mb-0">
                          <a class="link-dark text-decoration-none" href="#!">
                            What if famous brands had regular fonts? Meet
                            RegulaBrands!
                          </a>
                        </h2>
                      </div>
                      <p
                        style={{ maxWidth: 692 }}
                        class="card-text entry-summary text-secondary mb-3 text-truncate overflow-hidden "
                      >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minus eaque reprehenderit quos hic enim,
                        aspernatur praesentium quod ullam sit ipsa libero eos
                        officia. Provident eaque magnam officiis quis modi,
                        ipsum aspernatur odio cum facere ducimus temporibus
                        iste. Illum modi cupiditate nulla obcaecati, unde totam
                        placeat doloribus. Saepe facere sequi cumque?
                      </p>
                    </div>
                    <div class="bg-white d-flex justify-content-between align-items-center  p-2">
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
                        <div className="j">
                          <img
                            style={{ width: 50, height: 50 }}
                            src={eye}
                            alt="eye"
                          />
                          <span>1.4k views</span>
                        </div>
                        <button className="btn border-0">
                          <img
                            style={{ width: 30, height: 30 }}
                            src={share}
                            alt="share icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="col-12 pt-3 ">
                <article>
                  <div class="card border-0">
                    <img
                      style={{ height: "220px" }}
                      class="img-fluid bsb-scale bsb-hover-scale-up"
                      loading="lazy"
                      src={wood}
                      alt="Nature"
                    />

                    <div class="card-body   bg-white p-4">
                      <div class="entry-header mb-3">
                        <ul class="entry-meta list-unstyled d-flex mb-2">
                          <li>
                            <a
                              class="link-primary text-decoration-none"
                              href="#!"
                            >
                              🔬️ Education
                            </a>
                          </li>
                        </ul>
                        <h2 class="card-title entry-title h4 mb-0">
                          <a class="link-dark text-decoration-none" href="#!">
                            Tax Benefits for Investment under National Pension
                            Scheme launched by Government
                          </a>
                        </h2>
                      </div>
                      <p
                        style={{ maxWidth: 692 }}
                        class="card-text entry-summary text-secondary mb-3 text-truncate overflow-hidden "
                      >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minus eaque reprehenderit quos hic enim,
                        aspernatur praesentium quod ullam sit ipsa libero eos
                        officia. Provident eaque magnam officiis quis modi,
                        ipsum aspernatur odio cum facere ducimus temporibus
                        iste. Illum modi cupiditate nulla obcaecati, unde totam
                        placeat doloribus. Saepe facere sequi cumque?
                      </p>
                    </div>
                    <div class="bg-white d-flex justify-content-between align-items-center  p-2">
                      <div className="profile-info d-flex align-items-center gap-2">
                        <div className="profile">
                          <Image
                            roundedCircle
                            src={proPic}
                            alt=""
                            style={{ width: 48, height: 48 }}
                          />
                        </div>
                        <p className="myText fs-6 pt-3">Sarah West</p>
                      </div>
                      <div className="views d-flex justify-content-between align-items-center">
                        <div className="j">
                          <img
                            style={{ width: 50, height: 50 }}
                            src={eye}
                            alt="eye"
                          />
                          <span>1.4k views</span>
                        </div>
                        <button className="btn border-0">
                          <img
                            style={{ width: 30, height: 30 }}
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
            <div
              style={{ width: 300 }}
              className="side-nav  ps-lg-5 d-flex justify-content-center"
            >
              <h1>side nav</h1>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default MainPage;
