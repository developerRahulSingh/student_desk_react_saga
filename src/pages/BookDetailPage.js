import { connect, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchBooksDetail } from "../reduxStore/Action/action";
import "./BookDetailPageStyle.css";

function BookDetailPage({ bookDetailData }) {
  const dispatch = useDispatch();
  const { bookId } = useParams();

  useEffect(() => {
    dispatch(FetchBooksDetail(bookId));
  }, []);
  return (
    <div className="container BookDetailPage background-color">
      {bookDetailData.data == undefined
        ? "loading"
        : bookDetailData.data.map((data) => {
            return (
              <div className="row book-box">
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                  <div className="img-bx">
                    <img
                      alt=""
                      src={
                        data.photo === ""
                          ? require("../assets/defaultbook.png").default
                          : data.photo
                      }
                      className="main-img"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12">
                  <div className="text-title text-align-start">
                    An atlas of love
                  </div>
                  <div className="row price-text">
                    <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12">
                      <div className="text-align-start font-size-16">
                        on sell
                      </div>
                      <div className="text-align-start font-size-16">
                        Book condition:Used
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12">
                      Price : 79
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-align-start">
                      <div className="post-details">
                        <div>Posted On:</div>
                        <div>1, Dec</div>
                      </div>
                      <div className="post-details">
                        <div>Posted From: </div>
                        <div>
                          Naran Lala School Of Industrial Management &amp;
                          Computer
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-align-start">
                      <div className="text-bx">
                        <div>Category: </div>
                        <div>Romance &amp; Short Stories</div>
                      </div>
                      <div className="text-bx">
                        <div>Views on post</div>
                        <div>22379</div>
                      </div>
                    </div>
                  </div>
                  <div className="row btn-bx text-align-start">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6 mob-width-btn">
                      <a
                        href=""
                        id="buybookbt"
                        className="button-style"
                        ng-click="openPop('small',usercurrent,bookcurrent,'For Buy',$event)"
                      >
                        Buy this Book
                      </a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-6 mob-width-btn">
                      <a
                        href=""
                        id="exchangebookbt"
                        ng-click="openPop('small',usercurrent,bookcurrent,'On Exchange',$event)"
                        className="button-style"
                      >
                        Get for Exchange
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 no-paddind ">
                  <div className="text-center user-card">
                    <div className="profile-img-style">
                      <img
                        src="http://images.studentdesk.in/img/icons/large/defaultuser.png"
                        alt="Jill thakkar}"
                        className="profile-img"
                      />
                    </div>
                    <h4 className="">Jill thakkar</h4>
                    <h5>
                      <i className="fa fa-home" aria-hidden="true"></i> Navsari
                    </h5>
                    <div className="view-more-button-div-style">
                      <a
                        href="http://studentdesk.in/all-book/user/Jill-thakkar/17531#?user_id=17531"
                        className="view-more-button-style"
                      >
                        View All Books
                      </a>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
}

function mapStateToProps(state) {
  console.log("bookDetailData ==>> ", state.BookDetailReducer.bookDetailData);
  return {
    bookDetailData: state.BookDetailReducer.bookDetailData,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {};
// }

export default connect(mapStateToProps, { FetchBooksDetail })(BookDetailPage);
