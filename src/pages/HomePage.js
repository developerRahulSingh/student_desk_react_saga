import { connect, useDispatch } from "react-redux";
import React from "react";
import { useParams } from "react-router-dom";
import "./HomePageStyle.css";
import { FetchSearchBooksList } from "../reduxStore/Action/action";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function HomePage({ bookListData }) {
  const [newArrivalData, setNewArrivalData] = React.useState([
    {
      title: "Javascriptbible",
      imglink: require("../assets/content.jpeg").default,
      amount: "$250",
    },
    {
      title: "Javascriptbible",
      imglink: require("../assets/content.jpeg").default,
      amount: "$250",
    },
    {
      title: "An atlas of lov...",
      imglink: "",
      amount: "$250",
    },
    {
      title: "An atlas of lov...",
      imglink: "",
      amount: "$250",
    },
    {
      title: "The rozabal lin...",
      imglink: require("../assets/content.jpeg").default,
      amount: "For Free",
    },
    {
      title: "The rozabal lin...",
      imglink: require("../assets/content.jpeg").default,
      amount: "$250",
    },
    {
      title: "The rozabal lin...",
      imglink: "",
      amount: "$250",
    },
    {
      title: "The rozabal lin...",
      imglink: require("../assets/content.jpeg").default,
      amount: "For Free",
    },
  ]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const dispatch = useDispatch();
  const { searchBookList } = useParams();
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(FetchSearchBooksList(searchTerm));
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div className="bg-container">
        <div className="title-style pt-5">
          I want to Buy/Sell/Exchange used Book in my
        </div>
        <div className="bg-transparent py-5">
          <button
            onClick={() => console.log("City")}
            className="button-style bg-transparent"
          >
            CITY
          </button>
          <button
            onClick={() => console.log("Institute")}
            className="button-style bg-transparent"
          >
            INSTITUTE
          </button>
        </div>

        <div className="col link-title-style ">
          Books in popular cities:
          <a href="#" className="mx-1 link-style">
            Delhi
          </a>
          <a href="#" className="mx-1 link-style">
            Pune
          </a>
          <a href="#" className="mx-1 link-style">
            Bangalore
          </a>
          <a href="#" className="mx-1 link-style">
            Ahmedabad
          </a>
        </div>

        <div className="font-size-24 text-white py-3">- OR -</div>

        <div className="justify-content-md-center pt-2">
          <div
            className="input-group "
            style={{ width: "40%", margin: "10px auto" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={searchTerm}
              onChange={handleChange}
            />
            {bookListData.data !== undefined
              ? bookListData.data.map((item) => <p>{item.name}</p>)
              : ""}
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                style={{ background: "#76ba5c" }}
                type="button"
                onClick={() => dispatch(FetchSearchBooksList(searchTerm))}
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div
            className="pb-5 searchBar-links-box-style"
            style={{ width: "40%", margin: "10px auto" }}
          >
            <div className="row py-2">
              <div className="col">
                <a href="#" className="mx-1 link-style">
                  Books |
                </a>
                <a href="#" className="mx-1 link-style">
                  Textbook / Study notes |
                </a>
                <a href="#" className="mx-1 link-style">
                  Magazines |
                </a>
                <a href="#" className="mx-1 link-style">
                  Book set
                </a>
              </div>
            </div>
          </div>
          <div className="row py-5 bg-white description-style">
            StudentDesk is bridging communication gap and connecting book
            readers of various institutes. Reuse, and Circulation of books will
            not only make accessing book economical but will also help in
            building the sustainable environment.
          </div>
          <div className="row pt-5 new-arrival-style">
            <h3 className="new-arrival-text-style">NEW ARRIVALS</h3>
            <div className="main-line-style"></div>
          </div>
          <div className="row pb-5 new-arrival-style">
            <div className="col align-self-center  ">
              <button
                onClick={() => console.log("Prev")}
                className="new-arrival-button-style"
              >
                prev
              </button>
            </div>

            {newArrivalData.map((data, index) => {
              return (
                <li
                  className="col"
                  style={{ listStyleType: "none" }}
                  key={index}
                >
                  <div key={index}>
                    <img
                      alt=""
                      src={
                        data.imglink === ""
                          ? require("../assets/defaultbook.png").default
                          : data.imglink
                      }
                      style={{ height: "150px", width: "120px" }}
                    />
                    <div>{data.title}</div>
                    <div>{data.amount}</div>
                  </div>
                </li>
              );
            })}
            <div className="col align-self-center">
              <button
                onClick={() => console.log("Next")}
                className="new-arrival-button-style"
              >
                next
              </button>
            </div>
            <div className="pb-5">
              <button
                onClick={() => console.log("View More")}
                className="ButtonStyle"
              >
                View More
              </button>
            </div>
          </div>
          <div className="row pt-5 how-it-works-style">
            <h3 className="new-arrival-text-style">HOW IT WORKS</h3>
            <div className="main-line-style"></div>
          </div>
            
          <div className="row p-5 how-it-works-style">
            <img
              alt=""
              src={require("../assets/how-studentdesk-work-d.png").default}
            />
          </div>
          <div className="row pb-5 new-arrival-style">
            <div className="row pt-5 new-arrival-style">
              <h3 className="new-arrival-text-style">
                STUDENTDESK IN THE NEWS
              </h3>
              <div className="main-line-style"></div>
            </div>
          </div>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div
              id="carouselExampleIndicators"
              className="carousel slide "
              data-ride="carousel"
              style={{
                height: "200px",
                width: "100%",
                background: "#f3f3f3",
              }}
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col col-xs-4 ">
                      <img
                        className="d-block "
                        src={require("../assets/dna_160.png").default}
                        alt="First slide"
                      />
                    </div>
                    <div className="col col-xs-4">
                      <img
                        className="d-block "
                        src={require("../assets/nbw_160.png").default}
                        alt="Second slide"
                      />
                    </div>
                    <div className="col col-xs-4">
                      <img
                        className="d-block "
                        src={require("../assets/techstory_160.png").default}
                        alt="Third slide"
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block "
                    src={require("../assets/nbw_160.png").default}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block "
                    src={require("../assets/techstory_160.png").default}
                    alt="Third slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block "
                    src={require("../assets/knowstartup_160.png").default}
                    alt="Third slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block"
                    src={require("../assets/sakaltimes_160.png").default}
                    alt="Third slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("searchBookList ==>> ", state.BookDetailReducer.searchBookList);
  console.log("searchBookList reducer ==>> ", state.BookDetailReducer);
  console.log("searchBookList state ==>> ", state);
  return {
    bookListData: state.BookDetailReducer.searchBookList,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {};
// }

export default connect(mapStateToProps, { FetchSearchBooksList })(HomePage);

// export default HomePage;
