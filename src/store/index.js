import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {routerMiddleware} from 'connected-react-router';
import {createLogger} from 'redux-logger';
import reducer from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(
  {
    // TODO: change key
    key: 'frontend-boilerplate',
    storage,
  },
  reducer(history)
);

export const store = createStore(
  persistedReducer,
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
    createLogger()
  )
);

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);
