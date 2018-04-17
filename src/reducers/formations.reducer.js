import {
  FETCHING_FORMATIONS_REST,
  FETCHING_FORMATIONS_REST_SUCCESS,
  FETCHING_FORMATIONS_REST_ERROR,
  RECEIVED_FORMATIONS_WEBSOCKET_DATA
} from '../actions/formations.actions';

// Lookup table that configures the order of appearance on the field by formation and player place.
// The api does not fetch the players in the order we need to render them.
const formationPriorities = {
  442: { 1: 0, 2: 1, 5: 2, 6: 3, 3: 4, 7: 5, 4: 6, 8: 7, 11: 8, 10: 9, 9: 10 },
  4411: { 1: 0, 2: 1, 5: 2, 6: 3, 3: 4, 7: 5, 4: 6, 8: 7, 11: 8, 10: 9, 9: 10 },
  3421: { 1: 0, 6: 1, 5: 2, 4: 3, 2: 4, 7: 5, 8: 6, 3: 7, 10: 8, 11: 9, 9: 10 }
};


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
  case FETCHING_FORMATIONS_REST_SUCCESS: {
    const formation = parseInt(payload.formation, 10);
    const orderedPlayers = [...payload.players].sort((a, b) =>
      formationPriorities[formation][a.formation_place] - formationPriorities[formation][b.formation_place]);

    return { ...state, formation: payload.formation, players: orderedPlayers, team: payload.team, isFetchingFormations: false };
  }
  case FETCHING_FORMATIONS_REST_ERROR:
    return { ...state, isFetchingFormations: false };
  case RECEIVED_FORMATIONS_WEBSOCKET_DATA: {
    const formation = parseInt(payload.formation, 10);
    const orderedPlayers = [...payload.players].sort((a, b) =>
      formationPriorities[formation][a.formation_place] - formationPriorities[formation][b.formation_place]);

    return { ...state, formation: payload.formation, players: orderedPlayers };
  }
  default:
    return state;
  }
}
