import {
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE
} from "./actionTypes";

export const fetchApi = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_API_REQUEST });
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((response) => response);
      console.log("🚀 ~ return ~ response:", response);
      dispatch({ type: FETCH_API_SUCCESS, payload: response });
    } catch (error) {
      const errorMessage = "Something went wrong";
      dispatch({ type: FETCH_API_FAILURE, payload: errorMessage });
    }
  };
};
