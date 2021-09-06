import { RootStateOrAny } from "react-redux";
import { createSelector } from "reselect";

const getUrbanAreaSlug = (state: RootStateOrAny) =>
  state.singleCity.extendedCityData.data?._embedded?.["city:urban_area"]
    ?.slug ?? false;

const isThereCitySlug = createSelector(getUrbanAreaSlug, (slug) => slug);

export { isThereCitySlug };
