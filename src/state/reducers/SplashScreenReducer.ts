import * as ActionTypes from "../actions/ActionTypes";
import { Action } from "../../types/ActionType";

export const splashScreenReducer = (
  state = {
    userName: "",
    skippedIntro: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.SAVE_USER_NAME:
      return {
        ...state,
        userName: action.payload,
        skippedIntro: true,
      };
    case ActionTypes.SKIP_INTRO:
      return {
        ...state,
        skippedIntro: true,
      };
    case ActionTypes.CHANGE_NAME:
      return {
        ...state,
        skippedIntro: false,
      };
    default:
      return state;
  }
};
