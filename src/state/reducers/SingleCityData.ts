import * as ActionTypes from "../actions/ActionTypes";
import { Action } from "../../types/ActionType";

const initFetchedBasicCityData = {
  isLoading: false,
  errMess: "",
  cityName: "",
  cityCoords: {},
  cityLink: "",
};

const initialExtendedData = {
  isLoading: false,
  errMess: "",
  data: {},
};

export const singleCityDataReducer = (
  state = {
    id: "",
    fetchedBasicCityData: initFetchedBasicCityData,
    extendedCityData: initialExtendedData,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.GET_SINGLE_CITY_DATA: {
      const curentLinkId =
        state.fetchedBasicCityData.cityLink
          .split(":")
          .pop()
          ?.split?.("/")?.[0] ?? "";

      return {
        ...state,
        id: action.payload,
        fetchedBasicCityData:
          curentLinkId === action.payload
            ? state.fetchedBasicCityData
            : { ...initFetchedBasicCityData, isloading: true },
      };
    }
    case ActionTypes.SINGLE_CITY_DATA_FETCH_SUCCEEDED:
      return {
        ...state,
        fetchedBasicCityData: {
          ...initFetchedBasicCityData,
          cityName: action.payload.cityName,
          cityCoords: action.payload.cityCoords,
          cityLink: action.payload.cityLink,
        },
      };
    case ActionTypes.SINGLE_CITY_DATA_FETCH_FAILED:
      return {
        ...state,
        sfetchedBasicCityData: {
          ...initFetchedBasicCityData,
          errMess: "failed to fetch basic city info",
        },
      };
    case ActionTypes.RESET_SINGLE_CITY: {
      return {
        ...state,
        id: "",
        fetchedBasicCityData: initFetchedBasicCityData,
      };
    }
    case ActionTypes.EXTENDED_CITY_DATA_FETCH_SUCCEDEED:
      return {
        ...state,

        extendedCityData: {
          ...initialExtendedData,
          data: action.payload,
        },
      };
    case ActionTypes.EXTENDED_CITY_DATA_FETCH_FAILED:
      return {
        ...state,
        extendedCityData: {
          ...initialExtendedData,
          errMess: "could not fetch extended data",
        },
      };
    default:
      return state;
  }
};
