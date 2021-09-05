import * as ActionTypes from "../actions/ActionTypes";
import { Action } from "../../types/ActionType";

export const recentLocationsListReducer = (
  state = {
    list: [],
  },
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.SAVE_RECENT_LOCATIONS:
      return {
        ...state,
        list: action.payload,
      };
    case ActionTypes.DELETE_SINGLE_RECENT_LOCATION:
      return {
        ...state,
        list: state.list.filter((city: any) => city.id !== action.payload),
      };
    case ActionTypes.CLEAR_RECENTS_LIST:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
