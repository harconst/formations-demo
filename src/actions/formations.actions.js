export const FETCHING_FORMATIONS_REST = 'FETCHING_FORMATIONS_REST';
export const FETCHING_FORMATIONS_REST_SUCCESS = 'FETCHING_FORMATIONS_REST_SUCCESS';
export const FETCHING_FORMATIONS_REST_ERROR = 'FETCHING_FORMATIONS_REST_ERROR';
export const RECEIVED_FORMATIONS_WEBSOCKET_DATA = 'RECEIVED_FORMATIONS_WEBSOCKET_DATA';

export const fetchTeamFormations = () => (dispatch) => {
  dispatch({
    type: FETCHING_FORMATIONS_REST
  });

  return fetch('http://lineups.dev.fantech.io')
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(value =>
      dispatch({
        type: FETCHING_FORMATIONS_REST_SUCCESS,
        payload: value
      }))
    .catch(() => {
      dispatch({
        type: FETCHING_FORMATIONS_REST_ERROR
      });
    });
};
