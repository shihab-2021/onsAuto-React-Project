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
                src="https://content.homenetiol.com/698/2163991/1920x1080/9c6dde17ee304dd583b75406cbdab4a0.jpg"
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
                src="https://content.homenetiol.com/698/2163991/1920x1080/84e4bce9636445dcb744c4ab32954153.jpg"
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
                src="https://content.homenetiol.com/698/2163991/1920x1080/bcf42c1dbc734902b4c656a12ea82097.jpg"
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
                src="https://content.homenetiol.com/698/2163991/1920x1080/01a1594f561344bfb2b0224083c46759.jpg"
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
