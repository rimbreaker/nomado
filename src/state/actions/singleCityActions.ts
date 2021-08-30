import * as ActionTypes from "../actions/ActionTypes";

export const getSingleCityData = (id: string) => ({
  type: ActionTypes.GET_SINGLE_CITY_DATA,
  payload: id,
});

export const singleCityDataFetchSuccess = (
  cityName: string,
  cityCoords: Coordinates,
  cityLink: string
) => ({
  type: ActionTypes.SINGLE_CITY_DATA_FETCH_SUCCEEDED,
  payload: { cityName, cityCoords, cityLink },
});

export const singleCityDataFetchFail = () => ({
  type: ActionTypes.SINGLE_CITY_DATA_FETCH_FAILED,
});

export const resetSingleCity = () => ({
  type: ActionTypes.RESET_SINGLE_CITY,
});

export const extendedCityDataFetchSucceeded = (data: unknown) => ({
  type: ActionTypes.EXTENDED_CITY_DATA_FETCH_SUCCEDEED,
  payload: data,
});

export const extendedCityDataFetchFailed = () => ({
  type: ActionTypes.EXTENDED_CITY_DATA_FETCH_FAILED,
});
