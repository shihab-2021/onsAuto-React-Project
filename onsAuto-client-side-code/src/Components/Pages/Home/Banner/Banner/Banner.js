import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import Carousel from "../Carousel/Carousel";
import "./Banner.css";

const Banner = () => {
  const { user } = useAuth();
  return (
    <div
      style={{
        minHeight: "400px",
        background:
          "linear-gradient(#00000094, #00000094), url(https://i.ibb.co/BBGNRws/2018-rolls-royce-phantom-viii-first-drive-review-car-and-driver-photo-693026-s-original.jpg) no-repeat center center / cover",
      }}
    >
      <div className="row align-items-center container mx-auto">
        <div className="col-12 col-md-6">
          <div className="short-about p-2 rounded mt-2">
            <h1 className="logo mt-2">
              <span className="text-danger">o</span>
              <span className="text-warning">n</span>
              <span className="text-info">s</span>
              <span className="text-success">Auto</span>
            </h1>
            <h4 className="slogan text-light">
              Your Choice is Our Collection...
            </h4>
            <h6 className="text-info tw-bold pe-5 my-4 me-5">
              Step inside your comfort zone. We post our lowest price on the
              window of every vehicle. Also we have free annual engine
              inspection with our Lifetime Engine Guarantee.
            </h6>
            <div className="my-2">
              {!user?.email && (
                <Link
                  className="me-3"
                  to="/login"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "slategray",
                    }}
                    variant="contained"
                  >
                    Login
                  </Button>
                </Link>
              )}
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "crimson",
                  }}
                >
                  About us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 py-3">
          <Carousel></Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
