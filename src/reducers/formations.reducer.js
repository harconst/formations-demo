import {
  FETCHING_FORMATIONS_REST,
  FETCHING_FORMATIONS_REST_SUCCESS,
  FETCHING_FORMATIONS_REST_ERROR,
  RECEIVED_FORMATIONS_WEBSOCKET_DATA
} from '../actions/formations.actions';

const initialState = {
  formation: null,
  players: [],
  team: null,
  isFetchingFormations: false
};

export default function postsUpdate(state = initialState, { type, payload }) {
  switch (type) {
  case FETCHING_FORMATIONS_REST:
    return { ...state, isFetchingFormations: true };
  case FETCHING_FORMATIONS_REST_SUCCESS:
    return { ...state, formation: payload.formation, players: payload.players, team: payload.team, isFetchingFormations: false };
  case FETCHING_FORMATIONS_REST_ERROR:
    return { ...state, isFetchingFormations: false };
  case RECEIVED_FORMATIONS_WEBSOCKET_DATA: {
    console.log(payload);
    return { ...state };
  }
  default:
    return state;
  }
}
