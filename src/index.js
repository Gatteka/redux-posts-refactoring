import React from 'react';
import { render }  from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import uuid from 'uuid/v4';
// noinspection ES6CheckImport
import createSagaMiddleware from 'redux-saga'
import {doubleAction} from './containers/Buttons/Button'

console.log(uuid());
const sagaMiddleware = createSagaMiddleware();
export default sagaMiddleware;

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

sagaMiddleware.run(doubleAction);
export const action = type => store.dispatch(type);

// function* helloSaga() {
//     console.log('Hello Sagas!')
// }
//
// function* watchIncrementAsync() {
//     yield takeEvery('SHOW_FORM', helloSaga)
// }
//
// sagaMiddleware.run(watchIncrementAsync);