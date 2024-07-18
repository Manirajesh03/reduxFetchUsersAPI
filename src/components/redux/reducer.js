import {
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
} from "./actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_API_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_API_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};
