import Axios from "axios";

export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const getBooksList = (val) => {
    return {
        type: "FETCH_BOOKS_LIST",
        payload: val
    };
}

export function FetchBooksList() {
    return dispatch => {
        dispatch(loading());
        Axios.get("http://studentdesk.in/api/v1/newarrivals?apiname=newArrivals").then((data) => {
            dispatch(getBooksList(data.data));
        })
    }
}

export const getBooksDetail = (val) => {
    return {
        type: "FETCH_BOOK_DETAIL",
        payload: val
    };
}

export function FetchBooksDetail(bookId) {
    return dispatch => {
        dispatch(loading());
        Axios.get("http://studentdesk.in/api/v1/book-details/" + bookId).then((data) => {
            dispatch(getBooksDetail(data.data));
        })
    }
}

export const getSearchBooksList = (val) => {
    return {
        type: "FETCH_SEARCH_BOOK_LIST",
        payload: val
    };
}

export function FetchSearchBooksList(searchText) {
    return dispatch => {
        dispatch(loading());
        Axios.get("http://studentdesk.in/api/v1/text-search?apiname=textSearch&text=" + searchText).then((data) => {
            dispatch(getSearchBooksList(data.data));
        })
    }
}