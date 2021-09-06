import * as ActionTypes from "./ActionTypes";

export const pickCoordinates = (coords: Coordinates) => ({
  type: ActionTypes.PICK_COORDINATES,
  payload: coords,
});

export const noCitiesFoundInNearby = () => ({
  type: ActionTypes.NO_NEARBY_CITIES,
});

export const getNearesCitiesSuceeded = (
  cityNames: string[],
  cityCoords: Coordinates[],
  cityLinks: string[]
) => ({
  type: ActionTypes.NEARBY_CITIES_FETCH_SUCCEEDED,
  payload: { cityNames, cityCoords, cityLinks },
});

export const getNearesCitiesFailed = () => ({
  type: ActionTypes.NEARBY_CITIES_FETCH_FAILED,
});
