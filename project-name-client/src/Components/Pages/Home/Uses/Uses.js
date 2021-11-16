import React from "react";
import "./User.css";

const Uses = () => {
  return (
    <div>
      <div className="container pt-5 mt-5 mb-5">
        <h3
          className="pb-3"
          style={{
            fontFamily: `"Anton", sans-serif`,
          }}
        >
          HOW IT WORKS
        </h3>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 border-bottom">
            <div className="col">
              <div className="card border-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h1 style={{ color: "goldenrod" }}>
                      <i class="fas fa-search"></i>
                    </h1>
                    <h2
                      style={{
                        fontFamily: `"Anton", sans-serif`,
                      }}
                      className="card-title ps-3"
                    >
                      FIND THE CAR IN YOUR DREAM
                    </h2>
                  </div>
                  <br />
                  <div className="d-flex align-items-center">
                    <h1 className="text-muted">1</h1>
                    <p
                      style={{
                        fontFamily: `"Anton", sans-serif`,
                      }}
                      className="ps-4 text-muted"
                    >
                      In the page Explore of{" "}
                      <span className="logo">
                        <span className="text-danger">o</span>
                        <span className="text-warning">n</span>
                        <span className="text-info">s</span>
                        <span className="text-success">Auto</span>
                      </span>
                      , you can find the exactly any type of car that you want
                      in a few minutes. Fast & Exactly !
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h1 style={{ color: "goldenrod" }}>
                      <i class="far fa-check-circle"></i>
                    </h1>
                    <h2
                      style={{
                        fontFamily: `"Anton", sans-serif`,
                      }}
                      className="card-title ps-3"
                    >
                      CHECK PRICE AND INFORMATION OF VEHICLE
                    </h2>
                  </div>
                  <br />
                  <div className="d-flex align-items-center">
                    <h1 className="text-muted">2</h1>
                    <p
                      style={{
                        fontFamily: `"Anton", sans-serif`,
                      }}
                      className="ps-4 text-muted"
                    >
                      Check price and information about vehicle. You can also
                      estimate your payment with our Financial Calculator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <h1 style={{ color: "goldenrod" }}>
                      <i class="far fa-calendar-check"></i>
                    </h1>
                    <h2
                      style={{
                        fontFamily: `"Anton", sans-serif`,
                      }}
                      className="card-title ps-3"
                    >
                      BOOK APPOINTMENTS WITH A TAP
                    </h2>
                  </div>
                  <br />
                  <div className="d-flex align-items-center">
                    <h1 className="text-muted">3</h1>
                    <p
                      style={{
                        fontFamily: `"Anton", sans-serif`,
                      }}
                      className="ps-4 text-muted"
                    >
                      Easy to make an appointments with agents or dealers.
                      Agents or dealers will call again for you in 24h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uses;
