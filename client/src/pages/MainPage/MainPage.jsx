import React from "react";

import "./MainPage.css";
import Nav from "../../components/Nav/Nav";

import Card from "../../components/Card/Card";

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
          <Nav />
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
            <Card />

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
