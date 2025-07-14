import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"), // Retrieve token from local storage
  isAuthenticated: null, // Initially set to null until authentication is checked
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token); // Store token in local storage
      return {
        ...state,
        ...payload, // Spread the payload to update state
        isAuthenticated: true, // Set authenticated status to true
        loading: false, // Set loading to false after registration
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token"); // Remove token from local storage on failure
      return {
        ...state,
        token: null, // Clear token
        isAuthenticated: false, // Set authenticated status to false
        loading: false, // Set loading to false after failure
      };
    default:
      return state; // Return the current state for any other action
  }
}
