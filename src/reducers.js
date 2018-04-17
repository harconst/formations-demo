import { combineReducers } from 'redux';

import formationsReducer from './reducers/formations.reducer';
import layoutReducer from './reducers/layout.reducer';

// Combine with other reducers we may add in the future
const formationsApp = combineReducers({
  formationsState: formationsReducer,
  layoutState: layoutReducer
});

export default formationsApp;
