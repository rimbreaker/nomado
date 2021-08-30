import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { splashScreenReducer } from "./state/reducers/SplashScreenReducer";
import { globeReducer } from "./state/reducers/GlobeReducer";
import rootSaga from "./state/sagas/rootSaga";
import { singleCityDataReducer } from "./state/reducers/SingleCityData";

const persistConfig = {
  key: "root",
  storage,
  debug: true,
};

const rootReducer = combineReducers({
  splashScreen: splashScreenReducer,
  globe: globeReducer,
  singleCity: singleCityDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const saga = createSagaMiddleware();

export const ConfigureStore = () => {
  const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(saga))
  );
  const persistor = persistStore(store);
  saga.run(rootSaga);

  if ((window as Window & typeof globalThis & { Cypress: any }).Cypress) {
    (window as Window & typeof globalThis & { store: any }).store = store;
  }

  return { store, persistor };
};
