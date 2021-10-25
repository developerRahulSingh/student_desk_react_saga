import Axios from "axios";

export function FetchBooksList() {
  return Axios.get(
    "http://studentdesk.in/api/v1/newarrivals?apiname=newArrivals"
  ).then((data) => {
    console.log("data ==>>", data);
    return data.data;
  });
}

// export function FetchBooksDetail(bookId) {
//   return Axios.get("http://studentdesk.in/api/v1/book-details/" + bookId).then(
//     (data) => {
//       dispatch(getBooksDetail(data.data));
//     }
//   );
// }
