import { RootStateOrAny } from "react-redux";
import { createSelector } from "reselect";

const getNearCityNames = (state: RootStateOrAny) =>
  state.globe.fetchedNearCities.cityNames;
const getNearCityCoords = (state: RootStateOrAny) =>
  state.globe.fetchedNearCities.cityCoords;
const getNearCityLinks = (state: RootStateOrAny) =>
  state.globe.fetchedNearCities.cityLinks;

const isThereMoreThanOneCityNearby = createSelector(
  getNearCityNames,
  getNearCityCoords,
  getNearCityLinks,
  (names, coords, links) => {
    if (names.length === 1 || coords.length === 1 || links.length === 1)
      return { name: names[0], coords: coords[0], link: links[0] };
    if (names.length === 0 || coords.length === 0 || links.length === 1)
      return false;
    return true;
  }
);

export { isThereMoreThanOneCityNearby };
