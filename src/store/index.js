import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger'

import rootReducers from './reducer';

const logger = createLogger({});
const store = createStore(
    rootReducers,
    applyMiddleware(logger, promiseMiddleware)
)

export default store;