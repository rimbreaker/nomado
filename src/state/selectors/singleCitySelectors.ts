import { RootStateOrAny } from "react-redux";
import { createSelector } from "reselect";

const getUrbanAreaImages = (state: RootStateOrAny) =>
  state.singleCity.extendedCityData.data?._embedded?.["city:urban_area"]
    ?._embedded?.["ua:images"]?.photos ?? false;

const getSalaries = (state: RootStateOrAny) =>
  state.singleCity.extendedCityData.data?._embedded?.["city:urban_area"]
    ?._embedded?.["ua:salaries"]?.salaries ?? false;

const getCityScores = (state: RootStateOrAny) =>
  state.singleCity.extendedCityData.data?._embedded?.["city:urban_area"]
    ?._embedded?.["ua:scores"] ?? false;

const getUrbanAreaBasics = (state: RootStateOrAny) =>
  state.singleCity.extendedCityData.data?._embedded?.["city:urban_area"] ??
  false;

const getUrbanAreaDetails = (state: RootStateOrAny) =>
  state.singleCity.extendedCityData.data?._embedded?.["city:urban_area"]
    ?._embedded?.["ua:details"]?.categories ?? false;

const getUrbanAreaSlug = (state: RootStateOrAny) =>
  state.singleCity.extendedCityData.data?._embedded?.["city:urban_area"]
    ?.slug ?? false;

const areThereCityPhotos = createSelector(getUrbanAreaImages, (images) => {
  if (images)
    return images
      .map((image: { image: { mobile: string; web: string } }) => [
        image.image.mobile,
        image.image.web,
      ])
      .flat();
  return false;
});

const areThereSalaryInfo = createSelector(getSalaries, (salaries) => {
  return salaries;
});

const areThereCityScores = createSelector(getCityScores, (scores) => {
  if (scores)
    return {
      categories: scores.categories,
      summary: scores.summary,
      teleport_city_score: scores.teleport_city_score,
    };
  return false;
});

const areThereUrbanAreaBasics = createSelector(
  getUrbanAreaBasics,
  (basics) => basics
);

const areThereUrbanAreaDetails = createSelector(
  getUrbanAreaDetails,
  (details) => details
);

const isThereCitySlug =createSelector(getUrbanAreaSlug,(slug)=>slug)

export {
  areThereCityScores,
  areThereSalaryInfo,
  areThereCityPhotos,
  areThereUrbanAreaBasics,
  areThereUrbanAreaDetails,
  isThereCitySlug
};
