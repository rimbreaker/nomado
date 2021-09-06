import { put, select, StrictEffect, takeLatest } from "redux-saga/effects";
import * as ActionTypes from "../actions/ActionTypes";
import { saveRecentLocations } from "../actions/recentLocationsListActions";

function* recentLocationListSaga() {
  yield takeLatest(
    ActionTypes.SINGLE_CITY_DATA_FETCH_SUCCEEDED,
    saveRecentLocation
  );
}

function* saveRecentLocation(): Generator<StrictEffect, any, any> {
  const locations: RecentLocation[] = yield select(
    (state) => state.recentLocations.list
  );
  const userName = yield select((state) => state.splashScreen.userName);
  const latestCity = yield select((state) => state.singleCity);
  let tmpLocations = JSON.parse(JSON.stringify(locations));
  //case when there is already thius location on the list
  if (locations.find((city) => city.id === latestCity.id))
    tmpLocations = locations.filter((city) => city.id !== latestCity.id);
  //case when there are over 40 saved locations
  if (locations.length >= 40) tmpLocations = locations.slice(0, -1);

  tmpLocations.unshift({
    id: latestCity.id,
    userName,
    cityName: latestCity.fetchedBasicCityData.cityName,
  });

  const latestCityId = latestCity.fetchedBasicCityData.cityLink
    .split(":")
    .pop()
    .split("/")[0];
  if (latestCityId === latestCity.id)
    yield put(saveRecentLocations(tmpLocations));
  return;
}

export default recentLocationListSaga;
