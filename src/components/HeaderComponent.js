import React from "react";
import "./HeaderComponentStyle.css";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <div className="container" style={{ height: "80px" }}>
      <div className="row">
        <div className="col" style={{ display: "flex" }}>
          <Link to="/">
            <img
              src={require("../assets/logo.png").default}
              alt=""
              className="ImageStyle"
            />
          </Link>
        </div>

        <div className="col col-lg-4">
          <button
            onClick={() => console.log("Post Books")}
            className="ButtonStyle"
          >
            <Link to="/booklistingpage">Post Book</Link>
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
  );
}

export default HeaderComponent;
