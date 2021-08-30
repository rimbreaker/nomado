import {
  all,
  call,
  put,
  select,
  StrictEffect,
  takeLeading,
} from "redux-saga/effects";
import { fetchBasicCityData } from "../../api/singleCityApi";
import * as ActionTypes from "../actions/ActionTypes";
import {
  extendedCityDataFetchFailed,
  extendedCityDataFetchSucceeded,
  singleCityDataFetchFail,
  singleCityDataFetchSuccess,
} from "../actions/singleCityActions";
import crashHandlingDecoratorSaga from "./crashHandlingDecoratorSaga";

function* getSingleCityDataSaga() {
  yield takeLeading(
    ActionTypes.GET_SINGLE_CITY_DATA,
    crashHandlingDecoratorSaga,
    getSingleCity
  );
}

function* getSingleCity(): Generator<StrictEffect, any, any> {
  const cityId = yield select((state) => state.singleCity.id);
  const cityDataResopnse = yield call(fetchBasicCityData, cityId);
  if (cityDataResopnse) {
    yield all([
      call(getBasicCityInfo, cityDataResopnse),
      call(getAllPossibleEmbededData, cityDataResopnse),
    ]);
  } else {
    yield put(singleCityDataFetchFail());
  }
}

function* getBasicCityInfo(
  cityDataResopnse: any
): Generator<StrictEffect, any, any> {
  const cityLink = yield select(
    (state) => state.singleCity.fetchedBasicCityData.cityLink
  );
  const cityName = yield select(
    (state) => state.singleCity.fetchedBasicCityData.cityName
  );
  const cityCoords = yield select(
    (state) => state.singleCity.fetchedBasicCityData.cityCoords
  );
  if (
    cityLink.length < 1 ||
    cityName.length < 1 ||
    !cityCoords.long ||
    !cityCoords.lat
  ) {
    const latlon = cityDataResopnse.location.latlon;
    yield put(
      singleCityDataFetchSuccess(
        cityDataResopnse.name,
        { long: latlon.longitude, lat: latlon.latitude },
        cityDataResopnse._links.self.href
      )
    );
  }
}

function* getAllPossibleEmbededData(
  cityDataResopnse: any
): Generator<StrictEffect, any, any> {
  const cityId = yield select((state) => state.singleCity.id);

  const namesToEmbed = Object.keys(cityDataResopnse._links).filter((link) =>
    link.includes("city")
  );
  console.log(namesToEmbed);
  //urban area salary + images + scores

  let embed = "";
  if (namesToEmbed && namesToEmbed.length > 0) {
    namesToEmbed.forEach((link, i) => {
      if (i === 0) embed = embed + "?embed=";
      else embed = embed + "&embed=";
      if (link.includes("urban_area")) {
        embed =
          embed +
          "city:urban_area/ua:images&embed=city:urban_area/ua:salaries&embed=city:urban_area/ua:scores";
      } else embed = embed + link;
    });
  }

  const enrichedCityDataResopnse = yield call(
    fetchBasicCityData,
    cityId,
    embed
  );

  if (enrichedCityDataResopnse) {
    yield put(extendedCityDataFetchSucceeded(enrichedCityDataResopnse));
  } else {
    yield put(extendedCityDataFetchFailed());
  }
}

export default getSingleCityDataSaga;
