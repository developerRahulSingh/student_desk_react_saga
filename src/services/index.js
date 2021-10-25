import Axios from "axios";

export function FetchBooksList() {
  return Axios.get(
    "http://studentdesk.in/api/v1/newarrivals?apiname=newArrivals"
  ).then((data) => {
    return data.data;
  });
}

export function FetchBooksDetail(bookId) {
  return Axios.get("http://studentdesk.in/api/v1/book-details/" + bookId).then(
    (data) => {
      return data.data;
    }
  );
}

export function FetchSearchBooksList(searchText) {
  return Axios.get(
    "http://studentdesk.in/api/v1/text-search?apiname=textSearch&text=" +
      searchText
  ).then((data) => {
    return data.data;
  });
}
