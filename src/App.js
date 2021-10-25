import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import FooterComponent from "./components/FooterComponent";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookListingPage from "./pages/BookListingPage";
import BookDetailPage from "./pages/BookDetailPage";
import HeaderComponentWithMediaQuery from "./components/HeaderComponentWithMediaQuery";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      {/* <HeaderComponentWithMediaQuery/> */}
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/booklistingpage">
            <BookListingPage />
          </Route>
          <Route path="/booksdetailpage/:bookId">
            <BookDetailPage />
          </Route>
        </Switch>
      <FooterComponent />
    </div>
  );
}

export default App;
