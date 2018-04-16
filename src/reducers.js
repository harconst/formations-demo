import { combineReducers } from 'redux';

import formationsReducer from './reducers/formations.reducer';

// Combine with other reducers we may add in the future
const formationsApp = combineReducers({
  formationsState: formationsReducer
});

export default formationsApp;
