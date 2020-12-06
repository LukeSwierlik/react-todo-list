import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

interface State {}

export const rootReducers = combineReducers<State>({});

const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as any) || compose;

export const store = createStore(rootReducers, {}, composeEnhancers(applyMiddleware(reduxThunk)));
