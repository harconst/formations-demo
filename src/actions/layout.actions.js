export const SET_SNACKBAR_OPEN = 'SET_SNACKBAR_OPEN';

export const setSnackbarOpen = property => (dispatch) => {
  dispatch({
    type: SET_SNACKBAR_OPEN,
    payload: property
  });
};
