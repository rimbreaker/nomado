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
    coords: { long: 0, lat: 0 } as Coordinates,
    fetchedNearCities: initNearbyCities,
  },
  action: Action
) => {
  switch (action.type) {
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
    case ActionTypes.RESET_SINGLE_CITY: {
      return {
        ...state,
        fetchedNearCities: initNearbyCities,
      };
    }
    default:
      return state;
  }
};
