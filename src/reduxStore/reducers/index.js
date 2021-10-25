import { combineReducers } from "redux";
import ListApiReducer from "./ListApiReducer";
import BookDetailReducer from "./BookDetailReducer";

const rootReducer = combineReducers({
    ListApiReducer: ListApiReducer,
    BookDetailReducer: BookDetailReducer
})

export default rootReducer