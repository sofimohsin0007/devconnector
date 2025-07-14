import { v4 as uuidv4 } from "uuid"; // uuid for generating unique IDs
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert =
  (msg, alertType, timeout = 5000) =>
  (dispatch) => {
    const id = uuidv4(); // Generate a unique ID for the alert
    dispatch({
      type: SET_ALERT,
      payload: { id, msg, alertType },
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      timeout
    ); // Example: remove alert after 5 seconds
  };
