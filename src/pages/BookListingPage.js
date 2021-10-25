import { connect, useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import BookListComponent from "../components/BookListComponent";
import { FetchBooksList } from "../reduxStore/Action/action";
import { getBooksList } from "../reduxStore/Action/ListApiAction";

function BookListingPage({}) {
  const dispatch = useDispatch();
  const bookListData = useSelector(state => state.ListApiReducer.bookListData);
  useEffect(() => {
    console.log("useEffect call ==>>");
    dispatch(getBooksList());
  }, []);
  return (
    <div className="BookListingPage">
      {console.log("BookList Data ==>> ", bookListData)}
      {bookListData.length == 0
        ? "loading"
        : bookListData.data.map((data) => {
            return (
              <BookListComponent
                imgLink={data.photo}
                bookTitle={data.name}
                authorName={data.author}
                cityName={data.city.city_name}
                postedByName={data.user.name}
                price={data.price}
                postedOn={data.created_at}
                bookId={data.id}
              />
            );
          })}
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     bookListData: state.ListApiReducer.bookListData,
//   };
// }

// // function mapDispatchToProps(dispatch) {
// //   return {};
// // }

// export default connect(mapStateToProps, { FetchBooksList })(BookListingPage);

export default BookListingPage;
