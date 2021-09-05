import { all } from "redux-saga/effects";
import throwDartSaga from "./dartSaga";
import recentLocationListSaga from "./recentLocationsListSaga";
import getSingleCityDataSaga from "./singleCityDataSaga";

export default function* rootSaga() {
  yield all([
    throwDartSaga(),
    getSingleCityDataSaga(),
    recentLocationListSaga(),
  ]);
}
