import * as ActionTypes from "../actions/ActionTypes";
import { Action } from "../../types/ActionType";

export const widgetPageReducer = (
  state = {
    category: "startup",
  },
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.SET_WIDGET_PAGE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
