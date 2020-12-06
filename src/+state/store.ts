import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { cardsReducer } from './cards/cards.reducer';

interface State {
    cards: any;
}

export const rootReducers = combineReducers<State>({
    cards: cardsReducer,
});

const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as any) || compose;

export const store = createStore(rootReducers, {}, composeEnhancers(applyMiddleware(reduxThunk)));
