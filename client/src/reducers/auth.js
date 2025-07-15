import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"), // Retrieve token from local storage
  isAuthenticated: null, // Initially set to null until authentication is checked
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true, // Set authenticated status to true
        loading: false, // Set loading to false after user is loaded
        user: payload, // Update user data with the payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token); // Store token in local storage
      return {
        ...state,
        ...payload, // Spread the payload to update state
        isAuthenticated: true, // Set authenticated status to true
        loading: false, // Set loading to false after registration
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token"); // Remove token from local storage on failure
      return {
        ...state,
        token: null, // Clear token
        isAuthenticated: false, // Set authenticated status to false
        loading: false, // Set loading to false after failure
        user: null, // Clear user data
      };
    default:
      return state; // Return the current state for any other action
  }
}
