import React from "react";
import "./BookListComponentStyle.css";
import { Link } from "react-router-dom";

export default function BookListComponent({
  imgLink,
  bookTitle,
  authorName,
  cityName,
  postedByName,
  price,
  postedOn,
  bookId,
}) {
  return (
    <div
      className="row col-xs-12 col-md-12 col-lg-6 p-4 BookListComponent"
    >
      <div className="col-xs-3 col-md-3 col-lg-3">
        <img
          alt=""
          src={
            imgLink === ""
              ? require("../assets/defaultbook.png").default
              : imgLink
          }
          style={{ height: "192px" }}
        />
      </div>
      <div className="col-xs-12 col-md-12 col-lg-6 text-align-left">
        <a href="#" className="p-1 link-text-color link-text-style">
          <Link
            to={`/booksdetailpage/${bookId}`}
            className="book-title-style link-text-color"
          >
            {bookTitle}
          </Link>
        </a>
        <div className="p-1 text-color text-font-size-16 ">
          Author: {authorName}
        </div>
        <div className="p-1 text-color text-font-size-16">City: {cityName}</div>
        <div className="p-1 text-color text-font-size-16">
          Posted by:
          <a
            href="#"
            className="p-1 link-text-style link-text-color text-font-size-16"
          >
            <img
              className="img-size"
              alt=""
              src={require("../assets/defaultuser.png").default}
            />
            <Link
              to="/booklistingpage"
              className="book-title-style link-text-color"
            >
              {postedByName}
            </Link>
          </a>
        </div>
        <div className="col-xs-12 col-md-12 col-lg-12">
          <button
            onClick={() => console.log("Buy Books")}
            className="ButtonStyle "
          >
            Buy Book
          </button>
          <button
            onClick={() => console.log("Exchange Book")}
            className="ButtonStyle"
          >
            Exchange Book
          </button>
        </div>
      </div>
      <div className="col-xs-12 col-md-12 col-lg-3 text-align-left">
        <div className="pb-5 link-text-color">Price: {price}</div>
        <div className="pb-5 text-color">Posted on: {postedOn}</div>
      </div>
    </div>
  );
}
