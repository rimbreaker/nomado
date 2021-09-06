import {
  call,
  put,
  select,
  StrictEffect,
  takeLatest,
} from "redux-saga/effects";
import { fetchNearestCitiesData } from "../../api/nearestCityApi";
import * as ActionTypes from "../actions/ActionTypes";
import {
  getNearesCitiesFailed,
  getNearesCitiesSuceeded,
  noCitiesFoundInNearby,
} from "../actions/globeActions";
import { singleCityDataFetchSuccess } from "../actions/singleCityActions";
import crashHandlingDecoratorSaga from "./crashHandlingDecoratorSaga";

function* throwDartSaga() {
  yield takeLatest(
    ActionTypes.PICK_COORDINATES,
    crashHandlingDecoratorSaga,
    throwDart
  );
}

function* throwDart(): Generator<StrictEffect, any, any> {
  const Coords = yield select((state) => state.globe.coords);
  const nearestCitiesData = yield call(fetchNearestCitiesData, Coords);
  const cityNames: string[] = [];
  const citiesCoords: Coordinates[] = [];
  const cityLinks: string[] = [];
  if (nearestCitiesData) {
    nearestCitiesData._embedded["location:nearest-cities"]?.forEach(
      (nearCityData: LocationNearestCityElement) => {
        cityLinks.push(nearCityData._links["location:nearest-city"].href);
        cityNames.push(nearCityData._links["location:nearest-city"].name);
        const latlon =
          nearCityData._embedded["location:nearest-city"].location.latlon;
        citiesCoords.push({ long: latlon.longitude, lat: latlon.latitude });
      }
    );

    if (cityNames.length === 0 || citiesCoords.length === 0) {
      yield put(noCitiesFoundInNearby());
      return;
    }
    yield put(getNearesCitiesSuceeded(cityNames, citiesCoords, cityLinks));
    yield call(checkIfOnlyCity, cityNames, citiesCoords, cityLinks);
  } else {
    yield put(getNearesCitiesFailed());
  }
}

function* checkIfOnlyCity(
  cityNames: string[],
  citiesCoords: Coordinates[],
  cityLinks: string[]
): Generator<StrictEffect, any, any> {
  if (
    cityNames.length === 1 ||
    citiesCoords.length === 1 ||
    cityLinks.length === 1
  )
    yield put(
      singleCityDataFetchSuccess(cityNames[0], citiesCoords[0], cityLinks[0])
    );
}

export default throwDartSaga;
