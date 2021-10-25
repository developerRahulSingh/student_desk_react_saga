import React from "react";
import "./HeaderComponentWithMediaQueryStyle.css";

function HeaderComponentWithMediaQuery() {
  return (
    <div className="continer ">
      <div className="row">
        <div className="col">
          <div className="logo">
            <img
              src={require("../assets/logo.png").default}
              alt=""
              className="ImageStyle"
            />
          </div>
          <div className="Button-Div-Style">
            <button
              onClick={() => console.log("Post Books")}
              className="ButtonStyle"
            >
              Post Book
            </button>
            <button
              onClick={() => console.log("Login/Signup")}
              className="ButtonStyle"
            >
              Login/Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponentWithMediaQuery;
