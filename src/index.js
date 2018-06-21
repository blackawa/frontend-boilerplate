import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware, ConnectedRouter} from 'connected-react-router';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {createLogger} from 'redux-logger';
import {PersistGate} from 'redux-persist/integration/react';
import App from './components/App';
import reducer from './reducers';
import sagas from './sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  // TODO: change me
  key: 'frontend-boilerplate',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(
  connectRouter(history)(persistedReducer),
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
    createLogger()
  )
);
const persistor = persistStore(store);
sagaMiddleware.run(sagas);

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
