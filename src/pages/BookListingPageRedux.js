import { connect } from "react-redux";
import BookListingPage from "./BookListingPage";
import { FetchBooksList } from "../reduxStore/Action/action";

function mapStateToProps(state) {
  return {
    bookListData: state.ListApiReducer.bookListData,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps, { FetchBooksList })(
  BookListingPage
);
