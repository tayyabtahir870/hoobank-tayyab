import React from "react";

function Heropage() {
  return (
    <div className="Heropage">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div>
              <label className="labeltext " htmlFor="">
                <img src="Assests/Discount.svg" alt="" />
                20% <span className="discount">DISCOUNT FOR</span> 1 MONTH{" "}
                <span className="discount">ACCOUNT</span>
              </label>
            </div>
            <h4 className="herotext">
              The Next <span className="generation">Generation</span> Payment
              Method.
            </h4>

            <p className="heropara">
              Our team of experts uses a methodology to identify <br /> the
              credit cards most likely to fit your needs. <br /> We examine
              annual percentage rates, annual fees.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="Assests/heropic.png"
              className="img-fluid heroimg"
              alt=""
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="user">
              3800+ <span className="active">User Active</span>{" "}
            </div>
          </div>
          <div className="col-md-4">
            <div className="user">
              230+ <span className="active">TRUSTED BY COMPANY</span>{" "}
            </div>
          </div>
          <div className="col-md-4">
            <div className="user">
              $230M+ <span className="active">TRANSACTION</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heropage;
