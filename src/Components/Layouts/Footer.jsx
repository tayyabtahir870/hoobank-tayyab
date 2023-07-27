import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3 mt-5">
            <img
              src="Assests/hoobank.svg"
              className="img-fluid"
              width={180}
              alt=""
            />
            <p className="hoopara mt-3">
              A new way to make the payments <br /> easy, reliable and secure.
            </p>
          </div>
          <div className="col-md-3 mt-5">
            <h6 className="list1 text-start ">Usefull Links</h6>
            <ul className="list text-start">
              <li className="listcontent">Content</li>
              <li className="listcontent">How it Works</li>
              <li className="listcontent">Create</li>
              <li className="listcontent">Explore</li>
              <li className="listcontent">Terms & Services</li>
            </ul>
          </div>
          <div className="col-md-3 mt-5">
            <h6 className="list1 text-start ">Community</h6>
            <ul className="list text-start">
              <li className="listcontent">Help Center</li>
              <li className="listcontent">Partners</li>
              <li className="listcontent">Suggestions</li>
              <li className="listcontent">Blog</li>
              <li className="listcontent">Newsletters</li>
            </ul>
          </div>
          <div className="col-md-3 mt-5">
            <h6 className="list1 text-start ">Partner</h6>
            <ul className="list text-start">
              <li className="listcontent">Our Partner</li>
              <li className="listcontent">Become a Partner</li>
            </ul>
          </div>
        </div>

        <hr className="line" />

        <div className="lowerfooter">
          <div>
<img src="Assests/copyright.png" className="img-fluid mt-4 mb-4" alt="" />
          </div>
          
          <div>
          <img src="Assests/insta.svg" className="img-fluid mt-4 footerpic" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
