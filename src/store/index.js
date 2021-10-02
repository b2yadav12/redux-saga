import { createStore, combineReducers } from 'redux'
import { LOGO_CHANGE, THEME_COLOR } from './constants';
const defaultState = {
  logo: '',
  bg_color: ''
};

function themeReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGO_CHANGE:
      return { ...state, logo: action.payload }
    case THEME_COLOR:
      return { ...state, bg_color: action.payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({theme: themeReducer})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;