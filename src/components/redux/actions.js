import {
  FETCH_API_FAILURE,
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
} from "./actionTypes";

export const fetchApiRequest = () => {
  return {
    type: FETCH_API_REQUEST,
  };
};

export const fetchApiSuccess = (users) => {
  return {
    type: FETCH_API_SUCCESS,
    payload: users,
  };
};

export const fetchApiFailure = (error) => {
  return {
    type: FETCH_API_FAILURE,
    payload: error,
  };
};
