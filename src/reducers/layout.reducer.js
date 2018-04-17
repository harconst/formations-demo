import { SET_SNACKBAR_OPEN } from '../actions/layout.actions';
import { RECEIVED_FORMATIONS_WEBSOCKET_DATA } from '../actions/formations.actions';

const initialState = {
  snackbarOpen: false,
  message: null
};

export default function postsUpdate(state = initialState, { type, payload }) {
  switch (type) {
  case SET_SNACKBAR_OPEN:
    return { ...state, snackbarOpen: payload };
  case RECEIVED_FORMATIONS_WEBSOCKET_DATA: {
    return { ...state, snackbarOpen: true, message: 'Lineup updated' };
  }
  default:
    return state;
  }
}
