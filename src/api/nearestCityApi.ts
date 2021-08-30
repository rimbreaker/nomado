export const fetchNearestCitiesData = async (coords: Coordinates) => {
  return fetch(
    `https://api.teleport.org/api/locations/${coords.lat},${coords.long}/?embed=location%3Anearest-cities%2Flocation%3Anearest-city`
  ).then((response) => response.json());
};
