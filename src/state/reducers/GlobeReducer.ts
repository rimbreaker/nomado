import * as ActionTypes from "../actions/ActionTypes";
import { Action } from "../../types/ActionType";

const initNearbyCities = {
  isLoading: false,
  errMess: "",
  cityNames: [] as string[],
  cityCoords: [] as Coordinates[],
  cityLinks: [] as string[],
};

export const globeReducer = (
  state = {
    fastSpinning: false,
    slowRevolving: true,
    coords: { long: 0, lat: 0 } as Coordinates,
    fetchedNearCities: initNearbyCities,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.START_SPINNING:
      return {
        ...state,
        fastSpinning: true,
        slowRevolving: false,
        fetchedNearCities: initNearbyCities,
      };
    case ActionTypes.START_REVOLVING:
      return {
        ...state,
        fastSpinning: false,
        slowRevolving: true,
      };
    case ActionTypes.START_SIGHTSEEING:
      return {
        ...state,
        fastSpinning: false,
        slowRevolving: false,
      };
    case ActionTypes.PICK_COORDINATES:
      return {
        ...state,
        coords: action.payload,
      };
    case ActionTypes.NO_NEARBY_CITIES:
      return {
        ...state,
        fetchedNearCities: initNearbyCities,
      };
    case ActionTypes.NEARBY_CITIES_FETCH_FAILED:
      return {
        ...state,
        fetchedNearCities: {
          ...initNearbyCities,
          errMess: "failed to fetch",
        },
      };
    case ActionTypes.NEARBY_CITIES_FETCH_SUCCEEDED:
      return {
        ...state,
        fetchedNearCities: {
          ...initNearbyCities,
          cityNames: action.payload.cityNames,
          cityCoords: action.payload.cityCoords,
          cityLinks: action.payload.cityLinks,
        },
      };
    default:
      return state;
  }
};
