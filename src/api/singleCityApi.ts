export const fetchBasicCityData = async (
  cityId: string,
  embedLinks?: string
) => {
  let embed = "";
  if (embedLinks) embed = embed + embedLinks;
  return fetch(
    `https://api.teleport.org/api/cities/geonameid:${cityId}/${embed}`
  ).then((response) => response.json());
};
