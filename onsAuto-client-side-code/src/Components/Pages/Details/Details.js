import {
  Button,
  CircularProgress,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import StarIcon from "@mui/icons-material/AccessAlarm";
import "./Details.css";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import Review from "../Dashboard/Review/Review";

const Details = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [bookingData, setBookingData] = useState({});
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newCarData = { ...bookingData };
    newCarData[field] = value;
    setBookingData(newCarData);
  };
  const handleProductDateSubmit = (e) => {
    const booking = {
      ...bookingData,
      name: user.displayName,
      email: user.email,
      condition: "pending",
      car_Detail: itemDetail[0],
    };
    fetch("https://sleepy-taiga-46834.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert("Order SuccessFull ");
          document.getElementById("Form").reset();
          history.push("/dashboard/myOrders");
        }
      });

    e.preventDefault();
  };

  useEffect(() => {
    fetch("https://sleepy-taiga-46834.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch();
  }, []);

  const itemDetail = data.filter((td) => td._id === id);

  return (
    <div>
      <Navigation></Navigation>
      {!itemDetail[0] && (
        <div className="d-flex align-items-center my-5 py-5">
          <CircularProgress className="mx-auto" />
        </div>
      )}
      {itemDetail[0] && (
        <div>
          <section className="container py-4">
            <h2 style={{ fontFamily: `"Yanone Kaffeesatz", sans-serif` }}>
              <small>
                <i className="fas fa-car"></i>
              </small>
              {"  "}
              {itemDetail[0]?.car_name}
            </h2>
            <div className="row">
              <div className="col-sm-12 col-md-7">
                <div className="card border-0 bg-dark text-white">
                  <img
                    src={itemDetail[0]?.image}
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="card-img-overlay p-0">
                    <div>
                      <div className="d-flex justify-content-between">
                        <p></p>
                        <h5
                          className="p-1 my-2"
                          style={{ backgroundColor: "#465c57" }}
                        >
                          <span className="text-danger">$</span>
                          {itemDetail[0]?.car_price}
                        </h5>
                      </div>
                      <div className="footer">
                        <p className="my-0 mx-3 p-2">
                          ({itemDetail[0]?.review} Reviews)
                          <br />
                          <Rating
                            name="text-feedback"
                            value={`${itemDetail[0]?.rating}`}
                            readOnly
                            precision={0.5}
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <h6 className="text-secondary tw-bold">PRICE</h6>
                <h4 className="border-danger border-bottom d-inline-block mb-4 ">
                  <span className="text-danger">$</span>
                  {itemDetail[0]?.car_price}
                </h4>
                <h6 className="text-secondary tw-bold">TYPE</h6>
                <h5 className="border-danger border-bottom d-inline-block mb-4">
                  {itemDetail[0]?.type}
                </h5>
                <h6 className="text-secondary tw-bold">INTERIOR</h6>
                <h5 className="border-danger border-bottom d-inline-block mb-4">
                  {itemDetail[0]?.interior}
                </h5>
                <h6 className="text-secondary tw-bold">ENGINE</h6>
                <h5 className="border-danger border-bottom d-inline-block mb-4">
                  {itemDetail[0]?.engin}
                </h5>
              </div>
            </div>
            <h6 className="pt-4 fw-bold text-secondary">
              <span className="text-dark fs-5">Car Detail:</span>
              <br />
              {itemDetail[0]?.detail}
            </h6>
          </section>
          <div
            id="show"
            style={{
              minHeight: "450px",
              backgroundImage: `url(${itemDetail[0]?.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <div className="container">
              <form
                id="Form"
                className="my-5 p-4 rounded shadow mx-auto text-light"
                style={{ maxWidth: "50rem", backgroundColor: "#ffffff8c" }}
                onSubmit={handleProductDateSubmit}
              >
                <Typography
                  style={{
                    color: "deeppink",
                    textAlign: "center",
                    fontFamily: `"Yanone Kaffeesatz", sans-serif`,
                  }}
                  sx={{ my: 3 }}
                  variant="h3"
                  gutterBottom
                >
                  BUY NOW
                </Typography>
                <Typography variant="h6" className="text-primary fw-bold">
                  Hi <span className="text-success">{user.displayName}</span>,
                  your selected car model is{" "}
                  <span className="text-success">
                    {itemDetail[0]?.car_name}
                  </span>
                  .<br />
                  <span className="text-danger">
                    Please fill up the text field to parches the car.
                  </span>
                  Thank you.
                </Typography>
                <TextField
                  sx={{ width: "95%", m: 1 }}
                  id="standard-basic"
                  label="Your Name"
                  focused
                  value={`${user.displayName}`}
                  color="success"
                  name="name"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "95%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  color="success"
                  focused
                  value={`${user.email}`}
                  name="email"
                  variant="standard"
                />
                <div id="emailHelp" className="form-text text-primary">
                  We will take your name and email by default.
                </div>
                <TextField
                  sx={{ width: "95%", m: 1 }}
                  id="standard-basic"
                  label="Phone"
                  color="success"
                  name="phone"
                  required
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "95%", m: 1 }}
                  id="standard-basic"
                  color="success"
                  required
                  label="Your Location"
                  name="location"
                  onBlur={handleOnBlur}
                  variant="standard"
                />

                <Button
                  sx={{ width: "95%", m: 1 }}
                  style={{
                    backgroundColor: "crimson",
                  }}
                  type="submit"
                  variant="contained"
                >
                  BUY
                </Button>
                {/* {isLoading && <CircularProgress />} */}
              </form>
            </div>
          </div>
          <div className="container my-5">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="card shadow ">
                  <div className="card-body">
                    <h1 className="card-title">Contact Us</h1>
                    <hr className="w-50 text-danger p-1 rounded-pill" />
                    <br />
                    <h5 className="card-text">Phone : +(143) 1846-367</h5>
                    <br />
                    <h5 className="card-text">Office : +(423) 4805-567</h5>
                    <br />
                    <h5 className="card-text">E-mail : onsAuto@yahoo.com</h5>
                    <br />
                    <h5>
                      Social :
                      <i
                        className="fa-brands fa-facebook-f mx-2 text-primary"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-brands fa-twitter mx-2 text-info"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-brands fa-instagram mx-2 text-danger"
                        aria-hidden="true"
                      ></i>
                      <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
                    </h5>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-md-6 pe-2 d-flex align-items-center justify-content-center">
                <div className="p-4 bgBlue mt-5 d-flex">
                  <div className="imgIcon me-4">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="text-light">
                    <h3>
                      Hotline <span className="text-danger">(24 hour)</span>
                    </h3>
                    <p>+003856543746</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-3" style={{ backgroundColor: "#dbe3e3" }}>
            <div>
              <Review></Review>
            </div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Details;
