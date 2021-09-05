import { WidgetCategory } from "../../types/WidgetCategory";
import * as ActionTypes from "./ActionTypes";

export const setWidgetPageCategory = (category: WidgetCategory) => ({
  type: ActionTypes.SET_WIDGET_PAGE_CATEGORY,
  payload: category,
});
