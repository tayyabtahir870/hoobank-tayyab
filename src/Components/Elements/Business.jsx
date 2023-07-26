import React from "react";

function Business() {
  return (
    <div className="Business">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8 mt-5">
            <h1 className="text-wrapper mt-5">
              You do the business, <br /> we’ll handle the money.
            </h1>
            <p className="text mt-3">
              With the right credit card, you can improve your financial life by{" "}
              <br />
              building credit, earning rewards and saving money. But with <br />
              hundreds of credit cards on the market.
            </p>
            <button className="button">Get Started</button>
          </div>
          <div className="col-md-4 mt-5">
            <div className="d-flex mt-5">
              <div className="mt-3">
                <img src="Assests/Star.png" className="img-fluid" alt="" />
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div>
                <h6 className="rewards">Rewards</h6>
                <p className="rewards-para">
                  The best credit cards offer some tantalizing <br />{" "}
                  combinations of promotions and prizes
                </p>
              </div>
            </div>
            <div className="d-flex mt-3  shield-background">
              <div className="mt-3">
                <img
                  src="Assests/Shield Done.png"
                  className="img-fluid mt-3"
                  alt=""
                />
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div>
                <h6 className="rewards mt-3">Rewards</h6>
                <p className="rewards-para">
                  The best credit cards offer some tantalizing <br />{" "}
                  combinations of promotions and prizes
                </p>
              </div>
            </div>
            <div className="d-flex mt-3">
              <div className="mt-3">
                <img src="Assests/Send.png" className="img-fluid" alt="" />
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div>
                <h6 className="rewards">Rewards</h6>
                <p className="rewards-para">
                  The best credit cards offer some tantalizing <br />{" "}
                  combinations of promotions and prizes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
