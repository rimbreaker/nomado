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
    ?._embedded?.["ua:scores"]?.salaries ?? false;

const areThereCityPhotos = createSelector(getUrbanAreaImages, (images) => {
  if (images)
    return images.map(
      (image: { image: { mobile: string; web: string } }) => image.image
    );
  return false;
});

const areThereSalaryInfo = createSelector(getSalaries, (salaries) => {
  return salaries;
});

const gareThereCityScores = createSelector(getCityScores, (scores) => {
  if (scores)
    return {
      categories: scores.categories,
      summary: scores.summary,
      teleport_city_score: scores.teleport_city_score,
    };
  return false;
});

export { gareThereCityScores, areThereSalaryInfo, areThereCityPhotos };
