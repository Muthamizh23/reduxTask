import{ createStore, applyMiddleware, compose} from 'redux';
import { thunk } from 'redux-thunk';
import { reducer } from './reducers';

const composeEnhancer = window.__REDUX_DEVTOLLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(
    applyMiddleware(thunk)
));

export { store };