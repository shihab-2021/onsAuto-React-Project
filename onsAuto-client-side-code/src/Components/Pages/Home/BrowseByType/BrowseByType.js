import React from "react";

const BrowseByType = () => {
  return (
    <div className="bg-secondary">
      <div
        style={{
          fontFamily: `"Anton", sans-serif`,
        }}
        className="container py-5"
      >
        <h2 className="text-light">BROWSE BY TYPES</h2>
        <div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 ">
            <div className="col">
              <img
                src="https://i.ibb.co/Btkb7x9/8bedc0511bcb4397a94d3c72262cdc6c.jpg"
                className="card-img img-fluid"
                alt="..."
              />
              <div>
                <h5 className="m-0 fs-3">CONVERTIBLE</h5>
                <p className="text-light">2 Cars</p>
              </div>
            </div>
            <div className="col">
              <img
                src="https://i.ibb.co/2vnTg13/4474fa5904a4428d9c65e13ca63b1644.jpg"
                className="img-fluid"
                alt="..."
              />
              <div>
                <h5 className="m-0 fs-3">COUPLE</h5>
                <p className="text-light">5 Cars</p>
              </div>
            </div>
            <div className="col">
              <img
                src="https://i.ibb.co/GRWt278/image.png"
                className="card-img img-fluid"
                alt="..."
              />
              <div>
                <h5 className="m-0 fs-3">CARCOAL</h5>
                <p className="text-light">6 Cars</p>
              </div>
            </div>
            <div className="col">
              <img
                src="https://i.ibb.co/ccBGw9V/01a1594f561344bfb2b0224083c46759.jpg"
                className="card-img img-fluid"
                alt="..."
              />
              <div>
                <h5 className="m-0 fs-3">ZEEP</h5>
                <p className="text-light">5 Cars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByType;
