import React from "react";
import "./FooterComponentStyle.css";

function FooterComponent() {
  return (
    <div className="main-div-style">
      <div className="row pb-5 upper-container-div-style">
        <div className="col col-lg-4" style={{ textAlign: "left" }}>
          <div className="heading">
            <h3 className="pt-3 header-text-style">
              Old Books in popular cities
            </h3>
            <div className="main-line-style"></div>
          </div>

          <div className="row" style={{ float: "left" }}>
            <div className="row col-lg-6">
              <a href="#" className="mx-1 link-title-style">
                Old Books in Delhi
              </a>
              <a href="#" className="mx-1 link-title-style">
                Old Books in Pune
              </a>
              <a href="#" className="mx-1 link-title-style">
                Old Books in Bangalore
              </a>
              <a href="#" className="mx-1 link-title-style">
                Old Books in Ahmedabad
              </a>
              <a href="#" className="mx-1 link-title-style">
                Old Books in Hyderabad
              </a>
              <a href="#" className="mx-1 link-title-style">
                Old Books in Chandigarh
              </a>
            </div>
            <div className="row col-lg-6">
              <a href="#" className="mx-1 link-title-style">
                Old Books in Mumbai
              </a>
              <a href="#" className="mx-1 link-title-style">
                Old Books in Gurgaon
              </a>
              <a href="#" className="mx-1 link-title-style">
                Old Books in Vadodara
              </a>
              <a href="#" className="mx-1 link-title-style">
                Old Books in Noida
              </a>
              <a href="#" className="mx-1 link-title-style">
                Old Books in Chennai
              </a>
              <a href="#" className="mx-1 link-title-style">
                Old Books in Coimbatore
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4" style={{ textAlign: "left" }}>
          <div className="heading">
            <h3 className="pt-3 header-text-style">Quick Links</h3>
            <div className="main-line-style"></div>
          </div>
          <div className="row" style={{ float: "left" }}>
            <a href="#" className="mx-1 link-title-style">
              Old books(Used books)
            </a>
            <a href="#" className="mx-1 link-title-style">
              Free/Donate Old Books
            </a>
            <a href="#" className="mx-1 link-title-style">
              Entrance Exams books
            </a>
            <a href="#" className="mx-1 link-title-style">
              Magazine
            </a>
            <a href="#" className="mx-1 link-title-style">
              Exchange Novels
            </a>
            <a href="#" className="mx-1 link-title-style">
              Buy used textbooks
            </a>
            <a href="#" className="mx-1 link-title-style">
              Buy used novels
            </a>
          </div>
        </div>

        <div className="col col-lg-4" style={{ textAlign: "left" }}>
          <div className="heading">
            <h3 className="pt-3 header-text-style">Keep Connected</h3>
            <div className="main-line-style"></div>
          </div>
          <div className="row" style={{ float: "left" }}>
            <a href="#" className="mx-1 link-title-style">
              About us
            </a>
            <a href="#" className="mx-1 link-title-style">
              Privacy Policy
            </a>
            <a href="#" className="mx-1 link-title-style">
              Terms & Conditions
            </a>
            <a href="#" className="mx-1 link-title-style">
              Contact us
            </a>
            <a href="#" className="mx-1 link-title-style">
              Blog
            </a>
          </div>
        </div>
      </div>
      <div className="footer-devider-line-style" />
      <div className="copyright-text-style">
        © Copyright 2020. All Rights Reserved. Product of
        <a
          href="http://codecrunch.co"
          target="_blank"
          className="copyright-link-text-style"
        >
          CodeCrunch Techlabs Pvt. Ltd.
        </a>
        <a href="https://www.facebook.com/studentdesk.in" target="_blank" className="f-link"> 
        <img src={require("../assets/social2.png").default} alt="" className="ImageStyle"/>
        </a>
        <a href="https://plus.google.com/+StudentdeskIn_in" target="_blank" className="t-link">
        <img src={require("../assets/social3.png").default} alt="" className="ImageStyle"/>
        </a>
        <a href="https://twitter.com/studentdesk_in" className="g-link" target="_blank">
        <img src={require("../assets/social1.png").default} alt="" className="ImageStyle"/>
        </a>

      </div>
    </div>
  );
}

export default FooterComponent;
