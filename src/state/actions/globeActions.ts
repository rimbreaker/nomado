import * as ActionTypes from "./ActionTypes";

export const startSpinning = () => ({
  type: ActionTypes.START_SPINNING,
});

export const startRevolving = () => ({
  type: ActionTypes.START_REVOLVING,
});

export const startSightseeing = () => ({
  type: ActionTypes.START_SIGHTSEEING,
});

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
