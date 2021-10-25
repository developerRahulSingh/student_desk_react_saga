import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import BookListComponent from "../components/BookListComponent";
import { getBooksList } from "../reduxStore/Action";

function BookListingPage({}) {
  const dispatch = useDispatch();
  const bookListData = useSelector(state => state.ListApiReducer.bookListData);
  useEffect(() => {
    console.log("useEffect call ==>>");
    dispatch(getBooksList());
  }, []);
  return (
    <div className="BookListingPage">
      {console.log("book listong page ",bookListData)}
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

export default BookListingPage;
