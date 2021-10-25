const INITIAL_STATE = {
    bookDetailData: [],
    searchBookList:[],
    loading: false,
  };
  
  const BookDetailReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "FETCH_BOOK_DETAIL":
        state.loading = false;
        state.bookDetailData = action.payload;
        break;
      case "FETCH_SEARCH_BOOK_LIST":
        state.loading = false;
        state.searchBookList = action.payload;
        break;
      case "LOADING":
        state.loading = true;
        break;
      default:
        return state;
    }
    return { ...state };
  };
  
  export default BookDetailReducer;
  