import * as ActionTypes from "./ActionTypes";

export const saveUserName = (userName: string) => ({
  type: ActionTypes.SAVE_USER_NAME,
  payload: userName,
});

export const skipIntro = () => ({
  type: ActionTypes.SKIP_INTRO,
});

export const changeName = () => ({
  type: ActionTypes.CHANGE_NAME,
});
