import React from "react";

function Aboutus() {
  return (
    <div className="Aboutus">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 mt-5">
            <h1 className="people ">
              What people are <br /> saying about us
            </h1>
          </div>
          <div className="col-md-6 mt-5">
            <p className="people-para mt-5">
              Everything you need to accept card payments <br /> and grow your
              business anywhere on the planet.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <img src="Assests/cardimg.svg" alt="" />
                <p class="card-text">
                  Money is only a tool. It will take you wherever you wish, but
                  it will not replace you asthe driver.
                </p>
                <div className="d-flex mt-5">
                  <div className="mt-3">
                    <img
                      src="Assests/Image.png"
                      className="img-fluid mt-2"
                      alt=""
                    />
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <h6 className="founder mt-3">Kenn Gallagher</h6>
                    <p className="leader">Founder & Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <div>
              <div class="card-body">
                <img
                  src="Assests/cardimg.svg"
                  className="img-fluiud mt-3"
                  alt=""
                />
                <p class="card-text ">
                  Money makes your life easier. If you're lucky to have it,
                  you're lucky.
                </p>
                <div className="d-flex mt-5">
                  <div className="mt-3">
                    <img
                      src="Assests/Image (1).png"
                      className="img-fluid mt-2"
                      alt=""
                    />
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <h6 className="founder mt-3">Kenn Gallagher</h6>
                    <p className="leader">Founder & Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <div>
              <div class="card-body">
                <img
                  src="Assests/cardimg.svg"
                  className="img-fluid mt-3"
                  alt=""
                />
                <p class="card-text">
                  It is usually people in the money business, finance, and
                  international trade that are really rich.
                </p>
                <div className="d-flex mt-5">
                  <div className="mt-3">
                    <img
                      src="Assests/Image (2).png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <h6 className="founder mt-2">Kenn Gallagher</h6>
                    <p className="leader">Founder & Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-3">
            <img
              src="Assests/airbnb.png"
              className="img-fluid"
              alt=""
              width={200}
            />
          </div>
          <div className="col-md-3">
            <img
              src="Assests/binance.png"
              className="img-fluid mt-2"
              alt=""
              width={200}
            />
          </div>
          <div className="col-md-3">
            <img
              src="Assests/coinbase.png"
              alt=""
              className="img-fluid mt-1"
              width={200}
            />
          </div>
          <div className="col-md-3">
            <img
              src="Assests/dropbox.png"
              alt=""
              className="img-fluid mt-2"
              width={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
