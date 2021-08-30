import { all } from "redux-saga/effects";
import throwDartSaga from "./dartSaga";
import getSingleCityDataSaga from "./singleCityDataSaga";

export default function* rootSaga() {
  yield all([throwDartSaga(), getSingleCityDataSaga()]);
}
