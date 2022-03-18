import * as SessionApiUtil from "../util/session_api_util";

// ACTION CONSTANTS
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

// ACTION CREATORS
export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
};

export const logoutCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  }
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
};

export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
  }
};

// THUNK ACTION CREATORS
export const logIn = (user) => dispatch => {
  return SessionApiUtil.login(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
};

export const logOut = () => dispatch => {
  return SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()) )
};

export const signUp = (user) => dispatch => {
  return SessionApiUtil.signup(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
};