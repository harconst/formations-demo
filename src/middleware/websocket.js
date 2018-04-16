import Pusher from 'pusher-js';

import {
  FETCHING_FORMATIONS_REST_SUCCESS,
  RECEIVED_FORMATIONS_WEBSOCKET_DATA
} from '../actions/formations.actions';

let websocket;
let channel;
// open the websocket as a side effect of successful rest api call.
const middleware = store => next => (action) => {
  switch (action.type) {
  case FETCHING_FORMATIONS_REST_SUCCESS:
    websocket = new Pusher('6a3acdaba86ad858948b', {
      cluster: 'eu'
    });

    channel = websocket.subscribe('lineups');
    channel.bind('lineup-updated', (data) => {
      store.dispatch({ type: RECEIVED_FORMATIONS_WEBSOCKET_DATA, payload: data });
    });
    break;
  case 'WEBSOCKET:DISCONNECT':
    websocket.disconnect();
    break;
  default:
    break;
  }
  return next(action);
};

export default middleware;
