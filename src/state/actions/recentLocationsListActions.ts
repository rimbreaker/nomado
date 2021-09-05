import * as ActionTypes from "./ActionTypes";

export const saveRecentLocations = (locations: any[]) => ({
  type: ActionTypes.SAVE_RECENT_LOCATIONS,
  payload: locations,
});

export const deleteSingleRecentLoaction = (id: string) => ({
  type: ActionTypes.DELETE_SINGLE_RECENT_LOCATION,
  payload: id,
});

export const clearRecentsList = () => ({
  type: ActionTypes.CLEAR_RECENTS_LIST,
});
