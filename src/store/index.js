import {createStore, combineReducers} from 'redux';
import montoReducer from './amount/reducer';

const reducers = combineReducers({
    montoReducer,
})

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;