import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/AccessAlarm";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-taiga-46834.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const showAbleProducts = products.slice(0, 6);
  return (
    <div className="container">
      <h1 className="heading text-success text-center pt-5">
        OUR CAR COLLECTION
      </h1>
      {!products[0] && (
        <div className="d-flex align-items-center my-5 py-5">
          <CircularProgress className="mx-auto" />
        </div>
      )}
      {products[0] && (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 py-5">
            {showAbleProducts.map((singleCar) => (
              <div key={singleCar._id} className="col">
                <div className="card shadow" style={{ minHeight: "620px" }}>
                  <div className="card bg-dark text-white">
                    <img
                      src={singleCar.image}
                      className="card-img img-fluid"
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
                            {singleCar.car_price}
                          </h5>
                        </div>
                        <div className="footer">
                          <p className="my-0 mx-3 p-2">
                            ({singleCar.review} Reviews)
                            <br />
                            <Rating
                              name="half-rating-read"
                              value={`${singleCar.rating}`}
                              precision={0.5}
                              readOnly
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{singleCar.car_name}</h5>
                    <h6>Price: ${singleCar.car_price}</h6>
                    <p className="card-text fw-bold text-secondary pt-2">
                      {singleCar?.detail?.slice(0, 250)}{" "}
                      <Link to={`/details/${singleCar._id}`}>
                        <small>...show more</small>
                      </Link>
                    </p>
                  </div>
                  <div
                    className="d-flex"
                    style={{ backgroundColor: "#dbe3e3" }}
                  >
                    <Link
                      to={`/details/${singleCar._id}`}
                      className="w-50 text-center my-2"
                    >
                      <button className="btn btn-outline-info">
                        Detail <i className="fas fa-info-circle"></i>
                      </button>
                    </Link>
                    <Link
                      to={`/details/${singleCar._id}#Form`}
                      className="w-50 text-center my-2"
                    >
                      <button className="btn btn-outline-warning">
                        BUY NOW <i className="fas fa-money-check-alt"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="d-flex align-items-center">
        <Link to="/allProducts" className="text-center mx-auto mb-4">
          <button className="btn btn-outline-info">
            See all <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
