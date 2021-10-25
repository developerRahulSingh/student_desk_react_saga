import * as types from "../types";

export const getBooksList = (val) => {
    return {
        type: types.FETCH_BOOK_LIST_REQUESTED,
        payload: val
    };
}